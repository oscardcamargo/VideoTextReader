import { Buffer } from 'buffer';
import { DetectDocumentTextCommand, TextractClient } from "@aws-sdk/client-textract";
import { PromptTemplate } from "langchain/prompts";
import { ChatOpenAI } from "langchain/chat_models/openai";
// import fs from "fs";
// import AWS from "aws-sdk";
// @ts-ignore
window.Buffer = Buffer;
// import { YoutubeTranscript } from 'youtube-transcript';

const res = await chrome.storage.local.get(["OpenAIAPIKey", "AWSAPIKey", "AWSAPISecret"]);
let OpenAIAPIKey = res.OpenAIAPIKey;
let AWSAPIKey = res.AWSAPIKey;
let AWSAPISecret = res.AWSAPISecret;
// let YouTubeAPIKey = "AIzaSyBS0Dzli0ZvKpqRlU5RbEjzE_40zHQ01Rg";

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

function extractVideoId(url) {
    // Regular expression to extract the video_id from the YouTube URL
    const regex = /[?&]v=([^&]+)/;
    const match = url.match(regex);

    if (match) {
        return match[1];
    } else {
        return null; // Video ID not found in the URL
    }
}

async function genStudyGuide() {
    console.log("genStudyGuide");
    // Video ID of the YouTube video you want to get the transcript for
    const videoId = extractVideoId(location.href);
    if (videoId) {
        // Now you have the video_id.
        console.log(videoId);
    } else {
        console.log("Video ID not found in the URL.");
    }

    // URL to fetch captions for a video
    // const captionsUrl = `https://www.googleapis.com/youtube/v3/captions?part=snippet&videoId=${videoId}&key=${YouTubeAPIKey}`;
    // const captionsUrl = await fetch(`https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.captions.list?part=snippet&videoId=${videoId}`);
    // const captionsUrl = await fetch(`https://youtube.googleapis.com/youtube/v3/captions?part=snippet&videoId=${videoId}&key=${YouTubeAPIKey}`);
    // const captionsUrl = await fetch(`https://googleapis.com/youtube/v3/captions?part=snippet&videoId=${videoId}&key=${YouTubeAPIKey}`);
    // console.log(captionsUrl);

    // Make a GET request to the captions URL
    // fetch(captionsUrl)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         // Data contains information about the video's captions, including transcript URL.
    //         const transcriptUrl = data.items[0].snippet.url;

    //         // Fetch the transcript content
    //         fetch(transcriptUrl)
    //             .then(response => response.text())
    //             .then(transcript => {
    //                 // Here, you can work with the transcript data as needed.
    //                 console.log(transcript);
    //             })
    //             .catch(error => {
    //                 console.error('Error fetching transcript:', error);
    //             });
    //     })
    //     .catch(error => {
    //         console.error('Error fetching captions:', error);
    //     });

    // const prompt = PromptTemplate.fromTemplate(
    //     'Create a summary of {extractedText} and write three short questions based on the text. Output only what I ask and nothing else. Can make assumptions if you do not understand something'
    // );

    // const chain = prompt.pipe(model);

    // const extractedText = await run();

    // const result = await chain.invoke({
    //     extractedText: extractedText
    // });

    return "result.content"
}

export { genExplanation, genStudyGuide };