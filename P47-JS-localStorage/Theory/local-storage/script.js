localStorage.setItem('myKey', [1,2,3,4,5,6]);
console.log(localStorage.getItem('myKey'));
console.log(localStorage.getItem('key'));
localStorage.removeItem('myKey');
localStorage.clear();

const user = {
    name: 'Vasya',
    age:32,
    address:{
        city: 'Berlin',
        street:'Platz'
    },
    myNumbers: [1,2,4],
    sayHello: function(){
        console.log("hello!")
    }
}

const users = [user,user,user]

localStorage.setItem('user', JSON.stringify(user));
localStorage.setItem('users', JSON.stringify(users))

console.log(user);
console.log(JSON.stringify(user));

const user2 = JSON.parse(localStorage.getItem('user'));

console.log(user2)
console.log(JSON.parse(localStorage.getItem('users')));

/* const user1 = {...user};
console.log(user1);
user1.address.city = 'London';
console.log(user.address.city); */

let user1 = JSON.stringify(user);
user1 = JSON.parse(user1);
user1.address.city = 'London';

console.log(user.address.city, user1.address.city);
console.log(user)
console.log(user1)


