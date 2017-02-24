var display = document.querySelector('.display'); 
var wrapper = document.querySelector('.wrapper'); 

window.setInterval(function displayTime () {
	var date = new Date(); 
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	if (hours < 10) {
		hours = "0" + hours;
	}

	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	var hexcode = "#" + hours + minutes + seconds;
	wrapper.style.background = hexcode; 
	display.textContent = hexcode;
}, 2000);