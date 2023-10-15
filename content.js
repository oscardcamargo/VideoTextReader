console.log("running");
// import { mainFunction } from './langchain.js';

// const responsebody = await mainFunction();
const responsebody = "Hello";

const summaryBox = document.createElement('div');
// summaryBox.className = "youtube_summary_container youtube_theme_dark";
summaryBox.innerHTML =
    `<div class="modal" id="modal">
        <img style="width:24px;height:24px;" src="${chrome.runtime.getURL('images/v-48.png')}">
        <div class="modal-header">
            <div class="bar">
                <div class="title">Summary box</div>
            </div>
            <div class = "lbar"></div>
            <div class = "rbar"></div>
            <button data-close-button class="close-button">&times;</button>
        </div>
        <div class="modal-body">
            <div id="api-data-container">${responsebody}</div>
        </div>
        <div class="textgen">Hello2</div>
    </div>`

const selectAndExplainButton = document.createElement('button');
selectAndExplainButton.className = "ytp-fullscreen-button ytp-button";
selectAndExplainButton.setAttribute("data-priority", "0");
selectAndExplainButton.setAttribute("data-title-no-tooltip", "Select and Explain");
selectAndExplainButton.setAttribute("title", "Select and Explain");
selectAndExplainButton.innerHTML =
    `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 36">
        <text x="10" y="24" font-family="Arial" font-size="24" fill="white">E</text>
    </svg>`

// Attach a click event to the button
selectAndExplainButton.addEventListener('click', function () {
    chrome.storage.local.get(["OpenAIAPIKey"]).then((result) => {
        console.log("OpenAIAPIKey: " + result.OpenAIAPIKey);
    });
    chrome.storage.local.get(["AWSAPIKey"]).then((result) => {
        console.log("AWSAPIKey: " + result.AWSAPIKey);
    });
    chrome.storage.local.get(["AWSAPISecret"]).then((result) => {
        console.log("AWSAPISecret: " + result.AWSAPISecret);
    });
    const video = document.querySelector("#movie_player > div.html5-video-container > video");
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const screenshotDataURL = canvas.toDataURL('image/png');

    // Create a new HTML document
    const newTabDocument = document.implementation.createHTMLDocument("Image");
    const newTabBody = newTabDocument.body;

    // Create an image element in the new document
    const newImage = new Image();
    newImage.src = screenshotDataURL;

    // Append the image to the body of the new document
    newTabBody.appendChild(newImage);

    // Serialize the new document to HTML
    const newTabContent = newTabDocument.documentElement.outerHTML;

    // Open the new tab with the content
    const newTab = window.open();
    newTab.document.open();
    newTab.document.write(newTabContent);
    newTab.document.close();

    // const secondaryBox = document.querySelector("#secondary");
    // if (secondaryBox) {
    //     secondaryBox.prepend(summaryBox);
    // }
});

// Create summarize button element
const summarizeButton = document.createElement('button');
summarizeButton.className = "ytp-fullscreen-button ytp-button";
summarizeButton.setAttribute("data-priority", "-1");
summarizeButton.setAttribute("data-title-no-tooltip", "Summarize");
summarizeButton.setAttribute("title", "Summarize");
summarizeButton.innerHTML =
    `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 36">
        <text x="10" y="24" font-family="Arial" font-size="24" fill="white">S</text>
    </svg>`

// Attach a click event to the button
summarizeButton.addEventListener('click', function () {
    // Add your logic to open the box or perform other actions here
    const secondaryBox = document.querySelector("#secondary");
    if (secondaryBox) {
        secondaryBox.prepend(summaryBox);
    }
});

// Append the buttons to the YouTube page
const controlBar = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls");
if (controlBar) {
    controlBar.prepend(selectAndExplainButton);
    controlBar.prepend(summarizeButton);
}
