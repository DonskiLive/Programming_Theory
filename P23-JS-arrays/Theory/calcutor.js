let firstNumber, secondNumber, operation, repeat = true, agree;

while(repeat){

while (isNaN(firstNumber)){
    firstNumber = parseFloat(prompt('Enter first number'));
}

while(isNaN(secondNumber)){
    secondNumber = parseFloat(prompt('Enter second number'))
}

operation = prompt('select operation: + - * /');

switch(operation){
    case '+':{
        alert(`${firstNumber} ${operation} ${secondNumber} = ${firstNumber + secondNumber}`);
        repeat = false;
        break;
    }
    case '-':{
        alert(`${firstNumber} ${operation} ${secondNumber} = ${firstNumber - secondNumber}`);
        repeat = false;
        break;
    }
    case '*':{
        alert(`${firstNumber} ${operation} ${secondNumber} = ${firstNumber * secondNumber}`);
        repeat = false;
        break;
    }
    case '/':{
        if(secondNumber == 0){
            agree = prompt(`Error. Devision by zero is forbidden. Would you like enter another divider?\n Type 'y' if yes`);
            if(agree != 'y'){
                repeat = false;
                break;
            }else{
                secondNumber = NaN;
                break;              
            }
            
        }else{
        alert(`${firstNumber} ${operation} ${secondNumber} = ${firstNumber / secondNumber}`);
        repeat = false;
        break;}
    }
    default:{
        agree = prompt(`Error. This is not a valid opeartion. Would you like try again?\nType 'y' if yes`);
        if(agree != 'y'){
            repeat = false;
        }

    }
}
    agree = prompt(`Would you like count somebody more?\nType 'y' if yes`);
    if(agree == 'y'){
        repeat = true;
        firstNumber = NaN;
        secondNumber = NaN;
    }else{
        alert('See you later!')
    }
}