const userInput = document.querySelector('#userInput'),
	startBtn = document.querySelector('#startBtn'),
	stopBtn = document.querySelector('#stopBtn')

startBtn.onclick = () => {
	const number = userInput.value
	if (number > 0) {
		myTimer(number)
	} else {
		alert('Please, check input value! Value must be positive')
	}
}

function timerBreak(intervalId, actualNumber) {
	stopBtn.onclick = () => {
		clearInterval(intervalId)
		display.innerHTML = 'Timer is stopped'
		userInput.value = actualNumber
		timerStopped()
	}
}

function myTimer(inputNumber) {
	const display = document.querySelector('#display')
	const id = setInterval(runTimer, 1000);
	function runTimer() {
		if (inputNumber == 0) {
			display.innerHTML = 'Time is over'
			userInput.value = ''
			timerStopped()
			clearInterval(id);
		} else {
			timerRunning()
			timerBreak(id, inputNumber)
			display.innerHTML = inputNumber--
		}
	}
}

function timerRunning() {
	userInput.setAttribute('disabled', true)
	userInput.classList.add('element-disabled')
	startBtn.setAttribute('disabled', true)
	startBtn.classList.add('element-disabled')
	stopBtn.removeAttribute('disabled', true)
	stopBtn.classList.remove('element-disabled')
}

function timerStopped() {
	userInput.removeAttribute('disabled', true)
	userInput.classList.remove('element-disabled')
	startBtn.removeAttribute('disabled', true)
	startBtn.classList.remove('element-disabled')
	stopBtn.setAttribute('disabled', true)
	stopBtn.classList.add('element-disabled')
}