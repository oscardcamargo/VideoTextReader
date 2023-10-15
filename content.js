console.log("running");
import { genExplanation, genStudyGuide } from './langchain.js';

const modal = document.createElement('div');
modal.className = "modal";
modal.innerHTML =
    `<div class="modal-header">
        <a target="_blank" style="width: 24px;height: 24px;">
            <img style="width:24px;height:24px;" src="${chrome.runtime.getURL('images/v-48.png')}">
        </a>
        <div class="title">Explain</div>
        <button id="close-button">×</button>
    </div>
    <div id="response">
    </div>`
let modalAdded = false;

const selectAndExplainButton = document.createElement('button');
selectAndExplainButton.className = "ytp-fullscreen-button ytp-button";
selectAndExplainButton.setAttribute("data-priority", "0");
selectAndExplainButton.setAttribute("data-title-no-tooltip", "Select and Explain");
selectAndExplainButton.setAttribute("title", "Select and Explain");
selectAndExplainButton.innerHTML = `<img style="height:100%;" src="${chrome.runtime.getURL('images/Explain.png')}">`
// Attach a click event to the button
selectAndExplainButton.addEventListener('click', async function () {
    // Add modal to page if not already inserted
    const secondaryBox = document.querySelector("#secondary");
    if (secondaryBox && !modalAdded) {
        secondaryBox.prepend(modal);
        modalAdded = true;
        document.getElementById("close-button").addEventListener('click', function () {
            modal.remove();
            modalAdded = false;
        });
    }

    // Loading response
    const response = document.querySelector("#response");
    if (response) {
        response.textContent = "Analyzing image...";
    }

    const video = document.querySelector("#movie_player > div.html5-video-container > video");
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const screenshotDataURL = canvas.toDataURL('image/png');
    const explanation = await genExplanation(screenshotDataURL);

    console.log("explanation");
    console.log(explanation);

    // Update the content of the #response element
    if (response) {
        response.textContent = explanation;
    }
});

// Create generateStudyGuide button
const generateStudyGuideButton = document.createElement('button');
generateStudyGuideButton.className = "ytp-fullscreen-button ytp-button";
generateStudyGuideButton.setAttribute("data-priority", "-1");
generateStudyGuideButton.setAttribute("data-title-no-tooltip", "Generate Study Guide");
generateStudyGuideButton.setAttribute("title", "Generate Study Guide");
generateStudyGuideButton.innerHTML = `<img style="height:100%;" src="${chrome.runtime.getURL('images/StudyGuide.png')}">`
// Attach a click event to the button
generateStudyGuideButton.addEventListener('click', async function () {
    // Add modal to page if not already inserted
    const secondaryBox = document.querySelector("#secondary");
    if (secondaryBox && !modalAdded) {
        secondaryBox.prepend(modal);
        modalAdded = true;
        document.getElementById("close-button").addEventListener('click', function () {
            modal.remove();
            modalAdded = false;
        });
    }

    // Loading response
    const response = document.querySelector("#response");
    if (response) {
        response.textContent = "Generating study guide...";
    }

    const studyguide = await genStudyGuide();
    console.log("studyguide");
    console.log(studyguide);

    // Update the content of the #response element
    if (response) {
        response.textContent = studyguide;
    }
});

// Append the buttons to the YouTube page
const controlBar = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls");
if (controlBar) {
    controlBar.prepend(selectAndExplainButton);
    controlBar.prepend(generateStudyGuideButton);
}