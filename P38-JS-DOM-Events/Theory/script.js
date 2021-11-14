const sendBtn = document.querySelector('[type = submit]');
const myForm = document.querySelector('#myForm');

console.log(sendBtn);
console.log(myForm);
console.dir(myForm.elements[1]);
console.log(myForm.elements[1].id);
console.log(myForm.elements[1].attributes)

/* console.log(myForm.lastName);
console.log(myForm.lastName.value);

console.log(document.forms);
console.log(document.forms.subscribe) */

//по клику на кнопку send создавать объект user и добавлять в массив users

const users = [];
document.querySelector('#firstName').focus();


//Version-1
/* myForm.onsubmit = (event)=>{
    event.preventDefault();
    const firstName = event.target.firstName,
          lastName = event.target.lastName,
          email = event.target.email

    const user = {
        firstName: firstName.value,
        lastName: lastName.value,
        email:email.value,
    }
    users.push(user);
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    firstName.focus();
    console.log(users)
} */

//Verasion-2
/* myForm.onsubmit = (event)=>{
    event.preventDefault();
    const firstName = event.target.firstName,
          lastName = event.target.lastName,
          email = event.target.email;

    users.push(createUser(firstName,lastName, email));
    clean(firstName);
    clean(lastName);
    clean(email);
    firstName.focus();
    console.log(users)
}

function createUser(firstName, lastName, email){
    return {
        firstName,
        lastName,
        email
    }
}

function clean(element){
    element.value = ''
} */

//Version -3
myForm.onsubmit = (event)=>{
    event.preventDefault();
    const firstName = event.target.firstName,
          lastName = event.target.lastName,
          email = event.target.email;

    users.push(createUser(firstName,lastName, email));
    const inputs = myForm.querySelectorAll('input:not([type = submit])');
    clean(inputs);
    firstName.focus();
    console.log(users)
}

function createUser(firstName, lastName, email){
    return {
        firstName,
        lastName,
        email
    }
}

function clean(elements){
    for(element of elements){
        element.value = ''
    }
    
}
