const input = document.querySelector('#data-input'),
    btn = document.querySelector('#data-btn');
    let id;

btn.onclick = () => { 
    if(id!= null){
        clearInterval(id);
    }
    const date = input.value.split('.').reverse().join('/');
    if(!date) return
    //console.log(date); //'12.03.2021'  -> 2021-03-12
    const deadline = new Date(date); 
    id = setInterval(renderDateTimer, 1000, deadline)
}

function renderDateTimer(date){
   // new Date(2021, 2, 21)
    const timeLeft = date - new Date();
    if(timeLeft<0){
        clearInterval(id);
       document.querySelector('.wrapper').innerHTML = '<h2>time is over</h2>';
        
    }else{

    const days = Math.floor(timeLeft / (1000*24*60*60)),
          hours = Math.floor((timeLeft/(1000*60*60))%24),
          minutes = Math.floor((timeLeft/(1000*60))%60),
          seconds = Math.floor((timeLeft/(1000))%60);

    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = '';      
    const dateTimer = document.createElement('div');
    dateTimer.classList.add('timer')
    dateTimer.innerHTML = `
    <div class="days number-box">
    <p class="number" id = "days">${days}</p>
    <p>days</p>
    </div>
    <div class="hours number-box">
        <p class="number" id = "hours">${hours}</p>
        <p>hours</p>
    </div>
    <div class="minutes number-box">
        <p class="number" id = "minutes">${minutes}</p>
        <p>minutes</p>
    </div>
    <div class="seconds number-box">
        <p class="number" id = "seconds">${seconds}</p>
        <p>seconds</p>
    </div>`
    wrapper.append(dateTimer);
}
}
