// # проект messanger
// объект User : {id: 3, name: 'Vasya', city: 'Berlin'}
// массив из трех users :[user1, user2, user3]
//
// массив сообщений: [{
//     id:0,
//     userId:3,
//     title:'Some title',
//     text: 'Some text',
//     data: '01.10.2021'
//     comments:[{}, {}, {}]
// },{},{}]
//
// comment: {
//     id:0,
//         userId:3,
//         postId:0,
//         text: 'some text',
//         data:'05.10.2021
// }
const usersList = document.querySelector('.users-list'),
    leftBox = document.querySelector('.left'),
    rightBox = document.querySelector('.right'),
    messageBtn = document.querySelector('#messageBtn'),
    newMessage = document.querySelector('#message-text'),
    messageTitle = document.querySelector('#message-title'),
    commentText = document.querySelector('#comment-text'),
    commentBtn = document.querySelector('#commentBtn')

let selectedUserId

function findUserById(id) {
    return users.find(user => user.id === id)
}

const users = [
    new User('Vasya Pupkin', 'Berlin'),
    new User('Maksym Kostenko', 'Mainz'),
    new User('Ivan Ivanov', 'Kiev')
]

const messages = [
    new Message(0, 'Hello', 'World', new Date().toLocaleDateString()),
    new Message(0, 'About', 'Meeting', new Date().toLocaleDateString()),
    new Message(1, 'Text', 'Info', new Date().toLocaleDateString())
]

messages[0].comments.push(new Comment(0, 'very good', new Date().toLocaleDateString()));
messages[0].comments.push(new Comment(1, 'nice to see you', new Date().toLocaleDateString()));
messages[1].comments.push(new Comment(2, 'hello!', new Date().toLocaleDateString()));
messages[1].comments.push(new Comment(0, 'good bye!', new Date().toLocaleDateString()));

const renderUsersList = (array) => {
    array.forEach(item => {
        usersList.innerHTML += item.renderUser()
    })
}

renderUsersList(users)

usersList.onclick = (event) => {
    rightBox.innerHTML = ''
    newMessage.value = ''
    messageTitle.value = ''
    selectedUserId = +event.target.dataset.id
    if (event.target.tagName === 'H3') {
        const h3 = document.querySelectorAll('.users-list h3')
        h3.forEach(element => element.style.backgroundColor = '')
        event.target.style.backgroundColor = 'yellowgreen'
        document.querySelector('.container-left').style.display = 'block'
        document.querySelector('.container-message').style.display = 'block'
        document.querySelector('.container-right').style.display = 'none'
        document.querySelector('.container-comment').style.display = 'none'
        const userMessages = messages.filter(message => message.userId === selectedUserId)
        leftBox.innerHTML = (userMessages.length) ? userMessages.map(item => item.renderMessage()).join('') : '<p>No message</p>'
    }
    createNewMessage(selectedUserId)
}

function createNewMessage(userId) {
    messageBtn.onclick = () => {
        if (newMessage.value != '' && messageTitle.value != '') {
            messages.push(new Message(userId, messageTitle.value, newMessage.value, new Date().toLocaleDateString()))
            const userMessages = messages.filter(message => message.userId === userId)
            console.log(userMessages)
            leftBox.innerHTML = (userMessages.length) ? userMessages.map(item => item.renderMessage()).join('') : '<p>No message</p>'
            newMessage.value = ''
            messageTitle.value = ''
        } else {
            alert('You cannot send an empty comment! Please, check all fields')
        }
    }
}

leftBox.onclick = (event) => {
    const messageBg = document.querySelectorAll('.message-bg')
    messageBg.forEach(element => element.style.backgroundColor = '')
    let target = event.target;

    if (target.className == 'message-bg') {
        target.style.backgroundColor = 'yellowgreen'
    }

    if (target.tagName !== 'DIV') {
        target = event.target.parentNode
        target.style.backgroundColor = 'yellowgreen'
    }
    const message = messages.find(m => m.id === +target.dataset.message);
    if (message) {
        document.querySelector('.container-right').style.display = 'block'
        document.querySelector('.container-comment').style.display = 'block'
        rightBox.innerHTML = message.renderFullInfo()
    } else {
        document.querySelector('.container-right').style.display = 'none'
        document.querySelector('.container-comment').style.display = 'none'
        rightBox.innerHTML = ''
    }
    createNewComment(message)
}

function createNewComment(message) {
    const comFromUserName = document.querySelector('#comFromUserName')
    comFromUserName.innerHTML = ''
    comFromUserName.innerHTML = '<option value="" disabled selected>Select your name:</option>'
    users.forEach(user => {
        if (user.id != selectedUserId) {
            const option = document.createElement('option')
            option.innerHTML = user.name
            comFromUserName.append(option)
        }
    })
    commentBtn.onclick = () => {
        if (commentText.value != '' && comFromUserName.value != '') {
            const commentFromUser = users.find(u => u.name === comFromUserName.value)
            message.comments.push(new Comment(commentFromUser.id, commentText.value, new Date().toLocaleDateString()));
            rightBox.innerHTML = message.renderFullInfo()
            commentText.value = ''
            comFromUserName.value = ''
        } else {
            alert('You cannot send an empty comment! Please, check all fields')
        }
    }
}