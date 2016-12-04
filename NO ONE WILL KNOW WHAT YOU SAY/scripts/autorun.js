// чистим UI от старых данных
(function() {
	document.querySelector(".chat-panel > .chat-body > .chat-area > textarea").value = "";
	
	showMessage("Hi! Welcome to our service of anonymous messages!<br>It's testing page. But you can sending messages (<b>offline</b>) and watch how it all work.", "message-system");
	showMessage("What working now?<br>- You can sending messages by CRTL + ENTER.<br>- We are use one CSS code for all pages type. If you screen width less then 720, we are change message view.<br>- ... Well, it's all of today.", ""); 
	showMessage("What working now?<br>- You can sending messages by CRTL + ENTER.<br>- We are use one CSS code for all pages type. If you screen width less then 720, we are change message view.<br>- ... Well, it's all of today.", "message-other"); 
	/*setTimeout(function() { showMessage("What working now?<br>- You can sending messages by CRTL + ENTER.<br>- We are use one CSS code for all pages type. If you screen width less then 720, we are change message view.<br>- ... Well, it's all of today.", "message-other"); }, 1500);
	setTimeout(function() { showMessage("Hey, you can write text in text box you message and send it by CRTL + ENTER or send button.", "message-other"); }, 3000);
	setTimeout(function() { showMessage("You are here more then 5 seconds...", "message-other"); }, 5000);
	setTimeout(function() { showMessage("... it's good! :)", "message-other"); }, 6000);
	setTimeout(function() { showMessage("Hmmm... you can write the developer: http://vk.com/jkulvich", "message-other"); }, 8000);
	setTimeout(function() { showMessage("It's all. I haven't write here more.", "message-other"); }, 12000);
	setTimeout(function() { showMessage("I was write here!", "message-system"); }, 15000);
	setTimeout(function() { showMessage("How many stars you can put on this service now?", "message-system"); }, 16000);
	setTimeout(function() { showMessage("... hmmm... not many, probably.", "message-system"); }, 18000);
	setTimeout(function() { showMessage("It's true.", "message-system"); }, 20000);
	setTimeout(function() { showMessage("Ok, bye.", "message-system"); }, 21000);*/
})();