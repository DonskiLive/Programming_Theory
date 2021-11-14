const input = document.querySelector('#input'),
      startBtn = document.querySelector('#startBtn'),
      stopBtn = document.querySelector('#stopBtn'),
      result = document.querySelector('.result');

      let count,
          id;

     input.focus();  
     
     startBtn.onclick = startTimer;
     stopBtn.onclick = stopTimer;

     function startTimer(){
        count = parseInt(input.value);
         if(isNaN(count)) return;
         startBtn.disabled = true;  // startBtn.setAttribute('disabled', true)
         stopBtn.disabled = false;
         input.disabled = true;
         result.innerText = count;
         id = setInterval(function(){
             count--;
             if(count > 0){
                 result.innerText =count;
             }else{
                 stopTimer();
             }
         },1000)
     }

     function stopTimer(){
         clearInterval(id);
         startBtn.disabled = false;
         stopBtn.disabled = true;
         if(count>0){
             result.innerHTML = 'Timer is stopped';
             input.value = count;
         }else{
             result.innerHTML = 'Time is over';
             input.value = '';
             input.disabled = false;
             input.focus();
         }
     }

    