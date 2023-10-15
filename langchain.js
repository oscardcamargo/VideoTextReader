import { Buffer } from 'buffer';

// @ts-ignore
window.Buffer = Buffer;
import { DetectDocumentTextCommand, TextractClient } from "@aws-sdk/client-textract";
import { PromptTemplate } from "langchain/prompts";
import { ChatOpenAI } from "langchain/chat_models/openai";
// import fs from "fs";
// import AWS from "aws-sdk";

const res = await chrome.storage.local.get(["OpenAIAPIKey", "AWSAPIKey", "AWSAPISecret"]);
let OpenAIAPIKey = res.OpenAIAPIKey;
let AWSAPIKey = res.AWSAPIKey;
let AWSAPISecret = res.AWSAPISecret;

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

async function genExplanation(imageData) {
    console.log("genExplanation");
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
    console.log("genStudyGuide");
    const prompt = PromptTemplate.fromTemplate(
        'Create a summary of {extractedText} and write three short questions based on the text. Output only what I ask and nothing else. Can make assumptions if you do not understand something'
    );

    const chain = prompt.pipe(model);

    const extractedText = await run();

    const result = await chain.invoke({
        extractedText: extractedText
    });

    return result.content
}

export { genExplanation, genStudyGuide };