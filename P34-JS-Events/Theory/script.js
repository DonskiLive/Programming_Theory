function simpleClick(){
    console.log('click')
}

const btn1 = document.querySelector('#btn'),
      one = document.querySelector('.one'),
      two = document.querySelector('.two'),
      three = document.querySelector('#three'),
      btnChangeSize = document.querySelector('#size30'),
      btnSend = document.querySelector('#send'),
      mySelect = document.querySelector('#mySelect');

btn1.style.display = 'block';
//btn1.style.cssText = {display: block; margin-bottom: 10px}

btn1.onclick = simpleClick;
/* btn1.onclick = function(){
    document.querySelector('h1').style.color = 'red'
} */
//btn1.onclick = ()=>document.querySelector('h1').style.color = 'red';

btn1.addEventListener('click', simpleClick);

/* one.onclick = ()=>{
    one.classList.toggle('yellow');
} */

btn1.onclick = ()=>{
    one.classList.toggle('yellow');
}

two.onmouseover = ()=>{
    two.style.backgroundColor = 'red';
}

two.onmouseout = ()=>{
    two.style.backgroundColor = 'green'
}

three.onmouseover = ()=>{
    three.style.cssText = 'width:100px; height:100px'
}

three.onmouseout = ()=>{
    three.style.cssText = 'width:200px; height:200px'
}

btnChangeSize.onclick = ()=>{
    //document.querySelector('p.topText').style.fontSize = '30px';
    document.querySelector('p.topText').classList.toggle('fs-30')
}

btnSend.onclick = ()=>{
    const firstName = document.querySelector('#firstName'),
          lastName = document.querySelector('#lastName');        
   document.querySelector('#output')
            .textContent = `Hello, my name is ${firstName.value} ${lastName.value}!`;
    firstName.value = '';
    lastName.value = ''
}

mySelect.onchange = () =>{
    document.querySelector('#carName').textContent = 'You selected ' + mySelect.value
}