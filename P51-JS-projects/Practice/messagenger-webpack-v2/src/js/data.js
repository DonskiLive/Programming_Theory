import myUser from './user';
import Comment from './comment';
import Message from './message';

//const URL = 'http//google.com'

const users = [
    new myUser('Vasya Pupkin', 'Berlin'),   // -> id 
    new myUser('Maksym Kostenko', 'Mainz'),
    new myUser('Ivan Ivanov', 'Kiev')
]

const messages = [
    new Message(0, 'Hello', 'World', new Date().toLocaleDateString()),
    new Message(0, 'About', 'Meeting', new Date().toLocaleDateString()),
    new Message(1, 'Text', 'Info', new Date().toLocaleDateString())
]

export function findUserById(id){
    return users.find(user => user.id === id)   //{name: Vasya, city: Berlin, id:0}
}

export function addNewMessage(message){
    messages.push(message);
}

export function getUserIdByUserName(name){
    const user = users.find(u => u.name === name);
    return user ? user.id : -1;
}

export function addCommentToMessage(messageId, comment){
    const message = messages.find(m => m.id === messageId);
    message.comments.push(comment);
}

export function findMessagesByUserId(userId){
    return messages.filter(m => m.userId === userId)
}

addCommentToMessage(0, new Comment(0,'very good',new Date().toLocaleDateString()));
addCommentToMessage(0, new Comment(1,'nice to see you', new Date().toLocaleDateString()));
addCommentToMessage(1, new Comment(2,'hello!', new Date().toLocaleDateString()));
addCommentToMessage(1, new Comment(0,'good bye!', new Date().toLocaleDateString()));

//export default URL
export {users, messages}