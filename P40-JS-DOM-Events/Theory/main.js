const userForm = document.querySelector('#usersForm'),
    btnSend = document.querySelector('#submit'),
    usersList = document.querySelector('#users'),
    right = document.querySelector('.right'),
    users = [];
/* btnSend.onclick = (event)=>{
    event.preventDefault();
    const name = userForm.querySelector('#name');
    const lastName = userForm.querySelector('#lastName');
    const age = userForm.querySelector('#age');
    const city = userForm.querySelector('#city');
    const email = userForm.querySelector('#email');
    const phone = userForm.querySelector('#phone');
    const user = {
        id: users.length,
        name: name.value,
        lastName: lastName.value,
        age: age.value,
        city: city.value,
        email: email.value,
        phone: phone.value
    };
    users.push(user);
    console.log(user);
    console.log(users);
    name.value = '';
    lastName.value = '';
    age.value = '';
    city.value = '';
    email.value = '';
    phone.value = '';
    usersList.innerHTML = '';
    for(let user of users){
        const li = document.createElement('li');
        li.classList.add('userItem');
        li.innerHTML = `<h4>Name: ${user.name} ${user.lastName}</h4>
        <p>City: ${user.city}</p>`;
        usersList.append(li);
    }
} */
btnSend.onclick = (event)=>{
    event.preventDefault();
    const user = {
        id: users.length}
    const inputs = userForm.querySelectorAll('input');
    for(input of inputs){
        user[input.id] = input.value; //создаем пару ключ(id) - значение
        input.value = '';
    }    
    users.push(user); 
    renderUserList();  
}
function renderUserList(){
    usersList.innerHTML = '';
    for(let user of users){
        const li = document.createElement('li');
        li.id = `user-${user.id}`;
        li.classList.add('userItem');
        const h4 = document.createElement('h4');
        h4.innerHTML = `Name: ${user.name} ${user.lastName}`;
        const p = document.createElement('p');
        p.innerHTML = `City: ${user.city}`;
        li.append(h4);
        li.append(p);
        li.onclick = fullInfo; //обработчик событий
        usersList.append(li);
    }
}
/* function fullInfo(event){
    const id = +event.currentTarget.id.split('-')[1];
            const user = users.find(u => u.id === id);
            const avatar = document.createElement('div');
            avatar.classList.add('avatar');
            const h3 = document.createElement('h3');
            h3.innerHTML = `Name: ${user.name}<br>Last name: ${user.lastName}`;
            const pAge = document.createElement('p');
            pAge.innerHTML = `Age: ${user.age}`;
            const pCity = document.createElement('p');
            pCity.innerHTML = `City: ${user.city}`;
            const pMail = document.createElement('p');
            pMail.innerHTML = `E-Mail: ${user.email}`;
            const pPhone = document.createElement('p');
            pPhone.innerHTML = `Phone: ${user.phone}`;
            right.innerHTML = '';
            right.append(avatar);
            right.append(h3);
            right.append(pAge);
            right.append(pCity);
            right.append(pMail);
            right.append(pPhone); 
}
 */
function fullInfo(event){
    const id = +event.currentTarget.id.split('-')[1];
            const user = users.find(u => u.id === id);
            right.innerHTML = '';
            const userWrapper = document.createElement('div');
            userWrapper.classList.add('user-wrapper');
            userWrapper.innerHTML = `<div class="avatar">
            </div>
            <h3>Name: ${user.name} <br>Last name: ${user.lastName}</h3>
            <p>Age: ${user.age}</p>
            <p>City: ${user.city}</p>
            <p>E-MAil: ${user.email}</p>
            <p>phone: ${user.phone}</p>`;
            right.append(userWrapper);
            setTimeout(()=>userWrapper.style.left = '0',200)
            
}