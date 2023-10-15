// Open AI API Key

let OpenAIAPIKey = "";

const OpenAIAPIKeyField = document.getElementById("OpenAIAPIKeyField");
chrome.storage.local.get(["OpenAIAPIKey"]).then((result) => {
    OpenAIAPIKey = result.OpenAIAPIKey;
    OpenAIAPIKeyField.placeholder = OpenAIAPIKey;
});

document.getElementById("submitOpenAIAPIKeyButton").addEventListener("click", function (event) {
    chrome.storage.local.set({ "OpenAIAPIKey": OpenAIAPIKeyField.value }).then(() => {
        OpenAIAPIKey = OpenAIAPIKeyField.value;
        OpenAIAPIKeyField.placeholder = OpenAIAPIKey;
        OpenAIAPIKeyField.value = "";
    });
});

// Open AI API Key
let AWSAPIKey = "";

const AWSAPIKeyField = document.getElementById("AWSAPIKeyField");
chrome.storage.local.get(["AWSAPIKey"]).then((result) => {
    AWSAPIKey = result.AWSAPIKey;
    AWSAPIKeyField.placeholder = AWSAPIKey;
});

document.getElementById("submitAWSAPIKeyButton").addEventListener("click", function (event) {
    chrome.storage.local.set({ "AWSAPIKey": AWSAPIKeyField.value }).then(() => {
        AWSAPIKey = AWSAPIKeyField.value;
        AWSAPIKeyField.placeholder = AWSAPIKey;
        AWSAPIKeyField.value = "";
    });
});

// Open AI API Key
let AWSAPISecret = "";

const AWSAPISecretField = document.getElementById("AWSAPISecretField");
chrome.storage.local.get(["AWSAPISecret"]).then((result) => {
    AWSAPISecret = result.AWSAPISecret;
    AWSAPISecretField.placeholder = AWSAPISecret;
});

document.getElementById("submitAWSAPISecretButton").addEventListener("click", function (event) {
    chrome.storage.local.set({ "AWSAPISecret": AWSAPISecretField.value }).then(() => {
        AWSAPISecret = AWSAPISecretField.value;
        AWSAPISecretField.placeholder = AWSAPISecret;
        AWSAPISecretField.value = "";
    });
});