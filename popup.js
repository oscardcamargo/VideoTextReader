// Open AI API Key
// let OpenAIAPIKey = localStorage.getItem("OpenAIAPIKey") === null ? "" : localStorage.getItem("OpenAIAPIKey");
let OpenAIAPIKey = "";
chrome.storage.local.get(["OpenAIAPIKey"]).then((result) => {
    OpenAIAPIKey = result.OpenAIAPIKey;
});

const OpenAIAPIKeyField = document.getElementById("OpenAIAPIKeyField");
OpenAIAPIKeyField.placeholder = OpenAIAPIKey;

const OpenAIAPIKeyButton = document.getElementById("submitOpenAIAPIKeyButton");
OpenAIAPIKeyButton.addEventListener("click", function (event) {
    // localStorage.setItem("OpenAIAPIKey", OpenAIAPIKeyField.value)
    chrome.storage.local.set({ "OpenAIAPIKey": OpenAIAPIKeyField.value }).then(() => {
        console.log("Value is set");
    });
    OpenAIAPIKey = OpenAIAPIKeyField.value;
    OpenAIAPIKeyField.value = "";
    OpenAIAPIKeyField.placeholder = OpenAIAPIKey;
});

// Open AI API Key
// let AWSAPIKey = localStorage.getItem("AWSAPIKey") === null ? "" : localStorage.getItem("AWSAPIKey");
let AWSAPIKey = "";
chrome.storage.local.get(["AWSAPIKey"]).then((result) => {
    AWSAPIKey = result.AWSAPIKey;
});

const AWSAPIKeyField = document.getElementById("AWSAPIKeyField");
AWSAPIKeyField.placeholder = AWSAPIKey;

const AWSAPIKeyButton = document.getElementById("submitAWSAPIKeyButton");
AWSAPIKeyButton.addEventListener("click", function (event) {
    // localStorage.setItem("AWSAPIKey", AWSAPIKeyField.value)
    chrome.storage.local.set({ "AWSAPIKey": AWSAPIKeyField.value }).then(() => {
        console.log("Value is set");
    });
    AWSAPIKey = AWSAPIKeyField.value;
    AWSAPIKeyField.value = "";
    AWSAPIKeyField.placeholder = AWSAPIKey;
});

// Open AI API Key
// let AWSAPISecret = localStorage.getItem("AWSAPISecret") === null ? "" : localStorage.getItem("AWSAPISecret");
let AWSAPISecret = "";
chrome.storage.local.get(["AWSAPISecret"]).then((result) => {
    AWSAPISecret = result.AWSAPISecret;
});

const AWSAPISecretField = document.getElementById("AWSAPISecretField");
AWSAPISecretField.placeholder = AWSAPISecret;

const AWSAPISecretButton = document.getElementById("submitAWSAPISecretButton");
AWSAPISecretButton.addEventListener("click", function (event) {
    // localStorage.setItem("AWSAPISecret", AWSAPISecretField.value)
    chrome.storage.local.set({ "AWSAPISecret": AWSAPISecretField.value }).then(() => {
        console.log("Value is set");
    });
    AWSAPISecret = AWSAPISecretField.value;
    AWSAPISecretField.value = "";
    AWSAPISecretField.placeholder = AWSAPISecret;
});