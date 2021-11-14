main();

function main (){
function makeCounter(){
    let count = 0;
    return function(){
        return count++
    }
}

let counter = makeCounter();
counter();
counter();

let number = counter();
console.log(number);
console.log(counter())
}


// Array Task
/* 
users = [{name: 'Vasya', age: 15, height: 180}, {}, {}]

создать новый массив юзеров старше 20 лет
создать массив юзеров ниже 150
добавить в существующий массив уникальные id для каждого юзера
вернуть юзера с самым длинным именем
вернуть массив -> ['Vasya, age: 15 years old, height: 180 cm', ...]
[Vasya Vasilev, Petya Petrov] -> [{firstName: 'Vasya', lastName:'Vasiliev'},{}] (2 способа)
написать функцию fillArr(5, 'hello') -> ['hello', hello',hello',hello',hello]
написать функцию changeString ('abcdef') -> 'aBcDeF'
написать функцию countItem(array, el) -> сколько раз элемент повторяется в массиве
функция clearArray([1,2,3, null, '', undefined, 5, NaN, 7]) ->[1,2,3,5,7]


 */

const users = [
    { name: 'Vasya', age: 15, height: 180 },
    { name: 'Petia', age: 20, height: 160 }, 
    { name: 'Vlada', age: 25, height: 149 }, 
    { name: 'Stepan', age: 16, height: 190 }, 
    { name: 'Boris', age: 45, height: 176 }, 
    { name: 'Masha', age: 32, height: 135 }];

const usersOldest20 = users.filter((user)=> user.age > 20);
const usersN = users.map((user)=> user.age> 20 ? {...user, statistic:'yes'}:{...user, statistic:'no'})
//console.log(usersN)

const usersSmall = users.filter(user=> user.height < 150);
//console.log(usersSmall)

users.map((user,index) => user.id = index +1)
console.log(users);

const user = users.reduce((user, user1)=> user.name.length > user1.name.length ? user : user1);
console.log(user);

const usersString = users.map(user =>`${user.name}, age: ${user.age} years old, height: ${user.height} cm`);

console.log(usersString);

const people = ['Vasya Ivanov', 'Kolya Petrov'];
//const peopleNew = people.map(p=>({firstName: p.split(' ')[0], lastName: p.split(' ')[1]}));
const peopleNew = people.map(p => p.split(' ')).map(p =>({firstName: p[0], lastName: p[1]}));
console.log(peopleNew);

function fillArray(num, item){
    const arr = new Array(num);
    return arr.fill(item)
}

console.log(fillArray(6, 23))

function changeString(str){
    //return str.toLowerCase().split('').map((el,index)=>index%2!==0 ? el.toUpperCase():el )
    return str.split('').map((el,index)=> (index%2) ? el.toUpperCase():el.toLowerCase() ).join('');
}

console.log(changeString('asGhgaJf'))

//[1,2,5,8,9,5,1] 5

function countEntries(array, item){
    return array.reduce((count,el)=> el === item ? count+1 : count, 0)
}

console.log(countEntries([1,2,5,8,9,5,1], 10))
console.log(countEntries(['one', 'a', 'a','c'], 'a'))

function countItem(arr, el) {
	return arr.join('').length - arr.join('').replaceAll(el, '').length
}
console.log(countItem(['Vasya Vasileev', 'Petya Peetrov'], 'e'))
console.log(countItem([234, 32, 56, 43, 21, 35, 27, 3, 76, 2, 567, 32, 32352], 2));
//[234, 32, 56, 43, 21] -> '2343264321' -> length
//'3436431' -> replaceAll 2

//функция clearArray([1,2,3, null, '', undefined, 5, NaN, 7]) ->[1,2,3,5,7];

function clearArray(arr){
     return arr.filter(el => el)
}

//console.log(clearArray([1,2,3, null, '', undefined, 5, NaN, 7]));
const array = [1,2,3, null, '', undefined, 5, NaN, 7];
const clearArr = clearArray(array);
console.log(clearArr)