


//Task02
/* 
function powerNumber(3,3) -> 27
powerNumber(5,3) -> 125
 */

const power = (a,b) => a ** b;
console.log(power(5,3));

function powerNumber(number, power){
    let result = 1;
    for(let i = 0; i < power; i++){
        result *= number;
    }
    return result;
}

console.log(powerNumber(5,3));

//Task03
/* 
const numbers = [2,4,6,10,12];
function sumNumbers(numbers) -> 34;
 */

let numbers = [2,4,6,10,12];

/* function sumArrayNumbers(array){
    let sum = 0;
    for(let num of array){
        sum +=num;
    }
    return sum;
} */

function sumArrayNumbers(array){
    let sum = 0;
    for(let num in array){
        sum += array[num];
    }
    return sum;
}

console.log(sumArrayNumbers(numbers));

//Task04*
/* 
const numbers = [1,2,3,4,5];
function reversArray(numbers) -> [5,4,3,2,1]
 */

//[1][2][3][4][5][6]  [6][5][4][3][2][1]

numbers = [1,2,3,4,5,6];

function reverseArray(array){
    for (let i = 0; i < array.length/2; i++) {
        const temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;      
    }
}

console.log(numbers);
reverseArray(numbers);
console.log(numbers);



function reverse(array){
    let reversArray = [];
    for(let i = array.length - 1; i >=0; i--){
        reversArray.push(array[i])
    }
    return reversArray;
}

const newArray = reverse(numbers);
console.log(newArray);
