/* let arr = new Array(4,'apple', 'melone');

console.log(arr)
arr.push(2);
console.log(arr); */

/* for(let i = 0; i < 4; i++){
    arr[i] = i;
} */

//arr[0] = 5;

//numbers.length = 5;

const numbers = [];   //33, 78, 91, 5, 18

for(let i = 0; i < 5; i++){
    numbers[i] = parseInt(Math.random() * 100);
    // let randomNumber = parseInt(Math.random() * 100);
    // numbers.push(randomNumber);
}

//console.log(numbers)

alert(`Remember numbers and orders\n${numbers}`);

let userAnswer = +prompt('What is first number?');
if(userAnswer == numbers[0]){
    alert('You right!!!')
}else{
    alert(`Wrong answer, right number is ${numbers[0]}`)
}

userAnswer = +prompt('What is last number?');

if(userAnswer == numbers[numbers.length-1]){
    alert('You right!!!')
}else{
    alert(`Wrong answer, right number is ${numbers[numbers.length-1]}`)
}

let randomIndex = parseInt(Math.random() * numbers.length);  //0 1 2 3 4

userAnswer = +prompt(`What was the ${randomIndex + 1} number?`);

if(userAnswer == numbers[randomIndex]){
    alert('You right!!!')
}else{
    alert(`Wrong answer, right number is ${numbers[randomIndex]}`)
}
