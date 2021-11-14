const container = document.querySelector('#container')

// ====== Creation of boxes - start ======
let divNumbers = +prompt('Please, enter the wished numbers of elements:', 10)

createBox(divNumbers)

const elements = document.getElementsByClassName('box')

function createBox(amount) {
	let div
	for (let i = 0; i < amount; i++) {
		div = document.createElement('div');
		div.classList.add('box')
		div.style.backgroundColor = getColor()
		document.querySelector('#container').append(div)
	}
	console.log(container.innerHTML.length)
	console.log(typeof container.innerHTML)
}


function randomNum() {
	return parseInt(Math.random() * 256)
}

function getColor() {
	return `rgb(${randomNum()},${randomNum()},${randomNum()})`
}
// ====== Creation of boxes - end ======

// ====== Remove box by Click - start ======
container.addEventListener('click', removeElement)

function removeElement(event) {
	console.log(divNumbers)
	if (!event.shiftKey && event.target.localName == 'div') {
		//event.target.style.display = 'none' // to remove element fast, without saving his position
		console.log(event.target)
		console.log(event.srcElement)
		event.target.remove() // to remove element
		//event.target.style.opacity = 0 // to remove element slow, with saving his position
		if (elements.length === 1) {
			container.removeEventListener('click', removeElement)
		}
	}
}
// ====== Remove box by Click - end ======

// ====== Change box shape by press Shift+Click - start ======
container.addEventListener('click', changeShape)

function changeShape(event) {
	if (event.shiftKey) {
		event.target.classList.toggle('round-shape')
	}
}
// ====== Change box shape by press Shift+Click - end ======
