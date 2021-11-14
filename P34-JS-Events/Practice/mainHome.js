//Task01
/* 
сделать шесть кнопок и абзац с текстом. Три кнопки меняют размер шрифта в абзаце (15px, 25px, 35px). 
Оставшиеся три меняют цвет текста - на синий, красный зеленый. Изменение размера шрифта не изменяет цвет 
и наооборот - изменение цвета не влияет на размер
 */
    

//Task02
/* 
Сделать два input, для каждого инпута своя кнопка. Под инпутами текст. В одном инпуте можно задавть размер шрифта, 
при нажатии на кнопку шрифта текста становится того размера, который ввели. Второй инпут для цвета, соответсвенно 
при нажатии на кнопку цвет текста становится таким, который задали в инпуте.
 */

//Task03*
/* 
На странице сделать квадрат, изначально черного цвета, при нажатии на квадрат, его цвет менется на другой рандомный цвет, 
а в самом квадрате появляется порядковый номер сделанного клика

 */
const btnSize15 = document.querySelector(".btn15px"),
    btnSize25 = document.querySelector(".btn25px"),
    btnSize35 = document.querySelector(".btn35px"),
    btnColorRed = document.querySelector(".btn-red"),
    btnColorGreen = document.querySelector(".btn-green"),
    btnColorBlue = document.querySelector(".btn-blue"),
    firstText = document.querySelector(".first-text");

    
function changeSize (element, size) {
    element.style.fontSize=`${size}px`;
}

function changeColor(element, color) {
    element.style.color = `${color}`;
}

btnSize15.onclick = () => {
    changeSize(firstText, 15)
    /* firstText.style.cssText = "font-size: 15px" */
};

btnSize25.onclick = () => {
    changeSize(firstText, 25)
};

btnSize35.onclick = () => {
    changeSize(firstText, 35)
};
/////////////////////////////////////////////////
btnColorRed.onclick = ()=> {
    changeColor(firstText, "red");
}

btnColorGreen.onclick = () => {
    changeColor(firstText, "green");
}

btnColorBlue.onclick = ()=> {
    changeColor(firstText, "blue");
}
///////////////////////////////
//Task02
/* 
Сделать два input, для каждого инпута своя кнопка. Под инпутами текст. В одном инпуте можно задавть размер шрифта, 
при нажатии на кнопку шрифта текста становится того размера, который ввели. Второй инпут для цвета, соответсвенно 
при нажатии на кнопку цвет текста становится таким, который задали в инпуте.
 */
const inputSize = document.querySelector("#text-size-set"),
    inputColor = document.querySelector("#color-size-set"),
    btnSize = document.querySelector(".size-set"),
    btnColor = document.querySelector(".color-set"),
    secondText = document.querySelector(".second-text");

/* btnSize.onclick = () => {
    const sizeValue = inputSize.value;
    secondText.style.fontSize = `${sizeValue}px`;
    inputSize.value = "";
    }

    btnColor.onclick = () => {
    const colorValue = inputColor.value;
    secondText.style.color = `${colorValue}`;
    inputColor.value = "";
    }
 */
function changeText() {
    secondText.style = `font-size: ${inputSize.value}px; color: ${inputColor.value}`;
    }

btnSize.onclick = () => {
    changeText();
    inputSize.value = "";
} 

btnColor.onclick = () => {
    changeText();
    inputColor.value = "";
} 

//Task03*
/* 
На странице сделать квадрат, изначально черного цвета, при нажатии на квадрат, его цвет менется на другой рандомный цвет, 
а в самом квадрате появляется порядковый номер сделанного клика

 */
const quadrat = document.querySelector(".quadrat");

/* let counter = 0;

quadrat.onclick = () => {
    quadrat.style.backgroundColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
    counter++;
    quadrat.querySelector(".output").textContent = counter;
} */

function randomNum() {
    return parseInt(Math.random()*256)
}

function clickHandler() {
    let counter = 0;
    return () => {
        quadrat.style.backgroundColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
        counter++;
        quadrat.querySelector(".output").textContent = counter;
    }
}

quadrat.onclick = clickHandler();



