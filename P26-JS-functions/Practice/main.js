
//Task02
/* написать функцию, которая корачивает строку (если слово длиннее, чем maxLength - обрезать до maxLength и добавит ... , если короче - вернуть изначальную строку)
    function stringCat(str, maxLength);

    stringCat('hello world!', 5) -> 'hello...'
    stringCat('hello', 5) -> 'hello'
 */

    function stringCat(str, maxLength){
        if(str.length > maxLength){
            return str.slice(0,maxLength) + '...';
        }
        return str;       
    }

    function catString(str, maxLength){
        return (str.length > maxLength) ? str.slice(0,maxLength) + '...':str;
    }


//Task03
/* 
    игра русско-английский словарь;
    двухмерный массив с парами слов (всего пять пар)
    спрашивать пользователя перевод английского слова из массива, если ответ правильный - выводить "Отлично!", если нет - правильный перевод слова
 */

const words =[                  //words[1][0]  -> eng index=0 ->ru index=1
    ['food', 'еда', 'Essen'],
    ['bike', 'велосипед', 'Fahrrad'],
    ['apple', 'яблоко', 'Apfel'],
    ['do', 'делать', 'machen'],
    ['mean', 'иметь в виду', 'meinen'],
];

const ru = 1;
const eng = 0;
const de = 2

checkUserTranslation();

function checkUserTranslation(){
    for(let i = 0; i<words.length; i++ ){
        const userTranslation = getUserTranslation(i);
        if(userTranslation === words[i][de]) alert('Correct!');
        else alert(`wrong, correct answer is ${words[i][de]}`);
    }
}

function getUserTranslation(index){
    return prompt(`how do you translate the word ${words[index][eng]}?`).toLowerCase();
}
