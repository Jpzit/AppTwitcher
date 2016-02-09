function alertNotLive(){
	alert("Stream is not currently live.");
}
function alertLive(){
	alert("Stream is live.");
}
function record(){
	window.open('StartRecording.bat');
}
function checkIfLive(){
    var URL = document.getElementById('URLTextBox').value;
	$.getJSON("https://api.twitch.tv/kraken/streams/" + URL , function(channel)
		{
			if (channel.stream == null) { 
				alertNotLive();
			}
			else{
				alertLive();
			}
		});
}


var confirmBtn = document.getElementById('confirmBtn');
confirmBtn.addEventListener('click', checkIfLive);

var recordBtn = document.getElementById('recordBtn');
confirmBtn.addEventListener('click', record);


