const inputText = document.querySelector('.input-text'),
	addBtn = document.querySelector('.add-btn'),
	cleanBtn = document.querySelector('.clean-btn'),
	ul = document.querySelector('#films'),
	attention = document.querySelector('.attention')

let error = false, count = 1

addBtn.onclick = () => {
	attentionInfo()
	if (!error) {
		let li = createLine(inputText.value)
		ul.append(li)
		inputText.value = ''
	}
}

function createLine(input) {
	const li = document.createElement('li');
	li.innerHTML = (count++) + '. ' + input
	li.style.backgroundColor = getColor()
	li.classList.add('list-style')
	return li
}

cleanBtn.onclick = () => {
	inputText.value = '';
	ul.innerHTML = ''
	count = 1
}

function getColor() {
	return count % 2 == 0 ? `#6696ff2f` : `#6696ff7c`
}

function attentionInfo() {
	if (inputText.value == '') {
		error = true
		alert('Please check input! Field is empty')
	} else { error = false }
}
