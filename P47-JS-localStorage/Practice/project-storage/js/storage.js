const CONTACTS_KEY = 'CONTACTS'

class Store {
	static save(contact) {
		const allContacts = this.getAll()
		allContacts.push(contact)
		this.updateLocalStorage(allContacts)
	}
	static remove(index) {
		const aContacts = this.getAll()
		aContacts.splice(index, 1)
		this.updateLocalStorage(aContacts)
	}
	static getAll() {
		let str = localStorage.getItem(CONTACTS_KEY)
		return (str) ? JSON.parse(str) : []
	}
	static updateLocalStorage(contacts) {
		localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts))
	}
}

