const inputText = document.querySelector('#myInput'),
    addBtn = document.querySelector('#addBtn');

const todoArray = [] // {id, todo:"", done:false};

let iterator = 0;

/* 
1. Забираем текст из инпута
2. Создаем объект 
        {
            id: 0,  //++
            todo: input.value,
            done: false
        }
3. Сохранем объект в массиве
4. преобразовываем объекты в элементы списка
   a. {id, todo:"", done:false} -> '<li class = "list-group-item d-flex align-items-center">
                    <input type="checkbox" class = "col-1">
                    <h2 class="col-9">Item</h2>
                    <button class="col-2 btn btn-danger">Remove</button>
                </li>'
    b.привязываем прослушивание событий
5. наполняем элементами список

 */

addBtn.onclick = () => {
    const input = inputText.value.trim();
    if (input) {
        todoArray.push(createTodoItem(input));
        const elArray = todoArray.map(mapTaskToListElement);
        console.log(elArray);
        renderParent('#todo-list', elArray );
        inputText.value = '',
        inputText.focus();
        console.log(todoArray);

    }
}

function renderParent(selector, array){
    const element = document.querySelector(selector);
    if(element){
        element.innerHTML = '';
        array.forEach(item => {
            element.append(item)
        });
    }
}


function mapTaskToListElement(task, index) {
    const li = document.createElement('li'),
        checkbox = document.createElement('input'),
        title = document.createElement('h2'),
        button = document.createElement('button');

    li.className = "list-group-item d-flex align-items-center";
    checkbox.type = 'checkbox';
    checkbox.className = "col-1";
    checkbox.checked = task.done;
    title.className = "col-9";
    title.innerText = task.todo;
    title.style.textDecoration = task.done ? 'line-through' : 'none';
    button.innerText = 'Remove';
    button.className = "col-2 btn btn-danger";

    button.onclick = ()=>{
        todoArray.splice(index,1);
        renderParent('#todo-list', todoArray.map(mapTaskToListElement));
    }

    checkbox.onchange = ()=>{
        todoArray[index].done = checkbox.checked;
        title.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    }
    li.append(checkbox);
    li.append(title);
    li.append(button);

    return li;

}

function createTodoItem(task) {

    return {
        id: iterator++,
        todo: task,
        done: false
    }
}