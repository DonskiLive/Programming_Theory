let numbers = [1,2,3,4,5];

console.log(numbers.reverse());
console.log(numbers);

let names = 'Ivan, Anna, Olya';
let namesArray = names.split(', ');
console.log(namesArray);
let str = namesArray.join('-');
console.log(str);

console.log(str.split('').reverse().join(''));
console.log('abcd'.split('').reverse().join(''));

const letters = ['b','c','d','f','a', 'A', 'C'];
letters.sort();
console.log(letters);

numbers = [2,7,1,11,15,20,21];
numbers.sort();
console.log(numbers);

//Object

const user = {
    name: 'Vasya',
    age: 32,
    isMarried: true
}

const keys = Object.keys(user);
console.log(keys.length);

console.log(Object.values(user));
console.log(Object.entries(user));

let num = numbers.map(item => item + 3);
console.log(num);

const prices = {    
    banana: 1,
    orange: 2,
    fish: 4
}

//[[banana, 1], [orange, 2], [fish, 4]]  

let doublePrice = Object.entries(prices).map(([key, value])=>[key, value * 2]);

console.log(doublePrice);
doublePrice = Object.fromEntries(doublePrice);
console.log(doublePrice);


// References and Object copy

let a = 10;
let b = 20;

function doSomthing(a,b){
    a *=a;
    console.log(a);
    b/=4;
    console.log(b);
}

doSomthing(a,b);

console.log(a,b);

let array = [1,2,3,4,5];

array.forEach((num, index, array) => array[index] = num * 2);

function changeArray(arr){
    /* for(let i = 0; i<arr.length; i++){   // 
        arr[i] = arr[i] * 2;
    } */
    for (let num of arr) num *=2;
}

//changeArray(array);
console.log(array);

const user1 = {
    name:'Vasya',
    age: 32,
    isMarried: true,
    adress: {
        city: 'Berlin',
        country:'Germany'
    }
}

//const user2 = user1;

const user2 = {...user1};
console.log(user2 ===user1)

user2.name = 'Petya';
user2.lastName = 'Ivanov'
user2.adress.city = ('Paris')
console.log(user1);
console.log(user2);

const oldArray = ['a', 'b', 'c'];
//const newArray = oldArray.slice();
const newArray = [...oldArray];

newArray[3] = 'd';

console.log(oldArray);
console.log(newArray);

function copyObject(obj){   //{name: 'vasya', age: 23}
    const objCopy = {};
    for(let key in obj){
        objCopy[key] = obj[key] ; 
    }
    return objCopy;
}

const numbers = {
    a:2,
    b:3,
    c:{
        x:7,
        y:4
    }
}

const copyNumbers = copyObject(numbers);

copyNumbers.a = 10;
copyNumbers.c.x = 10;
console.log(numbers);
console.log(copyNumbers);

const copyNum = Object.assign(numbers, {e: 12});
numbers.c.x = 5;

console.log(copyNum, numbers, copyNumbers );

const client = {name:'Vasya'},
    permission1 = {canView: true},
    permission2 = {canEdit: true};

console.log(client);
const client1 = Object.assign({},client, permission1, permission2, {name:'Petya', age:25});
console.log(client);
console.log(client1);



//Spread operator

const userNames = ['Anna', 'Vasya', 'Kolay'];
const cities = ['Berlin', 'Paris', 'Torkio'];
const all = [...userNames, ...cities, 'I like it'];

console.log(all)


function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const nums = [2,5];
log(...nums);

const messages = ['hello', 'nice to see you', 'good bye!', 'kuku!'];

log(...messages);