import {DetectDocumentTextCommand, TextractClient} from "@aws-sdk/client-textract";

process.env.OPENAI_API_KEY="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";

import { PromptTemplate } from "langchain/prompts";

import { ChatOpenAI } from "langchain/chat_models/openai";
import fs from "fs";

/// AWS text extraction.
const run = async () => {
    // Initialize Textract client
    const client = new TextractClient({
        region: "us-east-1",
        credentials: {
            secretAccessKey: "cUuJWTK5svbfw0x7wD7BUvkw4BzWKWfLd9urUu8n",
            accessKeyId: "AKIAYRVDPATQI3RKMQIR",
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

};

//OpenAi ChatGpt interpretation of image

const prompt1 = PromptTemplate.fromTemplate(
    `Rewrite {extractedText} so that it is readible. Create a summary of the text. Write one short question based on the text. Output only what I ask and nothing else`
);

const model = new ChatOpenAI({
    modelName: 'gpt-3.5-turbo'
});

const chain = prompt1.pipe(model)

const extractedText = await run();

const result = await chain.invoke({
    extractedText: extractedText,
});

console.log(result.content);
