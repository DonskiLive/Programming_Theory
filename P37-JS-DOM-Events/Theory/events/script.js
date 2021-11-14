const input = document.querySelector('#simple-input');

/* input.onchange = (event)=>{
   //console.log('hello!') 
   //console.log(input.value);
   console.log(event.target.value);
} */

/* input.oninput = (event)=>{
    console.log(event.target.value)
} */

input.onkeydown = (event)=>{
    if(event.keyCode === 27 || event.keyCode === 13){
        console.log(event.target.value)
    }
}

//input.focus();

input.onfocus = ()=>{
    console.log('hello');
}

input.onblur = ()=>{
    console.log('good bye!')
}

const myForm = document.querySelector('#myForm');

myForm.onsubmit = (event)=>{
    console.dir(event);
    event.preventDefault();
    console.log(myForm.querySelector('#firstName').value);
    console.log(myForm.querySelector('#lastName').value);
}

const link = document.querySelector('a');
link.onclick = (event)=>{
    event.preventDefault();
    alert('No amazon)))')
}