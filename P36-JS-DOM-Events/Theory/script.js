const names = ['Ivan', 'Anna', 'Mariya', 'Nikolay', 'Petr', 'Olga'];

const ul = document.querySelector('#list'),
    addBtn = document.querySelector('#addBtn');

let i = 0;

/* addBtn.onclick = ()=>{
    const index = getRnd(names.length);
    //ul.innerHTML += `<li>${names[index]}</li>`;
    //ul.append(li);
    //ul.prepend(li);
    //ul.append(createLi(names[index]));

    //let li = createLi(names[index]);
    if(i===names.length) return

    let li = createLi(names[i++]);
    //ul.insertAdjacentHTML('beforeend',li);
    //ul.insertAdjacentElement('beforeend',li);
    ul.append(li);
    
} */

const liRender = () => {
    let li = createLi(names[i++]);
    ul.append(li);
    if (i === names.length) addBtn.removeEventListener('click', liRender);

}

addBtn.addEventListener('click', liRender);


function createLi(name) {
    const li = document.createElement('li');
    li.innerHTML = name;
    li.style.backgroundColor = getRandomColor();
    li.classList.add('nameList');
    li.onclick = changeBg;
    return li;
}

function getRnd(max) {
    return parseInt(Math.random() * max);
}

function getRandomColor() {
    return `rgb(${getRnd(256)}, ${getRnd(256)},${getRnd(256)})`
}

const box = document.querySelector('.box');

/* box.onclick = (event)=>{
    console.log(event.target)
    box.style.backgroundColor = getRandomColor();
} */

/* box.onclick = changeBg;

box.onclick = ()=>{
    console.log('click');
} */


box.addEventListener('click', changeBg);
box.addEventListener('click', () => {
    console.log('click')
})


function changeBg(event) {
    event.target.style.backgroundColor = getRandomColor();
}

const doSomthing = () => {

}
//box.removeEventListener('click', changeBg);