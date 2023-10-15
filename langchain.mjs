import { DetectDocumentTextCommand, TextractClient } from "@aws-sdk/client-textract";
let OpenAIAPIKey = "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";
// chrome.storage.local.get(["OpenAIAPIKey"]).then((result) => {
//     OpenAIAPIKey = result.OpenAIAPIKey;
// });
let AWSAPIKey = "AKIAYRVDPATQEIRAC3EL";
// chrome.storage.local.get(["AWSAPIKey"]).then((result) => {
//     AWSAPIKey = result.AWSAPIKey;
// });
let AWSAPISecret = "h+ZhhUXzNhSJE376uJ8zMXuX3QfScFKluZrRf/kz";
// chrome.storage.local.get(["AWSAPISecret"]).then((result) => {
//     AWSAPISecret = result.AWSAPISecret;
// });

import { PromptTemplate } from "langchain/prompts";
import { ChatOpenAI } from "langchain/chat_models/openai";
import fs from "fs";
import AWS from "aws-sdk";

const model = new ChatOpenAI({
    modelName: 'gpt-3.5-turbo',
    apiKey: "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"

});

const client = new TextractClient({
    region: "us-east-1",
    credentials: {
        secretAccessKey: AWSAPISecret,
        accessKeyId: AWSAPIKey,
    }
});


async function run(base64Data){
    // Initialize Textract client


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

    const prompt = PromptTemplate.fromTemplate(
        'Explain in one paragraph {extractedText}. Output only what I ask and nothing else'
    );

    const chain = prompt.pipe(model);

    const extractedText = await run(imageData);

    const result = await chain.invoke({
        extractedText: extractedText,
    });

    return result.content
}

async function genStudyGuide() {
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