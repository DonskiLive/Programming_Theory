const now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getUTCHours());
console.log(now.getTimezoneOffset());
console.log(now.getTime());

now.setHours(40);
console.log(now);

//const start = new Date();
const start = Date.now();
for(let i=0; i<100000; i++){
    let some = i**3
}
//const end = new Date(); 
const end = Date.now();
console.log(`loop work time is: ${end-start} millisecond`)

const deadline = new Date('2021-12-31');
const daysLeft = (deadline - new Date());
console.log(daysLeft);

const days = Math.floor(daysLeft/(24*60*60*1000)),   //10 -> 10 * 24 * 60 * 60 * 1000
      hours = Math.floor((daysLeft/(60*60*1000))%24),   // 243
      minutes = Math.floor((daysLeft/(60 * 1000))%60),
      seconds = Math.floor((daysLeft/1000)%60)

console.log(days, hours, minutes, seconds)