startApp()

function startApp() {
	const right = document.querySelector('.right'),
		form = document.querySelector('#contact-form')

	Store.save(new Contact('Anton', 'Vilchynskyy', '+49 123 45 67', 'generated.for@test.reason'))

	renderList()

	form.onsubmit = onAddContactHandler

	function renderList() {
		const contacts = Store.getAll()
		right.innerHTML = contacts.map(mapToRaw).join('')
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
			Store.save(contact)
			renderList()
			form.reset()
		}
	}

	function removeContact(event) {
		const contact = event.target.dataset.index
		Store.remove(contact)
		renderList()
	}
}


function formMessage(status, userName) {
	const message = document.querySelector('.message')
	message.style.opacity = 1
	if (status) {
		message.innerHTML = `<p>Contact <b>${userName}</b> was added</p>`
		message.classList.remove('alert-danger')
		message.classList.add('alert-success')
		setTimeout(() => { message.style.opacity = 0 }, 4000)
	} else {
		message.innerHTML = `<p>All fields should be filled!</p>`
		message.classList.remove('alert-success')
		message.classList.add('alert-danger')
	}
}