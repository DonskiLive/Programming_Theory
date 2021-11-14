const users = [
    {name:'Anna', age: 25, id:1},
    {name:'John', age: 32, id:2},
    {name:'Michael', age: 37, id:3},
    {name:'Nina', age: 21, id:4},
    {name:'Karl', age: 18, id:5}
],
    btnShow = document.querySelector('#showUser');

users.sort((user1, user2) => user1.age - user2.age);
const wrapper = document.querySelector('.wrapper');
wrapper.style.cssText = 'text-align:center';

btnShow.onclick = ()=>{   
//wrapper.style.textAlign = 'center';
const container = document.createElement('div');
console.log(container.innerHTML)
container.style.cssText = 'width: 200px; text-align: left; margin: 0 auto; font-size:22px';

/* for(let item of users){
    const user = document.createElement('p');
    user.innerText = `${item.name}, ${item.age} years old`;
    container.append(user);
} */


for(let item of users){
    /* container.innerHTML += `<p style = 'border-bottom: 1px solid black'>${item.name}, ${item.age} years old</p>`; */
    container.innerHTML += `<p>${item.name}, ${item.age} years old</p>`;
}

wrapper.append(container);

const texts = document.querySelectorAll('p');
texts.forEach(el => el.style.borderBottom = '1px solid black');

}

