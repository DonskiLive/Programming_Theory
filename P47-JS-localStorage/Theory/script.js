/* function printContext(){  
    console.log(this)
}

printContext();


const user = {
    name:'Vasya',
    print: function(){
        console.log(this.name)
    }
}

user.print(); */

const timerInput = document.querySelector('#timerInput'),
      result = document.querySelector('#result'),
      startBtn = document.querySelector('#startBtn'),
      stopBtn = document.querySelector('#stopBtn');

const timer = new Timer(0, onUpdateCount, onStop);  //{count: undefind, idInterval:null}

result.style.display = 'none'

startBtn.onclick = function(){
    const input = parseInt(timerInput.value);
    timer.count = input;
    timer.start();
    timerInput.style.display = 'none';
    result.style.display = 'block';
    startBtn.disabled = true
}


//stopBtn.onclick = timer.stop.bind(timer)

//stopBtn.onclick = timer.stop

stopBtn.onclick = function(){
    timer.stop();
}

function onUpdateCount(count){
    result.innerHTML = count
}

function onStop(count){
    timerInput.value = count;
    timerInput.style.display = 'block';
    result.style.display = 'none'
    startBtn.disabled = false
}