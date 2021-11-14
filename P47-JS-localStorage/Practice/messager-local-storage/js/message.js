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
}