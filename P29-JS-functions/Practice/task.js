//Task01
/* 
 const users =[
    {name: 'Anna', address:{city:'Berlin', country:'Germany'}, age: 32},
    {name: 'Vasya', address:{city:'Tokio', country:'Japan'}, age: 28},
    {name: 'Mariya', address:{city:'London', country:'England'}, age: 15},
    {name: 'Mark', address:{city:'Rom', country:'Italy'}, age: 46},
    {name: 'Sofi', address:{city:'Verona', country:'Italy'}, age: 38},
    {name: 'Sergio', address:{city:'Barcelona', country:'Spain'}, age: 18}
]
Отсортировать массив users по возрасту
 */

function compareUser(user1, user2){
    return user1.age - user2.age;
}

users.sort(compareUser);
users.sort((user1, user2) => user1.age - user2.age);

//Task02
/* 
[1,5,8,4,6,9,3,10];
function filterRange(array,1,4) -> [1,3,4]
 */

//Task03
/* Отсортировать массив в порядке убывание
[7,3,8,9,10,2] -> [10,9,8,7,3,2]
 */

let nums = [7,3,8,9,10,2];
nums.sort((a,b)=> b - a);
console.log(nums);

/* Сгенирировать штатное расписание, у сотрудников есть поля: имя, часы работы, стоимость часа, 
    создать ведомость, в которой будет список сотрудников, с подсчитанной зарплатой и общая сумма всех зарплат
 */