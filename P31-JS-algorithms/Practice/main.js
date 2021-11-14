//console.log(numbers)

//Task01
// function getShortNames(arrayNames)
// ['Kolya', 'Anna', 'Misha', 'Mark', 'Innokentyi'] -> ['Anna', 'Mark']  (lenght==4)    
// function getShortNames(namesArray, nameLength);

function getArrayNamesLengthFour(arrays){
    /*  let newNames = [];
     for(let i = 0; i<arrays.length; i++){
         if(arrays[i].length == 4){
             newNames.push(arrays[i]);
         }
     }
  */
     return arrays.filter(str => str.length ==4);
 }
 
 console.log(getArrayNamesLengthFour(names));

 function getArrayNames(arrays, nameLength){
    /*  let newNames = [];
     for(let i = 0; i<arrays.length; i++){
         if(arrays[i].length == nameLength){
             newNames.push(arrays[i]);
         }
     }
  */
     return arrays.filter(str => str.length == nameLength);
 }
 
 console.log(getArrayNames(names, 5));


//Task02
/* 
function getDivisors(12) -> [2,3,4,6]
function getDivisors(15) -> [3,5]
function getDivisors(13) -> '13 is primy'
 */

function getDivisors(number){
    let divisors = [];
    for(let i = 2; i <=Math.floor( number/2); i++){
        if(number % i ==0){      
            divisors.push(i);
        }
    }
    return (divisors.length == 0) ? `${number} is prime` : divisors;
}

console.log(getDivisors(24));


//Task03*
/* 
function sumDigitalNumber(10002345671) -> 29 -> 11 -> 2  (recursion)
 */

/* function sumDigitalNumber(num){
    if(num/10 < 1){
        return num;
    }
    return sumDigitalNumber(Math.floor(num/10) + num%10);
}
 */
/* function sumDigitalNumber(num){
    
    return (num/10 < 1)? num : sumDigitalNumber(Math.floor(num/10) + num%10);
} */ 

function sumDigitalNumber(num){
    return num < 10 ? num : sumDigitalNumber(num.toString().split('').reduce((sum, number) => sum + parseInt(number), 0));
}


// function sumTwoArrays(array1, array1) -> вернуть общую сумму всех чисел из двух массивов