'use strict'

/* 
function showThis(){
    console.log(this)
}

showThis(); */

/* 
1. Для любой обычной функции this = window (при нестрогом режиме), undefind - при использовании 'use strict'
2. Контекст у методв объекта - сам объект
3. This в функциях-конструкторах относится к создаваемомоу (новому) экземпляру объекта
4. Ручная привязка this - call, apply, bind

 */

/* function sumNumber(a,b){
    console.log(this);
    function sum(){
        console.log(this);
        return this.a + this.b
    }
    console.log(sum())
}

sumNumber(); */

function sumNumber(a,b){
    console.log(this);
    function sum(){
        console.log(this);
        return a + b
    }
    console.log(sum())
}

sumNumber(5,6);


const object = {
    a:20,
    b:14,
   /*  sum: function(){
        console.log(this)
        console.log(this.a + this.b);
        function more(){
            console.log(this)
        }
        more();
    } */
    sum: function(){
        console.log(this)
        console.log(this.a + this.b);
        const more = () => console.log(this)
        more();
        }        
}

object.sum()

function User(name, id){
    this.name = name,
    this.id = id,
    this.hello = function(){
        console.log(`Hello, ${this.name}`);
    }
}

//const user = new User('Vasya' , 1);

function sayName(lastName, age){
    console.log(this);
    console.log(this.name + lastName + `, age: ${age}`)
}

const user = {
    name: 'John',
    //age: 32
}

//sayName();
sayName.call(user, ' Smith', 12);
sayName.apply(user, [' Klein', 12]);


function printMessage(){
    console.log(this)
}

//printMessage()
const print = printMessage.bind('Hello!');
print()

function count(num){
    return (num %2 == 0) ? num * this.a : num * this.b
}

const double = count.bind({a:2, b:3});
console.log(double(11))