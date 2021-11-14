////////Clousure

/* let myName = 'Vasya';

function sayHello(){
    myName = 'Anna'
    console.log(`hello, ${myName}`)
}

sayHello();
myName = 'Kolya';

sayHello(); */

let myName;

function getMessage(){
    myName = 'Petya';

    return function (){       
        console.log(myName)
    }
    //return myName;
}

myName = 'Vasya';

let message = getMessage();   //function(){ console.log(myName)}
message();

//console.log(myName)

function makeCounter(){
    let count = 0;

    return function(){
        return count++;
    }
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log('---------------')
counter = makeCounter();    // const counter1 = makeCounter();
console.log(counter())

const counter1 = makeCounter();
console.log(counter1());

/* function makeUserId(){
    let userIdFunctions = [];   // function(){console.log(i)}
    let i = 0
    while(i < 5){
        let userId = function(){
            console.log(i)
        }
        userIdFunctions.push(userId);
        i++
    }
    return userIdFunctions;
} */

function makeUserId(){
    let userIdFunctions = [];   // function(){console.log(i)}
    //let i = 0
    for (let i = 0; i<5; i++){
        let userId = function(){
            console.log(i)
        }
        userIdFunctions.push(userId);
    }
    return userIdFunctions;
}

const userId = makeUserId();

userId[0]();
userId[1]();
userId[3]();

console.log(userId);

//Prototype//
let str = 'some string';
const strObejct = new String('another string');

console.log(typeof str);
console.log(typeof strObejct);

console.log('abcd'.toUpperCase())

console.dir([1,2,3]);

const cat = {
    feet: 4,
    tail: 1,
    ears: 2,
    voice: function(){
        console.log('meow-meow')
    }
}

const barsik = {
    color: 'black',
    age: 2
}

//barsik.__proto__ = cat;   -> deprecated

Object.setPrototypeOf(barsik, cat)   // статический способ
const murzik = Object.create(cat);   // динамический способ

// murzik.color = 'white'
// murzik.age = 3
// const murzik = Object.create(cat, {color:{value: 'white'}, age:{value: 3}});

console.log(barsik);
//console.dir(barsik);

barsik.voice();
console.log(barsik.tail);

// function Constructor

function User(name, id){
    this.name = name,
    this.id = id,
    this.human = true,
    this.say = function(message){
        console.log(`${name} say: ${message}`)
    }
}

const user1 = new User('Vasya', 1);
user1.say('Hello!')

const user2 = new User('Anna', 2)
user2.say('Nice to meet you!')

console.log(user1, user2);

user1.age = 32;

User.prototype.goodBye = function(){
    console.log(`User ${this.name} say goo bye!`)
}

console.log(user2.age, user1.age)

user1.goodBye();
user2.goodBye();
