class Message {
    constructor(userId, title, text, data) {
        this.userId = userId
        this.title = title
        this.text = text
        this.data = data
        this.comments = []
        this.id = Message.id++
    }

    static id = 0

    renderMessage() {
        return `
            <div data-message="${this.id}">
                <h4>${this.title}</h4>
                <p>Published: ${this.data}</p>
            </div>
        `
    }

    renderFullInfo() {
        return `
            <div>
               <h3>${this.title}</h3>
               <p>${this.text}</p>
               <h4>Published: ${this.data}</h4>
               <hr>
               ${(this.comments.length === 0) ? "<p>No comment</p>" : this.comments.map(item => item.renderComment()).join('')}
            </div>
        `
    }

}