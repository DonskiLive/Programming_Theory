const salaries = {
    John: 1900,
    Anna: 2100,
    Piotr: 2500,
    Kate: 2000
}

/* John: {
    age: 30,
    address:{
        city:'Berlin',
        street:'Potsdammer Platz',
        houseNumber: 35
    } */

let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}
console.log(`All salaries is: ${sum}`)

console.log(`John has salary: ${salaries.John}, Kate has salary: ${salaries.Kate}`)

salaries.Maria = 3000;
salaries.Mark = 2900;

let countOfKeys = 0;

for(let key in salaries){
    countOfKeys++;
}
console.log(countOfKeys);

let count = 0;
for(let key in salaries){
    count++; 
    /* if(count == 1 || count == countOfKeys){
        console.log(`${key} has salary: ${salaries[key]}`)
    } */

    if(count!=1 && count != countOfKeys) continue;
    console.log(`${key} has salary: ${salaries[key]}`)
}

let maxSalary = 0;
let keyName = '';

for(let key in salaries){
    if(salaries[key] > maxSalary){
        maxSalary = salaries[key];
        keyName = key
    }
}
console.log(`Maximal salary has ${keyName}, ${maxSalary}`);

for(let key in salaries){
   
    console.log(`${key} has salary: ${salaries[key]}`)

}


// calcute and print summe of all salaries 
//'John has salary: 2000, Kate has salary: 1900'
// add two employee in object with 
//find employee with maximal salery ('Max salary has Name, 2500')
