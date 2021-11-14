/* Task01
   написать метод, который на вход получает массив целых чисел, которые могут повторятся, а возвращает новый массив без повторяющихся чисел
   [2,5,7,9,7,2] -> [2,5,7,9]
   [2,0,0,1,1,2] -> [2,0,1]
 */

/* function uniqNumbers(numbers){
    const uniqNumbers =[];
    for(let number of numbers){
        if(!uniqNumbers.includes(number)){
             uniqNumbers.push(number)}
    }
    return uniqNumbers;
} */

function uniqNumbers(numbers){
  const uniqNumbers =[];
  numbers.forEach(num => uniqNumbers.includes(num) ? uniqNumbers : uniqNumbers.push(num));
  return uniqNumbers;
}


const array = [2,0,0,1,1,2];
const uniqArray =array.filter((item,index) => index === array.indexOf(item));
console.log(uniqArray);


const numbers = [2,5,7,9,7,2,7];
console.log(uniqNumbers(numbers))

//Task02
/* 
написать метод, который на вход получает массив целых чисел, сравнивает первый и последний элемент этого массива и возвращает новый массив, в котором все элементы старого массива заменены на большее значение.
[1,5,6,7,2] -> [2,2,2,2,2];
[7,3,8,4] -> [7,7,7,7]
*/

function replaceValue(numbers){
  const max = numbers[0] > numbers[numbers.length-1] ? numbers[0] : numbers[numbers.length -1];
  return numbers.map(() => max)
}

console.log(replaceValue(numbers))



//Task03*
/* 
В игру "запомни слова" добавить возможность выйти из игры на этапе выбора языка
 */

