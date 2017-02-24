var display = document.querySelector('.display'); 

window.setInterval(function displayTime () {
	var date = new Date(); 
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var colon = ":"; 

	if (hours > 12) {
		hours = "0" + (hours - 12);
	}

	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	display.textContent = hours + colon + minutes + colon + seconds;
}, 1000);