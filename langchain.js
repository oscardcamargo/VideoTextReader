import {DetectDocumentTextCommand, TextractClient} from "@aws-sdk/client-textract";
import dotenv from 'dotenv';
dotenv.config();
import { PromptTemplate } from "langchain/prompts";
import { ChatOpenAI } from "langchain/chat_models/openai";
import fs from "fs";

async function mainFunction() {

// import AWS  from 'aws-sdk';
// const textract = new AWS.Textract();

// // Decode Base64 image
// const base64Image = 'your_base64_encoded_image_string_here';
// const decodedImage = Buffer.from(base64Image, 'base64');
//
// const params = {
//     Document: {
//         Bytes: decodedImage
//     },
//     FeatureTypes: ['TABLES', 'FORMS']
// };
//
// textract.analyzeDocument(params, function(err, data) {
//     if (err) console.log(err, err.stack); // an error occurred
//     else     console.log(data);           // successful response
// });

/// AWS text extraction.
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
        'Rewrite {extractedText} so that it is readible. Create a summary of the text. Write one short question based on the text. Output only what I ask and nothing else'
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


    const body_output = result.content
    console.log(body_output)
    return body_output

}

console.log(mainFunction());

export { mainFunction };