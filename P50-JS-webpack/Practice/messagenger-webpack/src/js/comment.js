import {findUserById} from './index'; 

export default class Comment {
    constructor(userId, messageId, text, data) {
        this.id = Comment.id++
        this.userId = userId
        this.messageId = messageId
        this.text = text
        this.data = data
    }

    static id = 0

    renderComment() {
        return `
            <div>
                <h5>${this.text}</h5>
                <p>${this.data}, comment by ${findUserById(this.userId).name}</p>
            </div>
        `
    }
}