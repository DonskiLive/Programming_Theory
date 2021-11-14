const person1 = {
    id: 0,
    name: 'John',
    age: 25
};

const person2 = {
    id: 1,
    name: 'Jack',
    age: 30
};

let idIterator = 2

function Person(name, age){
    this.id = idIterator++;
    this.name = name;
    this.age = age
    this.sayHello = ()=>console.log(`Hello, ${this.name}`)
}

const person3 = new Person('Anna', 18);
const person4 = new Person('Olga', 28);

console.log(person1);
console.log(person4);

/* const employee = {
    id: 5,
    name: 'Jane',
    age:32,
    profession:'teacher',
    salary: 3000
} */

function Employee(name, age, profession, salary){
    this.profession = profession;
    this.salary = salary;
    //this.display = ()=>console.log(`employee: ${this.profession} ${this.name}`)
    this.__proto__ = new Person(name, age);
}


const employee = new Employee('Vasya', 34, 'driver', 2500);

Person.prototype.display = ()=>console.log(`employee: ${this.profession} ${this.name}`);



console.dir(employee);
console.log(employee.name);

Object.setPrototypeOf(employee, Array);

console.log(Object.keys(employee))

const array = [1,2,3,4,5,6];

Array.prototype.getEven = function(){ 
    return this.filter(item => item%2 === 0)
}

array.join('');

const str = 'hello';

console.dir(array);
console.dir(str);
console.dir(person3)

class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
        //this.calc = ()=> this.width * this.height
    }
    calcArea(){
        return this.height * this.width
    }

    print(){
        console.log(`width: ${this.width}, height: ${this.height}`)
    }
}

class ColorRectangleWithText extends Rectangle{
    constructor(height, width, text, color){
        super(height, width);
        this.text = text;
        this.color = color;
    }
    showMyProps(){
        console.log(`color: ${this.color}`)
    }

    print(){
        super.print()
        console.log('hello from color regtangle')
    }

}

const square = new Rectangle();
square.width = 100;
square.height = 100;
console.log(square.calcArea());
console.log(Object.keys(square))

const rect = new Rectangle(20,40);
console.log(rect.calcArea())
console.dir(square);

const colorRect =  new ColorRectangleWithText(100,20, 'Hello world', 'red');
console.log(colorRect.calcArea());
rect.print()
colorRect.print();
//Object.setPrototypeOf(colorRect, Array)
colorRect.id = 123;
console.dir(colorRect)

