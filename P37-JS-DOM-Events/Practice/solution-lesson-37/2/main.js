let container = document.querySelector('.container');

for(i=0; i < 5; i++){
    let box = document.createElement('div');
    box.classList.add('square');
    container.append(box);
    box.onclick = (e)=>e.target.classList.toggle('round');
}