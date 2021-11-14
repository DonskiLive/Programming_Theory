const MESSAGE_KEY = 'MESSAGE'

class StoreMessage {
	static save(message) {
		const allContacts = this.getAll()
		allContacts.push(message)
		this.updateLocalStorage(allContacts)
	}
	static remove(index) {
		const aContacts = this.getAll()
		aContacts.splice(index, 1)
		this.updateLocalStorage(aContacts)
	}
	static getAll() {
		let str = localStorage.getItem(MESSAGE_KEY)
		return (str) ? JSON.parse(str) : []
	}
	static updateLocalStorage(message) {
		localStorage.setItem(MESSAGE_KEY, JSON.stringify(message))
	}
}
