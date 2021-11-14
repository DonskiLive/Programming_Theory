class Comment {
    constructor(userId, text, data) {
        this.id = Comment.id++
        this.userId = userId
        this.text = text
        this.data = data
    }
    static id = 0
}