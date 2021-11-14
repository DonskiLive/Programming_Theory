const usersList = document.querySelector('.users-list')
const leftBox = document.querySelector('.left')
const rightBox = document.querySelector('.right');

function findUserById(id){
    return users.find(user => user.id === id)   //{name: Vasya, city: Berlin, id:0}
}

const users = [
    new User('Vasya Pupkin', 'Berlin'),   // -> id 
    new User('Maksym Kostenko', 'Mainz'),
    new User('Ivan Ivanov', 'Kiev')
]

const messages = [
    new Message(0, 'Hello', 'World', new Date().toLocaleDateString()),
    new Message(0, 'About', 'Meeting', new Date().toLocaleDateString()),
    new Message(1, 'Text', 'Info', new Date().toLocaleDateString())
]

messages[0].comments.push(new Comment(0,0, 'very good',new Date().toLocaleDateString()));
messages[0].comments.push(new Comment(1,0, 'nice to see you', new Date().toLocaleDateString()));
messages[1].comments.push(new Comment(2,1, 'hello!', new Date().toLocaleDateString()));
messages[1].comments.push(new Comment(0,1, 'good bye!', new Date().toLocaleDateString()));

const renderUsersList = (array) => {
    array.forEach(item => {
        usersList.innerHTML += item.renderUser()
    })
}

renderUsersList(users)

usersList.onclick = (event) => {
    rightBox.innerHTML = ''
    if(event.target.tagName === 'H3'){
        const userMessages = messages.filter(message => message.userId ===  +event.target.dataset.id)
        console.log(userMessages)
        const messageList = (userMessages.length) ? userMessages.map(item => item.renderMessage()).join('') : '<p>No message</p>'
        leftBox.innerHTML = `${messageList}<br><h4>Write new message</h4>` 
    }
}

leftBox.onclick = (event) => {
    let target = event.target;
    if(target.tagName !== 'DIV'){
        target = event.target.parentNode
    }
    const message = messages.find(m => m.id === +target.dataset.message);
    rightBox.innerHTML = (message) ? message.renderFullInfo() : ''

}



