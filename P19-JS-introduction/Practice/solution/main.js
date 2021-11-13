//Task01 Make code correct

let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);

//a = +a; 
let summe = a + b;
console.log(typeof a)

alert(summe);

//alert(+a + +b);  // 12

//==============================
//Task02 
// Спросить сколько стоит работа в час; Сколько часов в день работает;
//Вывести зарплату за месяц (22 рабочих дня в месяце)

let pricePerHour, countHoursPerDay;
const workDaysPerMonth = 22;

pricePerHour = prompt('Enter price per hour');  // -> typeof String
countHoursPerDay = prompt('Enter count of hours per day');

//let salary = Number(pricePerHour) * Number(countHoursPerDay) * 22;
let salary = pricePerHour * countHoursPerDay * workDaysPerMonth;

alert('your salary is: ' + salary)
//=============================

//Task03
//Спросить радиус, распечатать площадь круга;

const PI = 3.14;
const radius = Number(prompt('Enter radius'));

//let circleSquare = PI * radius * radius;
let circleSquare = PI * radius ** 2;

alert("Result: " + circleSquare);

