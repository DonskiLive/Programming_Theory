let a, b;

a = true, b = false

if(a){
    if(b){
    console.log('a and b both true');
    }
    else{console.log('b - false')}
}
    
console.log('a - false');

//=====================
const login = prompt('enter login, please');
let message;

if(login === 'admin'){
    const password = prompt('enter password');
    if(password === 'boss'){
        message = 'hello boss!';
    }else if(password === null || password === ''){
        message = 'cancelled';
    }else{
        message = 'wrong password';
    }
}else if(login === null || login === ''){
    message = 'cacelled';
}else{
    message = "i don't know you";
}

alert(message);