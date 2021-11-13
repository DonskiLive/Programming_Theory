//==========Types conversion=========

//Number

let str = '   1234z   ';  // '12', '90   ', ' 12.5  '

//str = Number(str);
//str = +str;
str = parseInt(str)

/* console.log(typeof str);
console.log(str);
 */

str = 'one';
str = Number(str);
console.log(str);

str = null;
//str = Number(str);
str = parseInt(str);

console.log(str);

str = true;

console.log(+str);
console.log(parseInt(str))

str = undefined;

console.log('--------------------------')
console.log(+str);
console.log(parseInt(str))


//------------------------
//String

let value = true;
console.log('-----------------------')
console.log (typeof value);

value = String(value);   //value = '' + value;

console.log (typeof value);

//false ->'false', null -> 'null', undefined -> 'undefined', 123 ->'123'


//------------------------
//Boolean
console.log('----------------------');
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-5));
console.log(Boolean('hello!'));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));


//=================Comparison operators==========

//a > b, a < b 
//a >= b, a <= b
//a == b , a === b
//!=  не равно

console.log('--------------------------')
console.log(5 < 3);
console.log(5 != 3);

let isBigger = 3 > 4;
console.log('isBigger: ' + isBigger);

console.log('---------------------------');
console.log('a' > 'q');
console.log('cat' > 'cad');
console.log('cat' > 'cats');
console.log('cat' > 'Cat');
console.log('ABC' == 'ABCd')

console.log('---------------------------');
console.log('2' > 1);

let num1 = 42;
let num2 = '42'

console.log(num1 == num2);
console.log(num1 === num2);

num1 = 0;
str = '';
let result = false;

console.log(str == result);

console.log(null == undefined)

console.log('---------------------------');
console.log(null > 0); 
console.log(null == 0);
console.log(null >= 0);

//----------------------

//===================Conditional operators=========

//if, if else, ?

//num1 = +prompt('enter number');
//num2 = +prompt('enter second number');

/* if(num1 > num2){
    var max = num1;
    alert ('Max number is: ' + max);
}else if (num1 === num2){
    alert('numbers are equal');
    //max = num1;
}
else {
    max = num2;
    alert ('Max number is: ' + max);   
}

alert('Programm ended'); */

let max = num1;

/* if(num1 < num2){
    max = num2;
} */

if(!num1 > num2){
    max = num2;
}

//alert ('Max number is: ' + max);

if (0){
    console.log('Hello!');
}

if(' '){
    console.log('world!');
}

let isFieldChecked = true;

if(isFieldChecked) console.log('field is checked');


/* let isAccessAllowed;
let age = +prompt('enter your age, please'); */

/* if(age >= 18){
    isAccessAllowed = true;
}else{
    isAccessAllowed = false;
} */

//isAccessAllowed = (age >= 18) ? true : false;

//alert(isAccessAllowed);

/* if(age <= 3){
    alert('Hi, small one!');
} else if(age <= 20){
    alert('hi, middle one!')
} else if(age <= 100){
    alert('hello madam or sir!')
}else{
    alert('hello, lucky one!')
} */

/* let message = (age <=3) ? 'Hi, small one!' : 
              (age <=20) ? 'Hi, middle one!' : 
              (age <=100) ? 'hello madam or sir!' : 'hello, lucky one!'; */

//alert(message);

// alert((5>3) ? 'yes': 'no');

//Switch

/* switch(x){
    case 'one':
        alert ('Hello!');  // if(x==='one')
    case 'two':
        alert('Good bye!'); // if(x==='two')
    default:
        alert('nice to meet you!')
        
} */

let sumNumber = +prompt('2 + 2 = ?');

/*switch(sumNumber){
    case 3:
        alert('too little');
        break;
    case 5:
        alert('too much');
        break;
    case 4:
        alert('bingo!');
        break;
    default:
        alert('try again')
} */

/* switch(sumNumber){
    case 2:
    case 3:
    case 5:

        alert('wrong answear, try again');
        break;
    case 4:
        alert('bingo!');
        break;
    default:
        alert('try again!')    
    
} */




/* let userName = prompt('enter your name');

switch(userName){
    case 'Lena':
        alert('Hi, Lena!');
        break;
    case 'Vasya': 
        alert('Hi, Vasya!'); 
        break;
    default:
        alert("I don't know you!");
} */

//============== Logical operators============

// || -> or (или),   &&  -> and (и), ! -> not (не)

let hour = 9;

if(hour < 10 || hour > 18){
    console.log('shop is closed');
}

// false || false  -> false
// true || false   -> true
// false || true  -> true
// true || true -> true

hour = 12;
let minute = 30;

if(hour === 12 && minute === 30){
    console.log('The time is 12:30');
}

// true && true -> true;
// true && false -> false;
//false && true -> false;
//false && false -> false;

console.log(isFieldChecked);
console.log(!isFieldChecked);

//============Confirm=======

let isWeekend = confirm('Is a weekend now?');

alert(isWeekend);