var responses = {
    "hi": ["Hello!", "Hi there!", "Hey!"],
    "how are you": ["I'm doing well, thanks for asking!", "I'm good, how about you?", "I'm fine, thank you."],
    "bye": ["Goodbye!", "See you later!", "Have a nice day!"],
    "default": ["I'm sorry, I didn't understand what you said.", "Could you please rephrase that?", "I'm not sure what you mean."]
};


var chatHistory = document.getElementById("chat-history");
var userInput = document.getElementById("user-input");
var sendButton = document.getElementById("send-button");


sendButton.addEventListener("click", function() {
    
    var input = userInput.value;
 input
    var response = generateResponse(input);
   
    addMessage(input, "You");
    addMessage(response, "Bot");
  
    userInput.value = "";
});

function addMessage(message, sender) {
   
    var messageElement = document.createElement("div");
    messageElement.className = "chat-message " + sender.toLowerCase() + "-message";
    messageElement.innerHTML = "<strong>" + sender + ":</strong> " + message;
    
    chatHistory.appendChild(messageElement);
    
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

function generateResponse(userInput) {
    
    var cleanInput = userInput.trim().toLowerCase();
   
    if (responses[cleanInput]) {
        
        var randomIndex = Math.floor(Math.random() * responses[cleanInput].length);
        return responses[cleanInput][randomIndex];
    } else {
        response
        return responses["default"][Math.floor(Math.random() * responses["default"].length)];
    }
}
