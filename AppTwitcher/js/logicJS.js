function alertNotLive(){
  alert("Stream is not currently live.");
}
var confirmBtn = document.getElementById('confirmBtn');
confirmBtn.addEventListener('click', alertNotLive);