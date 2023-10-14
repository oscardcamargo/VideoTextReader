const summaryBox = document.createElement('div');
summaryBox.className = "youtube_summary_container youtube_theme_dark";
summaryBox.innerHTML =  <button data-modal-target="#modal">Open Modal</button>
  <div class="modal" id="modal">
    <div class="modal-header">
        

        <div class="bar">

            <div class="title"> "  "</div>
        </div>
        <div class = "lbar">
        </div>
        <div class = "rbar">
        </div>
      <button data-close-button class="close-button">&times;</button>

    

    </div>

    <div class="modal-body">
        <div id="api-data-container">
            
          </div>
    </div>


    <div class="textgen">

    </div>
  </div>
 
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
    const video = document.querySelector("#movie_player > div.html5-video-container > video");
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const screenshotDataURL = canvas.toDataURL('image/png');
    console.log(screenshotDataURL);
    // var string = doc.output('datauristring');
    // var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
    // var x = window.open();
    // x.document.open();
    // x.document.write(iframe);
    // x.document.close();
    // window.open(screenshotDataURL, '_blank');
    // Create a temporary download link to save the screenshot
    const downloadLink = document.createElement('a');
    downloadLink.href = screenshotDataURL;
    // downloadLink.download = 'screenshot.png';
    downloadLink.target = '_blank';

    // Trigger a click on the download link to save the screenshot
    downloadLink.click();

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
