function add(a: number, b: number) {
	return a + b;
}

const result = add(2, 9);

console.log(result)

// Primitives: number, string, boolean
// More complex types: arrays and Objects
// Function types, parameters, arrays

// Primitives

let age: number; // small latter for naming (number; string) used for primitives
let type: string = 'TypeScript';

age = 12.1;

let userName: string

let isInstructor: boolean;
isInstructor = true;

// More complex types
let hobbies: string[]; // means we want to have Array of strings
hobbies = ['Sports', 'Cooking']

let personAny; // if you sin no type for variable - by default Type is: any (not recommend - same function as JS then)

let person: { // Type object, inside which possible describe ruls for types of keys inside object
	name: string;
	age: number;
}
person = {
	name: 'Max',
	age: 32
}

/* person = {
	isEmployee: true // not storeble becouse has other type which not described during object declaration
} */

let people: {
	name: string;
	age: number;
}[];


// Type inference functions
let course = 'React - The Complete Guide' // during first initialization of variable, without selected Type, TypeScript will initialization Type automaticaly by looking on writn value
// after automatical initialization of Type - will be not allowed to write into variable value with another type!!!
// course = 1234 // will generate Error, because automaticaly during initialization of variable was given string Type - write number now not allowed!!!

// If you want to alow more then one type = union types
let course2: string | number = 'React - The Complete Guide'
course2 = 1234 // now no error because used union Type during variable initialization

// if typing form for different variables or objects frequently reapeated, possible to creat alias (base type)
// create alias possible with key word 'type' which present just in TypeScript Language
// Object type definition
//Type ALIAS:
type Person2 = {
	name: string;
	age: number;
}
let person2 : Person2;
let people2: Person2[]

// Functions and types that
function add2(a: number, b: number){ // if input values are with same Type - return type of created value will be set automatically according to input Type 
	return a + b;
}
/* function add2(a: number, b: number): number | string{ // it is no reason to additionally write return type of value from function! 
	return a + b;
} */

function print(value: any){ // no return statement!!! In that case automatical type 'void' for function output given. Void Type - means never return
	console.log(value)
}
print()

// Generics
function insertAtBeginning(array: any[], value: any){ // Type any - remove all supports of TypeScript for controlling correct code
	const newArray = [value, ...array]					// in that example return type of value from function will be also 'any'!!! not good
	return newArray
}
const demoArray = [1,2,3]
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

updatedArray[0].split('') // in that example this mistake of Types will be not recognized, because output from function was Typed as 'any'!

// To avoid such cases in Type Script possible to use Generic Type - special sintex which included to the end of function name <any name>, with same name input values must be indetified 
function insertAtBeginning2<T>(array: T[], value: T){ // during calling this function - function will look on input types of entered values and will understand that both parameters have same type, which automatically given to return value
	const newArray = [value, ...array]
	return newArray
}
const demoArray2 = [1,2,3]
const updatedArray2 = insertAtBeginning2(demoArray2, -1); // [-1, 1, 2, 3]
//!updatedArray2[0].split('') // Thanks to Generic Type possible to avoid mistake - we will see immediatly mistake of types. split function cannot be used for numbers! Type error

const demoArray3 = ['a','b','c']
const updatedArray3 = insertAtBeginning2(demoArray3, 'd');
updatedArray3[0].split('') // with string in that case no errors!

// using Generic give as chance to create flexible function and plus to that still control correct use of types and method latter! Flexibility and type safety are


class Student {
	//Standard notation:
/* 	firstName: string;
	lastName: string;
	age: number;
	private courses: string[]; // Type script give possibility to block key courses for reading from outside (in that case by student.courses)

	constructor(first: string, last: string, age: number, courses: string[]) {
		this.firstName = first;
		this.lastName = last;
		this.age = age;
		this.courses = courses;
	} */
	//Shorter notation:
	constructor(
		public firstName: string,
		public lastName: string,
		public age: number,
		private courses: string[]
	){}

	enrol(courseName: string){ // in case of Java Script for creation of Method inside class constructor important to write 'function' before name!
		this.courses.push(courseName)
	}

	listCourses(){
		return this.courses.slice(); // on that way stored array inside key 'courses' can be read out, but not modified, because we provide out just copy of original array
	}
}

const student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enrol('React') /* student.courses => Angular, React */

//!student.courses // now not possible to read out directly value from privet key courses, but possible to get courses by asking method:
student.listCourses() // => Angular, React 

// interfaces - object type definitions = present just in Type Script 
interface Human{
	firstName: string;
	age: number;
	greet: () => void; // now each human will have greet method with no parameters, which return nothing
}

let max: Human;
max = {
	firstName: 'Max',
	age: 32,
	greet(){
		console.log('Hello!')
	}
}

// Interfaces and alias are similiar in sintax after alias "type Human = {...}", in interfaces "interface Human{...}". Interface that is alternative for alias but also:
// Interfaces can be implemented by Classes, during build application in Angular often used Classes and Interfaces

// by implementation created interface into any new Class, TypeScript will always control correctness of feeling Types into this new Class. If you write different type, then provided during creation of Interface - error will apear

/* class Instructor implements Human{
	firstName: string;
	age: number;
	greet(){
		console.log('Hello!!!');
	}
} */

// configuring TypeScript - if you want during one action in once compile all typescript files inside project 
// without compiler config file for TypeScript you able run specified file with command: npx tsc  (npx tsc {...here file name.ts})
// to add typeScript compiler config file: npx tsc --init ; This command will creat tsconfig.json file inside project and alow compile all files from a project using
// In case of Angular we dont need this command, because TypeScript it is a part of Angular and tsconfig.json that is a part of each Angular project
// in default inside config file Type Checking "strict": true -> important to set type! and so on...