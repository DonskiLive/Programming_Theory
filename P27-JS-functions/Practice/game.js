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

const easyWords = [                  //words[1][0]  -> eng index=0 ->ru index=1
    ['food', 'еда', 'Essen'],
    ['bike', 'велосипед', 'Fahrrad'],
    /* ['apple', 'яблоко', 'Apfel'],
    ['do', 'делать', 'machen'],
    ['mean', 'иметь в виду', 'meinen'], */
],
    complexWords = [
        ['function', 'функция', 'Funktion'],
        ['array', 'массив', 'Array'],
        /* ['stream', 'поток'],
        ['resolve', 'решить'],
        ['calculate', 'посчитать'] */
    ],
    
    eng = 0,
    ru = 1,
    de = 2,

    levels = [easyWords, complexWords],
    languages = ['eng', 'ru', 'de'];

startGame(levels, languages);

function startGame(arrLevels, arrLangs){
    alert('Welcome to the word-memories game!');
    const langFrom = chooseLanguage(arrLangs, 'for the word');
    let langTo = chooseLanguage(arrLangs, 'on which you want to translate');
    while(langFrom == langTo){
        alert('Choose the correct language for the translation');
        langTo = chooseLanguage(arrLangs, 'on which you want to translate');
    }
    game(arrLevels, langFrom, langTo)
}

function game(gameLevels, langWord, langTranslate) {
    for (let i = 0; i < gameLevels.length; i++) {
        const words = gameLevels[i].map(item => item);  //gameLevels[i].slice();
        const errorCount = checkUserTranslation(words, langWord, langTranslate);
        const repeat = finaleMessage(errorCount);  // null , true, false
        if (!repeat) {
            let nextLevel;
            if(i!=gameLevels.length-1){
                nextLevel = confirm ('Next level?');
            }
            if (!nextLevel) {
                alert('See you next time');
                break;
            }
        } else {
            i--;
        }

    }
}

function checkUserTranslation(words, langWord, langTransalte) {
    let errorCount = 0;
    while (words.length) {
        const index = getRandomArrayIndex(words.length);
        const userTranslation = getUserTranslation(words, index, langWord);
        if(userTranslation == null){
            return null;
        }
        else if (userTranslation === words[index][langTransalte]) {
            alert('Correct!');
            words.splice(index, 1);
        } else {
            alert(`wrong, correct answer is ${words[index][langTransalte]}`);
            errorCount++;
        }
    }
    return errorCount;
}

function getUserTranslation(words, index, langWord) {
    return prompt(`how do you translate the word ${words[index][langWord]}?`);
}

function getRandomArrayIndex(range) {
    return Math.floor(Math.random() * range);
}

function finaleMessage(count) {
    if (count == 0) alert('Great job!');
    else{ 
        if(count)
        alert(`you were wrong ${count} times`);}
    return count == null ? null: confirm('One more time?');
}

function chooseLanguage(languages, message){
    let langChoice;
    do{langChoice = prompt(`Please choose the language ${message}.\nPlease type one option from the offered:${languages.toString()}`)}
    while(!languages.includes(langChoice));
    switch(langChoice){
        case 'eng': return eng  //0
        case 'ru': return ru
        case 'de': return de
    }
}