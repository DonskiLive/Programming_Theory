startApp()
function startApp() {
    //localStorage.clear()
    const usersList = document.querySelector('.users-list'),
        leftBox = document.querySelector('.left'),
        rightBox = document.querySelector('.right'),
        messageBtn = document.querySelector('#messageBtn'),
        newMessage = document.querySelector('#message-text'),
        messageTitle = document.querySelector('#message-title'),
        commentText = document.querySelector('#comment-text'),
        commentBtn = document.querySelector('#commentBtn')
    let selectedUserId

    const users = [
        new User('Vasya Pupkin', 'Berlin'),
        new User('Maksym Kostenko', 'Mainz'),
        new User('Ivan Ivanov', 'Kiev')
    ]

    const renderUsersList = (array) => {
        array.forEach(item => {
            usersList.innerHTML += item.renderUser()
        })
    }

    renderUsersList(users)

    function findUserById(id) {
        return users.find(user => user.id === id)
    }

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
            const messagesFromStore = StoreMessage.getAll()
            renderLeftBox(messagesFromStore)
        }
        createNewMessage(selectedUserId)
    }

    function renderMessage(item) {
        return `
        <div class="message-bg" data-message="${item.id}">
            <h4 class="message-text">${item.title}</h4>
            <p class="message-text">Published: ${item.data}</p>
        </div>
    `
    }

    function createNewMessage(userId) {
        messageBtn.onclick = () => {
            if (newMessage.value != '' && messageTitle.value != '') {
                StoreMessage.save(new Message(userId, messageTitle.value, newMessage.value, new Date().toLocaleDateString()))
                const messagesFromStore = StoreMessage.getAll()
                renderLeftBox(messagesFromStore)
                newMessage.value = ''
                messageTitle.value = ''
            } else {
                modalWindow('message')
            }
        }
    }

    function renderLeftBox(messagesFromStore){
        const userMessages = messagesFromStore.filter(message => message.userId === selectedUserId)
            leftBox.innerHTML = (userMessages.length) ? userMessages.map(item => renderMessage(item)).join('') : '<div>No message</div>'
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
        const messagesFromStore = StoreMessage.getAll()
        const actualUser = messagesFromStore.filter(m => m.userId === selectedUserId)
        const message = actualUser.find(m => m.id === +target.dataset.message);
        if (message) {
            document.querySelector('.container-right').style.display = 'block'
            document.querySelector('.container-comment').style.display = 'block'
            rightBox.innerHTML = renderFullInfo(message)
        } else {
            document.querySelector('.container-right').style.display = 'none'
            document.querySelector('.container-comment').style.display = 'none'
            rightBox.innerHTML = ''
        }
        createNewComment(message, messagesFromStore)
    }

    function renderFullInfo(message) {
        return `
        <div>
        <h3>${message.title}</h3>
        <p>${message.text}</p>
        <h4>Published: ${message.data}</h4>
        <hr>
        ${(message.comments.length === 0) ? "<p>No comment</p>" : message.comments.map(item => renderComment(item)).join('')}
        </div>
    `
    }

    function renderComment(item) {
        return `
        <div>
            <h5>${item.text}</h5>
            <p>${item.data}, comment by ${findUserById(item.userId).name}</p>
        </div>
    `
    }

    function createNewComment(message, messagesFromStore) {
        const comFromUserName = document.querySelector('#comFromUserName')
        comFromUserName.innerHTML = ''
        comFromUserName.innerHTML = '<option value="" disabled selected>Select your name:</option>'
        users.forEach(user => {
                const option = document.createElement('option')
                option.innerHTML = user.name
                comFromUserName.append(option)
        })
        commentBtn.onclick = () => {
            if (commentText.value != '' && comFromUserName.value != '') {
                const commentFromUser = users.find(u => u.name === comFromUserName.value)
                message.comments.push(new Comment(commentFromUser.id, commentText.value, new Date().toLocaleDateString()));
                StoreMessage.updateLocalStorage(messagesFromStore)
                rightBox.innerHTML = renderFullInfo(message)
                commentText.value = ''
                comFromUserName.value = ''
            } else {
                modalWindow('comment')
            }
        }
    }


    
    function modalWindow(text) {
        const modal = document.createElement('div')
        modal.classList.add('modal')
        modal.innerHTML = `
        <div class="modal-dialog">
                <div class="modal-close" data-close>&times</div>
                <h3 class="modal-text">You cannot send an empty ${text}!<br>Please, check all fields</h3>
        </div>
        `
        modal.addEventListener('click', closeModalWindow)
        document.addEventListener('keydown', closeModalByEsc)
        document.querySelector('.wrapper').after(modal)
        document.body.style.overflow = 'hidden'
    }



    function closeModal() {
        document.querySelector('.modal [data-close]').removeEventListener('click', closeModalWindow)
        document.removeEventListener('keydown', closeModalByEsc)
        document.querySelector('.modal').remove()
        document.body.style.overflow = ''
    }

    function closeModalWindow(event) {
        const target = event.target
        if (target === document.querySelector('.modal') || target === document.querySelector('.modal [data-close]')) {
            closeModal()
        }
    }

    function closeModalByEsc(event) {
        if (event.keyCode === 27) {
            closeModal()
        }
    }
}