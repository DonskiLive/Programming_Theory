//Task01 
/* Запросить два числа, посчитать их сумму.
    если, полученная сумма меньше 10 - вывести сообщение: "сумма слишком маленькая"
    если сумма больше 10 - вывести сообщение: "сумма слишком большая"
    если сумма равна 10 - "бинго!"
    выполнить задание с использованием if и с использованием тернарного оператора (?)
*/

/* const number1 = +prompt('enter number one');
const number2 = +prompt('enter number two');
const summe = number1 + number2; */
//let message;
//const message = (summe > 10) ? 'to big summe' : (summe < 10) ? 'to small summe' : 'bingo!';

/* if(summe > 10 ){
    message = 'to big summe';
}else if(summe < 10){
    message = 'to small summe';
}else{
    message = 'bingo!';
} */

//alert(message);


//Task02 
/* Запросить у пользователя логин.
    если логин равен "employee" , вывести сообщение: "Hi employee!"
    если логин - "boss", вывести сообщение: "Hello boss!"
    если логин пустой - "no login"
    во всех остальных случаях - "Hi user"
    выполнить задание с использованием if и с использованием switch

    '0' == 0 -> true;
    '0' === 0 -> false
*/

/* let newMessage = 'Hi ';
const login = String(prompt('enter your login'));
 */
/* if(login === 'employee' || login === 'Employee'){
    newMessage = newMessage + login + '!'  // newMessage += login + '!'   a = a + 5  -> a += 5
}else if(login === 'boss'){
    newMessage = 'Hello boss!'
}else if(login === '' || login === null){
    newMessage = 'no login';
}else{
    newMessage += 'user!'  // newMessage = newMessage + 'user!'
} */

/* if(login === null){
    newMessage = 'no login'; 
}else{ */

/* switch(login){
    case 'employee':
        newMessage += login + '!';
        break;
    case 'boss':
        newMessage = 'Hello boss!';
        break;
    case 'null':
    case '':
        newMessage = 'no login';
        break;
    default:
        newMessage += 'user!'  
}

alert(newMessage); */



//Task03 
/* Напишите условие if для проверки, что переменная age находится 
   в диапазоне между 14 и 90 включительно.

   Напишите условие if для проверки, что переменная age НЕ находится 
   в диапазоне между 14 и 90 не включительно. Напишите два варианта решения.
*/

let age = 10;

if(age >= 14 && age <= 90){
    console.log('access allowed');
}

if (age < 14 || age > 90){
    console.log('access denied');
}

if (!(age >= 14 && age <= 90)){
    console.log('one more denied');
}