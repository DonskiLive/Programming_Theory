const input = document.querySelector('#userAnswer'),
    checkBtn = document.querySelector('#button'),
    repeatBtn = document.querySelector('#repeatBtn'),
    MAX_TRY_COUNT = 5;

let tryCount = 0,
    guessNumber = parseInt(Math.random() * 101),
    isGuessed = false;

hide(repeatBtn);

function changeMessage(message) {
    document.querySelector('#message').innerHTML = message;
}

function hide(element) {
    element.style.display = 'none';
}

function show(element) {
    element.style.display = 'block';
}

function gameState(message) {
    hide(checkBtn);
    hide(input);
    show(repeatBtn);
    changeMessage(message);
}

function gameOver(isGuessed = false) {
    if (isGuessed) {
        gameState(`You win!!!`)
    } else if (tryCount == MAX_TRY_COUNT) {
        gameState(`You lost( <br> correct answer ${guessNumber}`)
    } else {
        gameState(`We'll play another time`);
    }
}

checkBtn.onclick = function () {
    console.log(guessNumber)
    const userAnswer = input.value;
    console.log(typeof userAnswer)
    if (userAnswer === 'q') {
        return gameOver(isGuessed);
    }
    if (userAnswer === '' || isNaN(userAnswer)) {
        changeMessage(`It looks like you entered not a number, <br> try again. You have ${MAX_TRY_COUNT - tryCount} more attempts`);
        input.value = '';
        return
    }
    tryCount++;
    if (userAnswer == guessNumber) {
        isGuessed = true;
        return gameOver(isGuessed);
    } else if (tryCount == MAX_TRY_COUNT) {
        return gameOver();
    } else {
        changeMessage(`The number is to ${userAnswer > guessNumber ? 'big' : 'small'}, <br> try again. You have ${MAX_TRY_COUNT - tryCount} more attempts`);
        input.value = '';
    }
}

repeatBtn.onclick = function () {
    guessNumber = parseInt(Math.random() * 101);
    tryCount = 0;
    isGuessed = false;
    input.value = '';
    hide(repeatBtn);
    show(input);
    show(checkBtn);
    changeMessage(`Guessed number is grater than 0, but less than 100 <br> To exit enter 'q'`)
}
