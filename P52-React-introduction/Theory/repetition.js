/* const obj = {
    number:5,
    sayNumber: function(){
        console.log(this);
        console.log(this.number)
    }
} */

/* function sayHello(){
    console.log('Hello');
    console.log(this)
}

sayHello() */

const obj = {
    number:5,
    sayNumber: function(){
        /* console.log(this);
        console.log(this.number) */
        say =()=>{
            console.log(this);
            console.log(this.number)
        }
        say();
    }
}

obj.sayNumber();

///////////////////////// rest operator

function doSomthing(a,b,...numbers){    //rest operator
    console.log(numbers);
    console.log(a + b)
}

doSomthing(1,2,3,4,5,6);
doSomthing(5,6,4);

////////////////////// spred operator
const arr =[1,24,4,51,6];    //const newArr = arr; -> две ссылки на один массив
const newArr = [...arr];     //spred operator               
const arr2 = [3,17,81,12];

const res = Math.max(6,...arr,101, ...arr2, 88);
console.log(res);


const user = {name:'Vasya', age:25};
const userNew = user;   // -> ссылка на один и тот же объект

const user1 = {...user, name: 'Kolya', isMarried:false};

//user1.name = 'Kolya';
console.log(user);
console.log(user1);

///////////////////////

const myUser ={
    name :'John',
    password: '12345',
    rights: 'user'
}

const admin = {
    password: 'root',
    rights: 'admin',
    age: 18
}

//const userAdmin = Object.assign({},myUser, admin)
const avatar = 'photo'
const userAdmin = {...myUser, ...admin, avatar}

console.log(userAdmin)
console.log(myUser)

/////////////

const x =25, y =10;

/* const coordinats = {
    x: x,
    y: y,
    caclc: function(){
        console.log(this.x * this.y)
    }
} */

const coordinats = { x, y, caclc(){console.log(this.x * this.y)}}

coordinats.caclc()


///////////////////Destructurisation

const client = {
    name: {
        first:'Jack',
        last:'Smith'
    },
    password:'12345',
    rights:'user'
}

const{name:{first, last}, password, rights} = client;

console.log(first, last)


/////////////////////

/* function prinData(client){
    console.log(`Client name: ${client.name}, password: ${client.password}, rights: ${client.rights}`)
}; */


function prinData({name = 'anonym', password = 'no data', rights = 'unkown'} = {}){
    console.log(`Client name: ${name}, password: ${password}, rights: ${rights}`)
};

function prinShortData({name, password}){
    console.log(`Client name: ${name}, password: ${password}`)
};


const newClient = {
    name: 'Ivan',
    password: '1233567',
    rights : 'user'
}

prinData();
prinShortData(newClient);

const numbers = [1,3,4,6,7,8,9];
const[a,,b, ...c] = numbers;
console.log(b)
console.log(c)

const numbers2 = [[5,6],[7,8]]
const [[,y],[z,t]] = numbers2;
console.log(y)

const id = 'user_5';
//const userId = id.split('_')[1];
const [,userId] = id.split('_');

console.log(userId);

const country = {
    name:'England',
    population: 200000000,
    gender:{
        male:['15%', '40%'],
        female:['16%', '29%']
    }
}

const {gender:{male:[, maleAdult]}} = country;

console.log(maleAdult)

const {gender:{female:[femaleUnder18, femaleAdult]}} = country

console.log(femaleUnder18)