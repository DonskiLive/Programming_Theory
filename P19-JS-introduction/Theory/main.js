/* Komment example 
in two line */

// one line Komment

//===============
//Variables
//===============

var age = 25;
let message = 'hello from main-js!';
const PI = 3.14;

let news, title, article;
const WHITE = 'white', RED = '#005577'

//Declaration
let userName;

//Initialisation
userName = 'Vasya';


message = 'hello world!';

console.log(message); 
//alert('Good bye!');

console.log(message)

//naming

//good
let myName;  // my_name
let message_12_user;
let user12;
let $;
let _;

//bad
let имя;
let imya;
let ff44;

// can not use

/* let 3name;
let g&user;
let let; */

//===============
//Data types
//===============

//Number
let userAge = 25;
let a = 12.56;

console.log(0.2 - 0.1);
console.log(0.3 - 0.2);

//alert(-1/0);
//alert('one'/1);  // (2+5) * 'one' // <----- NaN

//BigInt

//----------------------
//String

let string1 = 'Hello,';
    //string1 = 23;
let string2 = " Vasya!";
let string3 = `Hello, `;

//alert(`Hello, ${string2}`);
//alert('Hello, ${string}');
//alert(`summe 1 + 2 = ${1 + 2}`)

//Boolean
let nameFieldChecked = true;

let isGreater = 4 < userAge;

console.log(isGreater);

//----------------
//Null

let year = null;

//let currentAge = prompt('enter your current age');

//console.log(currentAge);


//---------------
//Undefind

let dog;
console.log(dog)

//---------------
//Object, Symbol, function 

//--------------

let x = 12;
const MONTH = 'july';
let isWeekend = false;
let price = null;
let cat;

console.log('---------------')
console.log(typeof x);
console.log(typeof MONTH);
console.log(typeof isWeekend);
console.log(typeof price);
console.log(typeof cat);
console.log(typeof alert);

//===============
//Operators
//===============

let c = 5;
let b = 10

// ** power
c = c ** 3


// + - * / % binary operators 

c = 10 % 3;   // 3 + 3 + 3 + 1

console.log(c);

let str1 = 'hello, '
let str2 = 'world!'
console.log(str1 + str2)

console.log(str1 + false);
console.log(str1 + (5 + 6) );


// unary operators
let counter = 5;
let newCounter = --counter;

console.log(counter)
console.log(newCounter);

//5++

console.log(2 * counter++);
console.log(counter);

//==========================

let num1 = prompt('enter number, please');  //'3'
let num2 = prompt('enter second number, please'); //'4'

let result = num1 * num2;

alert('Multiplication, result is: ' + result);

/* num1 = parseInt(num1);
num2 = parseInt(num2); */

result = +num1 + +num2;

alert('Summe is: ' + result)


