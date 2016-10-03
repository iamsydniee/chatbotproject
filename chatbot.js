var d = new Date();

var chatBotQuestions = {
	"what is your favorite color?": ["red", "blue", "green", "yellow", "teal"],
  "do you like school?": ["yes", "no"],
  "do you like food?": ["duhhhh", "who doesnt", "you're dumb"],
  "what do you want to be in life?": ["a coder", "an elephant", "a model", "an athlete"],
  "do you like people?": ["Nope", "not many"],
}

var chatBotResponse = {
	"how old are you?": ["15", "16", "17", "18" ],
	"what grade are you in?": ["9th", "10th", "11th", "12th"],
	"how is your day?": ["good", "very good", "I'm doing well"],
	"how many years have you lived in Pasadena?": ["3",],
	"pepsi or coke?": ["coke", "pepsi"],
  "hello": ["Hi", "howdy", "hola"],
	"what time is it?": ["It is " + d.toLocaleTimeString()],
  "what is your name?": ["Sydnie", "Amanda","Savannah"],
	"how are you?": ["good", "very well", "none of your business"],
}

var defaultResponses = ["I don't understand", "Explain...", "Answer not available"];

function talkButton() {
	var rand = Math.floor((Math.random() * defaultResponses.length));
  var input = $("#input").val();
	var question = $("#input").val();
	question = question.toLowerCase();
  var input = input.toLowerCase();
  var answer = chatBotResponse[input];
	var chatBotQuestions = question[input];
	var randomAnswerNumber = Math.floor((Math.random() * answer.length));
	var randomQuestion = Math.floor((Math.random() * question.length));

	if(answer == undefined){
  	$('#chat-area').prepend("Chatbot: " + defaultResponses[rand] + "." + "</br>");
	}
	else{
	  $('#chat-area').prepend("Chatbot: " + answer[randomAnswerNumber] + "." + "</br>");

	}
			$('#chat-area').prepend("You: " + input + "." + "</br>");
		}

			$(document).keyup(function(event){
			   if(event.keyCode == 13){
			       talkButton();
			   }
			 });
