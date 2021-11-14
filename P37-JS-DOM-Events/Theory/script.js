const btn = document.querySelector('#btn'),
      filmInput = document.querySelector('#film-input'),
      filmUl = document.createElement('ul'),
      films = [];    // ['one', 'two']

document.querySelector('.container').append(filmUl)


filmInput.focus();

//Version-1
//let counter = 1;
/* btn.onclick = () => {
    let title = filmInput.value.trim();
    //title = title.trim();
    if (!title) {            //'one' -> true, '' -> false , a>b, a ===0
        alert('Enter title!');
        filmInput.value = '';
        filmInput.focus();

    } else {
        const li = document.createElement('li');
        li.innerHTML = `${counter++}. ${title}`;
        filmUl.append(li);
        filmInput.value = '';
        filmInput.focus();
    }
} */

//Version-2
//let counter = 1;
/* btn.onclick = () => {
    let title = filmInput.value.trim();
    if (!title) {            //'one' -> true, '' -> false , a>b, a ===0
        alert('Enter title!');
        cleanInput(filmInput);
    } else {
       const li =createLi(counter, title);
       counter++;
       filmUl.append(li);
       cleanInput(filmInput);
    }
}

function createLi(number, title){
    const li = document.createElement('li');
    li.innerHTML = `${number}. ${title}`;
    li.onclick = ()=>{
        li.classList.toggle('line-through')
    }
    return li
}

function cleanInput(element){
    element.value = '';
    element.focus();
} */

//Version - 3
/* btn.onclick = ()=>{
    let title = filmInput.value.trim();
    if (!title) {          
        alert('Enter title!');
        cleanInput(filmInput);
    }else{
        films.push(title);  
        filmUl.innerHTML='';
        renderUl();
        cleanInput(filmInput);
        console.log(films)
    }   

}

function renderUl(){
    for(let i =0; i<films.length; i++){
        filmUl.innerHTML += `<li>${i + 1}. ${films[i]}</li>`;
    }
}

function cleanInput(element){
    element.value = '';
    element.focus();
} */

////Version - 4

btn.onclick = ()=>{
    let title = filmInput.value.trim();
    if (!title) {          
        alert('Enter title!');
        cleanInput(filmInput);
    }else{
        films.push(title);  
        filmUl.innerHTML='';
        renderUl();
        cleanInput(filmInput);
        console.log(films)
    }   

}

/* function renderUl(){
   const arr = films.map((film, index) => createFilmLi(film, index));
   arr.forEach(li=>filmUl.append(li));
} */

function renderUl(){
    films.map((film, index) => createFilmLi(film, index)).forEach(li=>filmUl.append(li));
}

function createFilmLi(title, index){
    const li = document.createElement('li');
    li.innerHTML = `${index +1}. ${title}`;
    li.onclick = ()=>{
        li.classList.toggle('line-through')
    }
    return li
}

function cleanInput(element){
    element.value = '';
    element.focus();
}

//const newArr = [1,2,3].map((num,i) => i%2!=0 ? num*2 : num) ->[1,4,3]