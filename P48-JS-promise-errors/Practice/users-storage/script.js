const wrapper = document.querySelector('.wrapper')
const currentContacts = [
	new User('Vasya', 'Vasilev', 'Berlin'),
	new User('Petya', 'Petrov', 'Paris'),
	new User('Kolya', 'Nikolaev', 'New York'),
	new User('Anna', 'Petrova', 'Barcelona'),
	new User('Olga', 'Nikolaeva', 'Milan')
]

currentContacts.forEach((user, i) => {
	const index = localStorage.getItem('boxId')
	const box = document.createElement('div')
	box.classList.add('box')
	box.innerHTML += user.renderUser()
	box.setAttribute('data-index', i)
	box.onclick = onclickHandler
	if (i == index) box.click()
	wrapper.append(box)
})

function onclickHandler(event) {
	const boxes = wrapper.querySelectorAll('.box')
	boxes.forEach(box => {
		box.style.backgroundColor = 'rgba(0, 255, 255, 0.2)'
		box.style.color = 'black'
	})
	event.currentTarget.style.backgroundColor = 'lime'
	event.currentTarget.style.color = 'red'
	const index = event.currentTarget.dataset.index
	localStorage.setItem('boxId', index)
}



