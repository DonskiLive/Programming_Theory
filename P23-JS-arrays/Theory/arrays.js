//let arr = new Array();

        //   [0]      [1] [2] [3] [4]           [5]
let arr = ['plum.png', 1, {}, [],'orange.png', 'apple.jpg'];  // arr.length = 6

console.log(arr[0]);
console.log(arr.length);

/* arr[99] = 0;
console.log(arr.length)
console.log(arr) */

arr[arr.length] = 'banan.jpg';  //  arr[6] = 'banan.jpg';
console.log(arr)

arr.length = arr.length-1;
console.log(arr);

/* arr.length = 0;
console.log(arr); */

// [2] [3] [4] []
// arr[0]='banan.jpg'

for(let i = arr.length; i > 0; i-- ){
    arr[i] = arr[i-1];
}

arr[0] = 'banan.jpg';
console.log(arr);

for( let i = 0; i<arr.length; i++){
    arr[i]= arr[i+1];
}

arr.length = arr.length - 1;
console.log(arr);

arr.push('banan.jpg', 23, 'melon.jpg');
console.log(arr);

let melon = arr.pop();
console.log(arr);
console.log(melon);

arr.unshift(25, 30);
console.log(arr);

let number = arr.shift();
console.log(arr, number);

let numbers = [1,2,3,4,5];   //numbers[0] = 1

for(let i = 0; i < numbers.length; i++){
    if(i != 0){
    console.log(numbers[i] *2);
    }
}

console.log('----------------')

for(let number of numbers){
    if(number%2==0){
        console.log(number + 5);
    }    
}

let obj = {
    name: 'Vasya',
    age:23
}

console.log(String(numbers));
console.log(String(obj));

let res = '';

//1 2 3 4 5 6 7 8 9 10
//2 4 6 8 10 12 14 16 18 20


for(let i = 1; i <=10; i++ ){
    for( let j = 1; j<=10; j++){
        res += (j*i + '\t')   // 1 2 3 4 5 6 7 8 9 10
        //arr[i][j]
    }
    console.log(res);
    res = ''
}

let matrix = [
    [1,2,3],   //0
    [4,5,6],  //1
    [7,8,9]   //2
]

console.log(matrix[1][1]);
//                     [*1]                 [*2]
let pifagorTable = [[1,2,3,4,5,6,7,8,9,10],[2,4,6,8,10,12,14,16,18,20],[],[],[],[],[],[],[],[]]

//pifagorTable[4][4]  -> 25  -> 5*5


//make the Pifagor-table for the browser
document.write('<h1 style = "text-align:center">Multiply table</h1>');
document.write('<table border="1" cellspacing = "0" cellpading = "5" align = "center">');
 for( let i = 1; i<=5; i++){
     document.write('<tr>');
        for(let j =1; j<=5; j++){
            document.write('<td width = "100px"> Hello!</td>')
        }
        document.write('</tr>')
 }
 document.write('</table>')

