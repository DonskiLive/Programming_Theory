const containerBox = document.querySelector('.container-1'),
       boxes = document.getElementsByClassName('box');

let num = +prompt('enter a number');

for(let i=0; i<num; i++){    
    let box = document.createElement('div');    
    box.classList.add('box');
    containerBox.append(box);
    box.innerHTML = `${i+1}`;
    
   /*  box.onclick = function(e){
        e.target.remove();
    } */
}

containerBox.addEventListener('click', removeElement);

function removeElement(event){
    if(event.target.classList.contains('box')){
        event.target.remove()
    }
    if(boxes.length === 1){
        containerBox.removeEventListener('click', removeElement)
    }
}

