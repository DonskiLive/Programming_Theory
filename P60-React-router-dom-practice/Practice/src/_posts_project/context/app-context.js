import React from 'react';

export const AppContext = React.createContext();

function mult(x){
    return (y) =>{
        return x * y
    }
}

const multiplay2 = mult(2);  // (y)=>{2*y}
console.log(multiplay2(4))
console.log(multiplay2(6))

const multyplay3 = mult(3)  // (y)=>{y * 3}


function greaterThan(n){
    //return (m)=> m > n
    return function(m){
        return m > n
    }
}

const greaterThan10 = greaterThan(10);
console.log(greaterThan10(12))
console.log(greaterThan10(8))



