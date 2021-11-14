/* Task01
    игра русско-английский словарь;
    // Переписать метод checkUserTranslation, он должен показывать слова не по порядку 
    // и если пользователь ввел правильный перевод - удалять слово из массива
    // Когда слов в массиве не останется, если пользователь не сделал ни одной ошибки показывать сообщение - "Great job!"
    // Если ошибки были - показывать число сделанных ошибок, спросить не хотите повторить?
    // Спросить пользователя, хочет ли он перейти на следующий уровень?
    //Реализовать следующий уровень

    //Со звездочкой - реализовать возможность выбора языка
 */

//Task02
//1.Метод изменить строку  function changeString(string){}
// 'background-color' -> backgroundColor;
// 'list-style-image' -> listStyleImage;   

/* function changeString(string){
    const words = string.split('-');
    for(let i = 1; i < words.length; i++){
        words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1);
    }
    return words.join('');
} */

function changeString(string){
    return string.split('-').map((word, index) => index ? word[0].toUpperCase() + word.slice(1) : word).join('');
}

console.log(changeString('background-color'));
console.log(changeString('list-style-image-array'));



//2. Метод найти средннее арифметическое значение массива чисел

function averageArray(array){
    let sum = 0;
    for(let i = 0 ; i < array.length; i++){
        sum += array[i];
    }
    /* for(let num of array ){
        sum += num;
    } */
    return sum/array.length
}

function averageArray2(array){
    return array.reduce((sum, current) => (sum + current))/array.length
}

const numbers = [1,4,7,10,12];
console.log(averageArray2(numbers));

//3. Factorial (5! -> 5 * 4 * 3 * 2 * 1) 
function factorial(n){
    let result = 1;
    if(n==0 || n==1) return result;
    for(let i = 2; i <= n; i++ ){
        result *=i
    }
    return result;
}

console.log(factorial(4));  // 1*2*3*4



//Task03

/*
1. Посчитать средний возраст users
2. Найти самого молодого
3. Найти самого старшего
4. Создать массив из юзеров, которые не живут в Италии
5. Создать массив из юзеров, которые старше 16, но младше 35
6. Создать отдельный массив из имен юзеров
7. Создать массив из юзеров, чьи имена начинаются на "М" 
 */

 const users =[
    {name: 'Anna', address:{city:'Berlin', country:'Germany'}, age: 32},
    {name: 'Vasya', address:{city:'Tokio', country:'Japan'}, age: 28},
    {name: 'Mariya', address:{city:'London', country:'England'}, age: 15},
    {name: 'Mark', address:{city:'Rom', country:'Italy'}, age: 46},
    {name: 'Sofi', address:{city:'Verona', country:'Italy'}, age: 38},
    {name: 'Sergio', address:{city:'Barcelona', country:'Spain'}, age: 18}
]
//1
console.log((users.reduce((sumAge, user)=> sumAge + user.age, 0)/users.length).toFixed(0));

console.log((users.map(user => user.age).reduce((sumAge, userAge)=> sumAge + userAge)/users.length).toFixed(0));

//2
function getYoungest(arrayUsers){
    let joungest = arrayUsers[0];

    /* for (let i = 1; i < arrayUsers.length; i++){
        if(joungest.age > arrayUsers[i].age){ 
            joungest = arrayUsers[i];
        }
    } */
    /* for(let user of arrayUsers){
        if(joungest.age > user.age){
            joungest = user;
        }
    } */
    arrayUsers.forEach(user =>{
        if(joungest.age > user.age){
            joungest = user;
        }
    })

    return joungest;
}

//console.log(getYoungest(users));

const youngestUser = users.reduce((youngest, user)=> youngest.age < user.age ? youngest : user);

/* ()=>{
    console.log(1);
    console.log(1);
    console.log(1);
    return 5;
} */

/* ()=>{
    return 5;
} */

// ()=> 5;

console.log(youngestUser)

//3
const oldestUser = users.reduce((oldest, user) => oldest.age > user.age ? oldest : user);

console.log(oldestUser);

//4
const notItalienerUser = users.filter(user => user.address.country != 'Italy');

//console.log(notItalienerUser);

//5
const middleAgeUser = users.filter(user => user.age > 16 && user.age < 35);
console.log('-------------------------')
//console.log(middleAgeUser);

//6
const names = users.map(user => user.name);

//console.log(names);

function getProperty(arrayUsers, propertyName){
    return arrayUsers.map(user => user[propertyName]);
}

//console.log(getProperty(users, 'address'));

//7

const usersStartWithM = users.filter(user => user.name.toLowerCase().startsWith('ma'));
console.log(usersStartWithM);