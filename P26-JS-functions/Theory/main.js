//String
const str = 'hello!\n\'world\' \u{1F60D}'  //"hello!", `hello!`

let str2 = `hello world!`

/* let str2 = `hello
      world!
*-----*` */

/* console.log(str2);
console.log(str); */

console.log(str2[str2.length - 1])
str2[0] = 'A';
console.log(str2[0]);

/* console.log(str.length)
console.log(str); */

console.log(str2);

str2 = 'Hello world wow!';
console.log(str2);

const numbers = [1,2,3,4,5];
numbers[0] = 5;

console.log(numbers)

console.log(str2.charAt(6));

str2 = str2.toUpperCase();
str2 = str2.toLowerCase();

console.log(str2);

console.log(str2.indexOf('W', 7));
console.log(str2.lastIndexOf('w'));

console.log(str2.startsWith('A'));
console.log(str2.endsWith('wow!'));
console.log(str2.includes('WOR'));

console.log('---------------------')
console.log(str2.slice(6, 11));

let str3 = str2.slice(-6, -2)

console.log(str3);
console.log(str2.substring(11,6));
console.log(str2.substr(6, 3));

str2 = str2.replace('e', 'a');

console.log(str2);

//str2 = str2.replaceAll('wo', 'WWWWWW');
console.log(str2);

let names = 'Ivan Anna Vasya Olya, Petya';
let nameArray = names.split(' ');
console.log(nameArray[0], nameArray);

const arrayLetters = 'apple'.split('');
console.log(arrayLetters);

//Arrays
let num = [1,2,3,4];

//delete num[1];

num.splice(1,2,5,6,7,8);

//console.log(num);

const num1 = num.slice(1,3);

//console.log(num1);

const newNums = num.concat(num1, 6,7, num1);
//console.log(newNums);

//num.forEach(el => console.log(el*2));

num.forEach((item, index, array) => console.log(`${item} has index ${index}, in ${array}`));

let users = [
    {id:1, name:'Vasya'},
    {id:2, name:'Anna'},
    {id:3, name:'Vanya'},
]

let user = users.find(item => item.name == 'Anna');
//user.name = 'Kolya'

console.log(user);

let usersWithLongName = users.filter(user => user.name.length >=5);
console.log(usersWithLongName);

num = [1,2,3,4];

let newNumbers = num.map(num => num * 2);
console.log(newNumbers)

const cites = ['Berlin', 'London', 'Paris', 'Moscow'];

const citiesLength = cites.map(city => city.length)

console.log(citiesLength);

num = [1,2,3,4,5];
let result = num.reduce((sum, current) => sum + current, 10);

console.log(result);

let strings = ['one', 'two', 'three'];
result = strings.reduce((str, s)=>str + ' ' + s);

console.log(result);

