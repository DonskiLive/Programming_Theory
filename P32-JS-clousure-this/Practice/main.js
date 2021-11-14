// #32
//Task01
/* 
'hjkld fghj fhjgldhgfjlhsg shfjg shgjslg' -> 4 (вернуть длину самого короткого слова в строке)
 */

/* function findShorts(str){
    const strings = str.split(' ');
    let minLength = strings[0].length;
    for (let index = 1; index < strings.length; index++) {
        if(strings[index].length < minLength)
        minLength = strings[index].length;       
    }
    return minLength;
} */

console.log(findShorts('hjfkds hfjd jdk shdjkg hsjshjssks shjks'));

function findShorts(str){

    return Math.min(...str.split(' ').map(str => str.length));   //[1,2,3,4,5] -> 1,2,3,4,5
}

const findShortsLength = (str) => str
        .split(' ')
        .sort((a,b) => b.length - a.length)
        .pop()
        .length;

   console.log(findShortsLength('hjfkds hfjd jdk shdjkg hsjshjssks shjks'));    

function findShortsWord(string){
    const words = string.split(' '); 
    return words.reduce((minWord, currentWord) => currentWord.length < minWord.length ? currentWord : minWord).length;
}

//Task02
/*
function isIsgram('abcd') -> true;  // 
function isIsogram('abbcd') -> false;
function isIsogrma('abdcA') -> false 

 */




function isIsogram(str){
    let i = 0;
    const strings = str.toLowerCase().split('').sort();
    while(strings[i] != strings[i+1] && i < strings.length - 1 ) i++;
    return i == strings.length -1 ? true : false
}

function isIsogram1(str){
    let count = {}  // {a: 1, b:1, c:1, d:1}  // {a: 1, b:2, c:1, d:1}
    const strings = str.toLowerCase().split('').sort();
    for(s of strings){
        count[s] ? count[s]++ : count[s] = 1;
        if(count[s] > 1) return false
    }
    return true
}

console.log(isIsogram('abcda'));

const isIsogram2 = (string) => string.toLowerCase().split('').every((s,index)=> string.indexOf(s) === index);

console.log(isIsogram2('abcd'));