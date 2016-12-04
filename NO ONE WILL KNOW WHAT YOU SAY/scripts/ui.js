function charCount() {
	var area = document.querySelector(".chat-panel > .chat-body > .chat-area > textarea");
	var count = document.querySelector(".chat-panel > .chat-body > .chat-area > #charcount");

	var txt = area.value + " ";
	
	var words = 0;
	var sentences = 1;
	var lines = 1;
	
	for (var i = 0; i < txt.length; i++) {
		if (txt[i] != " " && txt[i + 1] == " ") {
			words++;
		}
		if (txt[i] == "." || txt[i] == "?" || txt[i] == "!" && txt[i + 1] == " ") {
			sentences++;
		}
		if (txt[i] == "\n") {
			lines++;
		}
	}
	
	if (words == 0) { sentences = 0; lines = 0; }
	
	count.innerHTML = (txt.length - 1) + " chars, " + words + " words, " + sentences + " sentences, " + lines + " lines";
}

function showMessage(text, type) {
/*
<div class="message message-system">
<div class="message-body">
<div class="message-text">
You are CONNECTED! Enjoy. If you have any question or problem, you can contact us.
</div>
</div>
<div class="message-date">
<span class="dateup"></span>
</div>
</div>
*/

var dialog_list = document.querySelector(".dialog-list");

var message = document.createElement("div");
message.className = "message " + type;

var message_body = document.createElement("div");
message_body.className = "message-body";

var message_text = document.createElement("div");
message_text.className = "message-text";
message_text.innerHTML = text;

var date = new Date();
var message_date = document.createElement("div");
message_date.className = "message-date";
message_date.innerHTML = date.getHours() + ":" + date.getMinutes();

var dateup = document.createElement("span");
dateup.className = "dateup";
dateup.innerHTML = date.toUTCString();

message_date.appendChild(dateup);
message_body.appendChild(message_text);
message.appendChild(message_body);
message.appendChild(message_date);

dialog_list.appendChild(message);

dialog_list.scrollTop += dialog_list.offsetHeight;

return message;
}

function sendMessage() {
	var area = document.querySelector(".chat-panel > .chat-body > .chat-area > textarea");
	if (area.value.length > 0) {
		showMessage(area.value, "");
		area.value = "";
	}
}

var keys = [];
function keyDownSend(key) {
	keys[keys.length] = key;
	if (keys.length > 1 && keys[keys.length - 1] == 13 && keys[keys.length - 2] == 17) {
		sendMessage();
	}
}