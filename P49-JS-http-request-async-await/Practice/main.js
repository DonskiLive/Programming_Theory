const BASE_URL = 'https://jsonplaceholder.typicode.com',
	userContainer = document.querySelector('#user-container'),
	toDoContainer = document.querySelector('#todo-container ul')

getUsersFromServer(10)

function getUsersFromServer(numberOfUsers) {
	for (let i = 1; i <= numberOfUsers; i++) {
		getUserById(i)
	}
}

async function getUserById(id) {
	const response = await fetch(`${BASE_URL}/users/${id}`)
	const data = await response.json()
	renderUser(data)
}

function renderUser(user) {
	const div = document.createElement('div')
	div.classList.add('user-card')
	div.setAttribute('data-index', user.id)
	div.innerHTML = `
	<h3>${user.name}</h3>
	<h5>Nickname: ${user.username}</h5>
	<p>${user.email}</p>
	`

	div.onclick = (event) => {
		const cards = document.querySelectorAll('.user-card')
		cards.forEach(card => card.style.backgroundColor = 'rgba(255, 255, 255, 0)')
		const userId = event.currentTarget.dataset.index
		event.currentTarget.style.backgroundColor = 'rgba(127, 255, 212)'
		getToDoByUserId(userId, user.name)
	}
	userContainer.append(div)
}

async function getToDoByUserId(id, name) {
	const response = await fetch(`${BASE_URL}/todos?userId=${id}`)
	const data = await response.json()
	console.log(data)
	renderToDo(data, name)
}

function renderToDo(todos, name) {
	console.log(name)
	const userName = document.querySelector('#user-name')
	userName.innerHTML = `ToDo List of ${heOrShe(name)} ${name}:`
	toDoContainer.innerHTML = ''
	todos.forEach((todo, index) => {
		const li = document.createElement('li')
		li.classList.add('list-style')
		li.setAttribute('data-li', index)
		li.style.backgroundColor = getColor(index)
		li.innerHTML = `
	<input type = "checkbox" ${checkedOrNot(todo.completed)} id = "user_${index}">
	<label for = "user_${index}" data-label = "${index}" ${doneOrNot(todo.completed)}>${todo.title}</label>
	`
		toDoContainer.append(li)
	})
	const allLi = toDoContainer.querySelectorAll('.line-through')
	allLi.forEach(li => li.parentNode.classList.toggle('line-color'))
	const inputs = toDoContainer.querySelectorAll('input')
	inputs.forEach(checkBox => {
		checkBox.onchange = (event) => {
			const checkBoxId = event.currentTarget.id.split('_')[1]
			const selectedLabel = document.querySelector(`[data-label="${checkBoxId}"]`)
			selectedLabel.classList.toggle('line-through')
			selectedLabel.parentNode.classList.toggle('line-color')
		}
	})
}

function heOrShe(name) {
	return (name.split(' ')[0].endsWith('a')) ? 'Missis' : 'Mister'
}

function doneOrNot(status) {
	return (status) ? 'class="line-through"' : ''
}

function checkedOrNot(status) {
	return (status) ? 'checked' : ''
}

function getColor(count) {
	return count % 2 == 0 ? `#6696ff2f` : `#6696ff7c`
}