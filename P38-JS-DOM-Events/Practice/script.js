const inputText = document.querySelector('#myInput'),
      addBtn = document.querySelector('#addBtn'),
      list = document.querySelector('#todo-list');

 inputText.focus();     

 addBtn.onclick = ()=>{
     const li = document.createElement('li');
     const check = document.createElement('input');
     //checkbox.type = 'checkbox';
     check.setAttribute('type', 'checkbox');

     li.innerText = inputText.value
     li.prepend(check);

     check.onchange = ()=>{
         li.style.textDecoration = check.checked ? 'line-through' : 'none';
     }
     list.append(li);
     inputText.value = '';
     inputText.focus();
 }

 