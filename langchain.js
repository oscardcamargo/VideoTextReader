import { Buffer } from 'buffer';

// @ts-ignore
window.Buffer = Buffer;
import { DetectDocumentTextCommand, TextractClient } from "@aws-sdk/client-textract";
import { PromptTemplate } from "langchain/prompts";
import { ChatOpenAI } from "langchain/chat_models/openai";
// import fs from "fs";
// import AWS from "aws-sdk";

// let OpenAIAPIKey = "";
// chrome.storage.local.get(["OpenAIAPIKey"]).then((result) => {
//     OpenAIAPIKey = result.OpenAIAPIKey;
// });
// let AWSAPIKey = "";
// chrome.storage.local.get(["AWSAPIKey"]).then((result) => {
//     AWSAPIKey = result.AWSAPIKey;
// });
// let AWSAPISecret = "";
// chrome.storage.local.get(["AWSAPISecret"]).then((result) => {
//     AWSAPISecret = result.AWSAPISecret;
// });

// chrome.storage.local.get(["OpenAIAPIKey", "AWSAPIKey", "AWSAPISecret"], (result) => {
//     OpenAIAPIKey = result.OpenAIAPIKey;
//     AWSAPIKey = result.AWSAPIKey;
//     AWSAPISecret = result.AWSAPISecret;
//     console.log("OpenAIAPIKey: " + result.OpenAIAPIKey);
//     console.log("AWSAPIKey: " + result.AWSAPIKey);
//     console.log("AWSAPISecret: " + result.AWSAPISecret);
// });

// chrome.storage.local.get(["OpenAIAPIKey", "AWSAPIKey", "AWSAPISecret"]).then((result) => {
//     OpenAIAPIKey = result.OpenAIAPIKey;
//     AWSAPIKey = result.AWSAPIKey;
//     AWSAPISecret = result.AWSAPISecret;
//     console.log("OpenAIAPIKey1: " + result.OpenAIAPIKey);
//     console.log("AWSAPIKey1: " + result.AWSAPIKey);
//     console.log("AWSAPISecret1: " + result.AWSAPISecret);
// });

const res = await chrome.storage.local.get(["OpenAIAPIKey", "AWSAPIKey", "AWSAPISecret"]);
let OpenAIAPIKey = res.OpenAIAPIKey;
let AWSAPIKey = res.AWSAPIKey;
let AWSAPISecret = res.AWSAPISecret;
console.log("OpenAIAPIKey2: " + res.OpenAIAPIKey);
console.log("AWSAPIKey2: " + res.AWSAPIKey);
console.log("AWSAPISecret2: " + res.AWSAPISecret);

const model = new ChatOpenAI({
    modelName: 'gpt-3.5-turbo',
    openAIApiKey: OpenAIAPIKey
});

const client = new TextractClient({
    region: "us-east-1",
    credentials: {
        secretAccessKey: AWSAPISecret,
        accessKeyId: AWSAPIKey,
    }
});


// Initialize Textract client
async function run(base64Data) {
    console.log("run");
    // Read base64 encoded image from text file
    // let base64Data = fs.readFileSync('base64-example.txt', 'utf8');

    // Remove the base64 heading if present
    base64Data = base64Data.split(',')[1] || base64Data;

    // Convert base64 to Buffer
    const fileBuffer = Buffer.from(base64Data, 'base64');

    // Prepare command
    const command = new DetectDocumentTextCommand({
        Document: {
            Bytes: fileBuffer,
        },
    });

    try {
        // Run Textract
        const result = await client.send(command);

        // Parse result
        const rawText = result.Blocks.map((block) => block.Text).join(" ");
        console.log("Extracted Text:", rawText);
        return rawText;

    } catch (err) {
        console.error("An error occurred:", err);
        return "error";
    }
}

async function genSummary(imageData) {
    console.log("genSummary");
    const prompt = PromptTemplate.fromTemplate(
        'Explain in one paragraph {extractedText}. Output only what I ask and nothing else'
    );

    const chain = prompt.pipe(model);

    const extractedText = await run(imageData);

    const result = await chain.invoke({
        extractedText: extractedText,
    });

    console.log("result");
    console.log(result);
    console.log("result.content");
    console.log(result.content);
    console.log("result.json");
    console.log(result.json);
    return result.content
}

async function genStudyGuide() {
    console.log("genStudyGuide");
    const prompt = PromptTemplate.fromTemplate(
        'Create a summary of {extractedText} and write one short question based on the text. Output only what I ask and nothing else. Can make assumptions if you do not understand something'
    );

    const chain = prompt.pipe(model);

    const extractedText = await run();

    const result = await chain.invoke({
        extractedText: extractedText
    });

    return result.content
}

// let base64Data = fs.readFileSync('base64-example.txt', 'utf8');
// genSummary(base64Data);

export { genSummary, genStudyGuide };