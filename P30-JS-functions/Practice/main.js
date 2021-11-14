// Task01 
/* n = 10
function recusionOutput(n) -> '12345678910'
 */

/* function recursionOutput(num){
    if(num==1){
        return '1 ';
    }else{
        return recursionOutput(num-1) + `${num} `;
    }
} */

function recursionOutput(num){                                     
    return (num==1)? '1 ': recursionOutput(num-1) + `${num} `;   
}     

//Task02
/* 'шалаш' 'abba' 'потоп' 'а роза упала на лапу азора' 
function checkPolindrom('nagan') -> true;
        checkPolindrom('grhjs') -> false;
 */

function checkPalindrom(str) {
    let arr = str.replaceAll(' ', '').split('');
    for (let i = 0, j = arr.length - 1; i < j;) {
        if (arr[i++] == arr[j--]) continue
        return false
    }
    return true
}

const checkPalindrome2 = function (str) {
    let res = str.split(' ').join('');
    if(res.length >2) return true;
    if(res[0] === res.slice(-1)) return checkPalindrome(res.slice(1,-1))
    return false;
}

/* function checkPalindrom(string){
     string = string.toLowerCase().replace(/ /g, '');   //string.toLowerCase().replaceAll(' ', '')
    for(let i = 0; i<string.length/2; i++){
        if(string.charAt(i)!=string.charAt(string.length - 1 -i)) return false;
    }
    return true;
} */

/* function checkPalindrom(string){
    string = string.toLowerCase().replace(/ /g, '');   //string.toLowerCase().replaceAll(' ', '')
    return string === string.split('').reverse().join('');  
} */



//Task03
/* метод, который получает массив вида users возвращает массив вида changedUsers
    const users = [
        {firstName: 'Vasya', lastName:'Pupkin', id:1},
        {firstName: 'Vas', lastName:'Pupk', id:2},
        {firstName: 'Sasha', lastName:'Vasin', id:3}
    ]

    changedUsers -> [
        {fullName: 'Vasya Pupkin', id:1},
        {fullName: 'Vas Pupk', id:2},
        {fullName: 'Sasha Vasin', id:3}
    ]
 */

    /* function changeUserArray(users){
    let changedUsersArray =[];
    for (user of users){
        const{firstName , lastName, id} = user;   // firstName = 'Vasya, lastName = 'Ivanov', id = 1;
        changedUsersArray.push({fullName: `${firstName} ${lastName}`, id});   //id: id;
    }
    return changedUsersArray;
} */

function changeUserArray(users){
    return users.map(user => ({fullName: `${user.firstName} ${user.lastName}`, id: user.id }));
}


//const newUsers = changeUserArray(users);
//console.log(newUsers);

/* 
сгенерировать штатное расписание, у сотрудников есть поля: имя, часы работы и ставка, стоимость часа.
создать ведомость, в которой будет список сотрудников, с подсчитанной зарплатой и общая сумма всех зарплат.
*/

start()

function start(){
    const company = createCompany('ABC', 10);
    let doc = createDoc('Salary-072020', company.team);

    console.log(company);
    console.log(doc);
}

function createCompany(name, cty){
    return{
        name: name,
        countity: cty,
        team: createTeam(cty)
    }
}

function createTeam(countity){
    const team = [];
    for (let i = 0; i < countity; i++) {
        team.push({
            name: `employee_${i + 1}`,
            hours: Math.floor(Math.random() * 120),
            rate: 30
        })
    }
    return team;
}

function createDoc(title, employess){
    const listSalaries = createListSalaries(employess);
    return{
        title: title,
        list_salaries: listSalaries,
        total: getTotal(listSalaries)
    }
}

function createListSalaries(employess){
    const list = [];
    for (let i = 0; i < employess.length; i++) {
        list.push({
            name: employess[i].name,
            salary: employess[i].hours * employess[i].rate,
        })
    }
    return list
}

function getTotal(list){
    return list.reduce((sum, employee) => sum += employee.salary, 0)
}

/* const company = {
    name: 'ABC',
    team: [],
}

//{name: 'Vasya', hours: 120, rate: 30}

employess.push({ name: 'Vasya', hours: 120, rate: 30 })
for (let i = 0; i < 9; i++) {
    employess.push({
        name: `employee_${i + 1}`,
        hours: Math.floor(Math.random() * 120),
        rate: 30
    })
}

console.log(employess);

const doc = {
    name: 'DOC',
    list: [],
    total: 0
}

for (let i = 0; i < employess.length; i++) {
    const sum = employess[i].hours * employess[i].rate;
    doc.list.push({
        name: employess[i].name,
        salary: sum,
    })
    doc.total += sum
}
console.log(doc.list)
console.log(doc.total) */
