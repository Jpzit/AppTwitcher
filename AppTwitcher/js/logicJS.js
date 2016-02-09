function alertNotLive(){
  alert("Stream is not currently live.");
}
function alertLive(){
	alert("Stream is live.");
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



