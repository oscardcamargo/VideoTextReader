import {DetectDocumentTextCommand, TextractClient} from "@aws-sdk/client-textract";
import dotenv from 'dotenv';
dotenv.config();
import { PromptTemplate } from "langchain/prompts";
import { ChatOpenAI } from "langchain/chat_models/openai";
import fs from "fs";

const model = new ChatOpenAI({
    modelName: 'gpt-3.5-turbo',
    apiKey: process.env.OPENAI_API_KEY
});

async function run(){

    // Initialize Textract client
    const client = new TextractClient({
        region: "us-east-1",
        credentials: {
            secretAccessKey: process.env.AWS_API_SECRET,
            accessKeyId: process.env.AWS_API_KEY,
        }

    });

    // Read image file
    const fileBuffer = fs.readFileSync("video_frame2.jpeg");

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
        // const rawText = "print(\"hello world\")";
        console.log("Extracted Text:", rawText);
        return rawText;

    } catch (err) {
        console.error("An error occurred:", err);
        return "error";
    }

}

async function genSummary() {
    const prompt = PromptTemplate.fromTemplate(
        'Explain in one paragraph {extractedText}. Output only what I ask and nothing else'
    );

    const chain = prompt.pipe(model);

    const extractedText = await run();

    const result = await chain.invoke({
        extractedText: extractedText,
    });


    const body_output = result.content

    return body_output
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


    const body_output = result.content;

    return body_output
}

export { genSummary, genStudyGuide };