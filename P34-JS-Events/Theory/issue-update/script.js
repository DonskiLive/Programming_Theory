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
const ul = document.createElement('ul');

/* 
for(let item of users){
    ul.innerHTML += `<li>${item.name}, ${item.age} years old</li>`;
}

ul.classList.toggle('hide'); 
btnShow.onclick = ()=>{
    ul.classList.toggle('hide')   
} */

btnShow.onclick = ()=>{
    ul.innerHTML ='';
    /* for(let item of users){
        ul.innerHTML += `<li>${item.name}, ${item.age} years old</li>`;
    } */
    users.forEach((item, index)=>{
        ul.innerHTML += `<li>${index + 1}. ${item.name}, ${item.age} years old</li>`
    })


}
wrapper.append(ul);



