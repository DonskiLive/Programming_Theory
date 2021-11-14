//Task01 
//Make memory game with functions
let checkError = true;

startGame();

/* const firstAnswer = getUserAnswer(1);
checkAnswer(numbers[0], firstAnswer);

const secondAnswer = getUserAnswer(numbers.length);
checkAnswer(numbers[numbers.length - 1], secondAnswer);

const thirdAnswer = getUserAnswer(randomIndex + 1);
checkAnswer(numbers[randomIndex], thirdAnswer); */

function startGame() {
    let repeat = true;
    while(repeat){
    const numbers = fillArrayRandomNumbers(5, 100);  // index => 0, 1, 2, 3, 4
    const maxQuestions = 3;
    checkError = 'true';
    showMessage(numbers);
    for (let i = 0; i < maxQuestions; i++) {
        const randomIndex = getRandomRangeNumber(numbers.length);
        const userAnswer = getUserAnswer(randomIndex + 1);
        checkAnswer(numbers[randomIndex], userAnswer);
    }
    if (checkError) {
        alert('You have a great memory!')
    }
    repeat = confirm('one more time?')
 } 
}

function getRandomRangeNumber(range) {
    return parseInt(Math.random() * range);
}

function fillArrayRandomNumbers(length, range) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(getRandomRangeNumber(range));  // array[i] = getRandomRangeNumber(range)
    }
    return array;
}


function showMessage(array) {
    alert(`Remember numbers and orders\n${array}`);
}

function getUserAnswer(number) {
    return +prompt(`What was the ${number} number?`);
}

function checkAnswer(number, userAnswer) {
    if (userAnswer == number) {
        alert('You right!!!')
    } else {
        alert(`Wrong answer, right number is ${number}`);
        checkError = false;
    }
}



