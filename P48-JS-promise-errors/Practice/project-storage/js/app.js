startApp()

function startApp() {
	const right = document.querySelector('.right'),
		form = document.querySelector('#contact-form'),
		listLoader = document.querySelector('.lds-dual-ring')

	let currentContacts = []
	//localStorage.clear()

	loadList()

	form.onsubmit = onAddContactHandler

	function loadList() {
		showRightBox(false)
		showListLouder(true)
		Store.getAll().then(contacts => {
			showListLouder(false);
			currentContacts = contacts
			showRightBox(true)
			renderList()
		})
	}

	function renderList() {
		right.innerHTML = currentContacts.map(mapToRaw).join('')
		const removeBtn = document.querySelectorAll('[data-index]')
		removeBtn.forEach(btn => {
			btn.onclick = removeContact
		})
	}

	function mapToRaw(contact, index) {
		return `
		<div class="card">
			<p class="con-name">${contact.name} ${contact.lastName}</p>
			<p class="con-data">${contact.phone}</p>
			<p class="con-data">${contact.email}</p>
			<br>
			<button class="con-remove" data-index = ${index}>remove</button>
		</div>
	`
	}

	function onAddContactHandler(e) {
		e.preventDefault();
		const form = e.target
		let allFilled = true
		for (let element of form) {
			if (element.localName !== 'button') {
				if (!element.value) {
					element.classList.add('userInput-warning')
					element.classList.add('is-invalid')
					setTimeout(() => { element.classList.remove('userInput-warning') }, 2000)
					allFilled = false
				} else {
					element.classList.remove('is-invalid')
				}
			}
		}

		formMessage(allFilled, form.name.value)

		if (allFilled) {
			const contact = new Contact(form.name.value, form.lastName.value, form.phone.value, form.email.value)
			showListLouder(true)
			showRightBox(false)
			Store.save(contact).then(res => {
				currentContacts = res
				showListLouder(false)
				renderList()
				showRightBox(true)
				form.reset()
			})
		}
	}

	function removeContact(event) {
		event.target.parentNode.style.color = 'red'
		const index = event.target.dataset.index
		event.target.parentNode.innerHTML += `<div class="lds-hourglass"></div>`


		Store.remove(index).then(res => {
			currentContacts = res
			renderList()
		})
	}

	function showListLouder(isShow) {
		listLoader.style.display = isShow ? 'block' : 'none'
	}

	function showRightBox(isShow) {
		right.style.display = isShow ? 'flex' : 'none'
	}
}


function formMessage(status, userName) {
	const message = document.querySelector('.message')
	message.style.opacity = 1
	if (status) {
		message.innerHTML = `<p>Contact <b>${userName}</b> was added</p>`
		message.classList.remove('alert-danger')
		message.classList.add('alert-success')
		setTimeout(() => { message.style.opacity = 0 }, 5000)
	} else {
		message.innerHTML = `<p>All fields should be filled!</p>`
		message.classList.remove('alert-success')
		message.classList.add('alert-danger')
	}
}