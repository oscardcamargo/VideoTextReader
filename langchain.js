import {DetectDocumentTextCommand, TextractClient} from "@aws-sdk/client-textract";
import dotenv from 'dotenv';
dotenv.config();
import { PromptTemplate } from "langchain/prompts";
import { ChatOpenAI } from "langchain/chat_models/openai";
import fs from "fs";

const run = async () => {

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
        // const rawText = "print(\"hello world\")";
        // console.log("Extracted Text:", rawText);
        return result.Blocks.map((block) => block.Text).join(" ");

    } catch (err) {
        console.error("An error occurred:", err);
        return "error";
    }

};

//summarizes videos
async function reviewSession(){}
async function frameExplanation(){

    const prompt1 = PromptTemplate.fromTemplate(


        'Rewrite {extractedText} so that it is readible. Create a summary of the text. Mention 2-5 key insights from the text. Write one short practice question and answer based on the text. Output only what I ask and nothing else'
    );

    const model = new ChatOpenAI({
        modelName: 'gpt-3.5-turbo',
        apiKey: process.env.OPENAI_API_KEY
    });

    const chain = prompt1.pipe(model)

    const extractedText = await run();

    const result = await chain.invoke({
        extractedText: extractedText,
    });

    return result.content
}



async function mainFunction() {
 const output = await frameExplanation();
 console.log(output)
    return output;
}

mainFunction();
export { mainFunction };