const CONTACTS_KEY = 'CONTACTS'

class Store {
	static save(contact) {
		return this.getAll().then(result => {
			return new Promise(resolve => {
				setTimeout(() => {
					result.push(contact)
					this.updateLocalStorage(result)
					resolve(result)
				}, 1000)
			})
		})
	}
	static remove(index) {
		return this.getAll().then(result => {
			return new Promise(resolve => {
				setTimeout(() => {
					result.splice(index, 1)
					if(result.length == 0){
						localStorage.removeItem(CONTACTS_KEY)
					}else{
						this.updateLocalStorage(result)
					}
					resolve(result)
				}, 1000)
			})
		})
	}

	static getAll() {
		return new Promise((resolve) => {
			setTimeout(() => {
				let str = localStorage.getItem(CONTACTS_KEY)
				const contacts = (str) ? JSON.parse(str) : []
				resolve(contacts)
			}, 1000)
		})
	}
	static updateLocalStorage(contacts) {
		localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts))
	}
}

