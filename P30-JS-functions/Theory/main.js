/* function showMessage(from, text){
    if(text === undefined){
        text = 'text not added'
    }
    console.log(`${from}: ${text} `)
} */

function showMessage(from ='no name', text = 'empty text'){
    console.log(`${from}: ${text} `)
}
showMessage('Vasya', 'Nice to meet you!');

showMessage();

function calc(a=2,b=3){
    return a + b;
}

console.log(calc());
console.log(calc(5));
console.log(calc(4,5));

const arr = [1,2,3];

function printArray(array = arr){
    console.log(array)
}

printArray();

/////////////////////Arrays Destructurisation

/* const arrayName = ['Vasya', 'Pupkin', 'Driver'];
let [firstName, , profession] = arrayName;

firstName = firstName.toUpperCase()

console.log(firstName);
console.log(profession); */

let [red, black, ...colors] = ['red', 'black', 'yellow', 'gren', 'white'];

console.log(colors)

const names = ['Vasya']

let [firstName = 'guest', lastName = ''] = names;
console.log(firstName, lastName);


/////////////////////Object Destructurisation
const object = {
    title: 'box',
    color: 'black',
    material: 'wood',
    size:{
        width: 200,
        height: 200,
        length:200
    }
}

//const object2 = object

/* object2.color = 'red'
console.log(object.color) */

let num = 10;
let num2 = num;
num2 = num + 10;

const object2 = {...object}   //

/* object2.color = 'red';
object2.size.height = 250;
console.log(object.color)
console.log(object.size.height) */

//console.log(object.title);
const{ material, title, color} = object;

//const{ material, color: boxColor, size} = object

/* let material, size;

({material, size} = object); */

const size = {...object.size}

console.log(material)
console.log(color);
//console.log(boxColor);
console.log(size);

size.height = 250;
console.log(object.size.height);

const complexObject = {
    size:{
        width: 100,
        height:200,
    },
    items: ['Apple', 'Orange', 'Melone'],
    fill:true
}

const{
    size:{width, height},
    items:[f1,f2,f3],
    fill: isFill
} = complexObject

console.log(isFill);

//////////////Recursion

//5! = 5*4*3*2*1    -> 4!*5
//4! = 4*3*2*1      -> 3!*4
//3! = 3*2*1        -> 2!*3
//2! = 2*1          -> 1!*2
//1! = 1            -> 0!*1
//0! = 1            -> 1


function recursiveFactorial(n){
    if(n==0){
        return 1;
    }else{
        return recursiveFactorial(n-1) * n;
    }
}

// Task01 
/* n = 10
function recusionOutput(n) -> '12345678910'
 */

//Task02
/* 'шалаш' 'abba' 'потоп' 'а роза упала на лапу азора' 
function checkPolindrom('nagan') -> true;
        checkPolindrom('grhjs') -> false;
 */

//Task03
/* метод, который получает массив вида users возвращает массив вида changedUsers
    const users = [
        {firstName: 'Vasya', lastName:'Pupkin', id:1},
        {firstName: 'Vas', lastName:'Pupk', id:2},
        {firstName: 'Sasha', lastName:'Vasin', id:3}
    ]

    changedUsers -> [
        {fullName: 'Vasya Pupkin', id:1},
        {fullName: 'Vas Pupk', id:2},
        {fullName: 'Sasha Vasin', id:3}
    ]
 */