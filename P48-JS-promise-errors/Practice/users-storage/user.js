class User {
    constructor(firstName, lastName, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
        this.id = User.id++
    }

    static id = 0

    renderUser() {
        return `<h2 data-id ="${this.id}">${this.firstName} ${this.lastName}, ${this.city}</h2>`
    }
}