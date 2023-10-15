// Open AI API Key
let OpenAIAPIKey = localStorage.getItem("OpenAIAPIKey") === null ? "" : localStorage.getItem("OpenAIAPIKey");

const OpenAIAPIKeyField = document.getElementById("OpenAIAPIKeyField");
OpenAIAPIKeyField.placeholder = OpenAIAPIKey;

const OpenAIAPIKeyButton = document.getElementById("submitOpenAIAPIKeyButton");
OpenAIAPIKeyButton.addEventListener("click", function (event) {
    localStorage.setItem("OpenAIAPIKey", OpenAIAPIKeyField.value)
    OpenAIAPIKey = localStorage.getItem("OpenAIAPIKey");
    OpenAIAPIKeyField.value = "";
    OpenAIAPIKeyField.placeholder = OpenAIAPIKey;
});

// AWS API Key
let AWSAPIKey = localStorage.getItem("AWSAPIKey") === null ? "" : localStorage.getItem("AWSAPIKey");

const AWSAPIKeyField = document.getElementById("AWSAPIKeyField");
AWSAPIKeyField.placeholder = AWSAPIKey;

const AWSAPIKeyButton = document.getElementById("submitAWSAPIKeyButton");
AWSAPIKeyButton.addEventListener("click", function (event) {
    localStorage.setItem("AWSAPIKey", AWSAPIKeyField.value)
    AWSAPIKey = localStorage.getItem("AWSAPIKey");
    AWSAPIKeyField.value = "";
    AWSAPIKeyField.placeholder = AWSAPIKey;
});

// AWS API Secret
let AWSAPISecret = localStorage.getItem("AWSAPISecret") === null ? "" : localStorage.getItem("AWSAPISecret");

const AWSAPISecretField = document.getElementById("AWSAPISecretField");
AWSAPISecretField.placeholder = AWSAPISecret;

const AWSAPISecretButton = document.getElementById("submitAWSAPISecretButton");
AWSAPISecretButton.addEventListener("click", function (event) {
    localStorage.setItem("AWSAPISecret", AWSAPISecretField.value)
    AWSAPISecret = localStorage.getItem("AWSAPISecret");
    AWSAPISecretField.value = "";
    AWSAPISecretField.placeholder = AWSAPISecret;
});
