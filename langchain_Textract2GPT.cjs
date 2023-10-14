process.env.OPENAI_API_KEY="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";

const { TextractClient, DetectDocumentTextCommand } = require("@aws-sdk/client-textract");
const fs = require("fs");
const { PromptTemplate, RunnableSequence, StringOutputParser, ChatOpenAI } = require('langchain');

// Define a custom Langchain step for AWS Textract
class TextExtractStep {
    constructor(inputFile, textractClient) {
        this.inputFile = inputFile;
        this.textractClient = textractClient;
    }

    async invoke() {
        const command = new DetectDocumentTextCommand({
            Document: {
                Bytes: this.inputFile,
            },
        });
        const result = await this.textractClient.send(command);
        return result.Blocks.map((block) => block.Text).join(" ");
    }
}

// Initialize Textract client
const textractClient = new TextractClient({
    region: "us-east-1",
    credentials: {
        secretAccessKey: "cUuJWTK5svbfw0x7wD7BUvkw4BzWKWfLd9urUu8n",
        accessKeyId: "AKIAYRVDPATQI3RKMQIR",
    }
});

// Read the image file into a buffer
const fileBuffer = fs.readFileSync('video_frame2.jpeg');

// Create the TextExtractStep
const textExtractStep = new TextExtractStep(fileBuffer, textractClient);

// Create the OpenAI GPT-3 model
const model = new ChatOpenAI({});

// Create a PromptTemplate
const promptTemplate = PromptTemplate.fromTemplate(`Your GPT-3 prompt based on {extracted_text}`);

// Create a RunnableSequence
const sequence = RunnableSequence.from([
    textExtractStep,
    {
        extracted_text: textExtractStep,
    },
    promptTemplate,
    model,
    new StringOutputParser(),
]);

// Run the sequence
const runSequence = async () => {
    const result = await sequence.invoke({});
    console.log(result);
};

runSequence().catch(err => console.error(err));

// Print result
console.log(result);


