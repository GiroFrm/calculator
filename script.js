function add(a, b) {
    return a + b;
}

function subtract(a, b){
    return a - b;
} 

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, operator, b) {
    let result=0;
    switch(operator) {
        case '+':
            result = add(a,b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        default:
            console.log('ERROR');
    }
    return result;
}
let arrayValues = [];
let copyValues = [];


const display = document.querySelector(".display");
const btnNumber = document.querySelectorAll(".number");
const btnAC = document.getElementById("btn-ac");
const btnOperators = document.querySelectorAll(".operator");
const btnPlus = document.querySelector("#btn-plus");
const btnMinus = document.querySelector('#btn-minus');
const btnMul = document.querySelector('#btn-mul');
const btnEqual = document.querySelector('#btn-equal');
const btnDiv = document.querySelector('#btn-div');

      btnNumber.forEach(btn => btn.addEventListener("click", ()=>{
        let value =   btn.value;
        updateArrayValues(value);
        displayNumber(value);
       
      }))
      btnOperators.forEach(btn => btn.addEventListener("click", ()=>{
        handleOperator(btn.value);
        console.log(btn.value);
       
      }))
      btnAC.addEventListener("click", ()=>{
        clearDisplay();
      })

function displayNumber(){
   display.value = arrayValues.join("");
}

function updateArrayValues(number) {
    arrayValues.push(number);
}

function clearDisplay() {
    display.value= "";
    arrayValues = [];
    copyValues = [];
}

function handleOperator(operator) {
    if (arrayValues.length > 0) {
        copyValues.push(Number(arrayValues.join("")));
    }

    if (copyValues.length && typeof copyValues[copyValues.length - 1] !== 'number') {
        copyValues.pop();
    }

    if (copyValues.length < 3) {
        copyValues.push(operator);
    } else {
        const [first, currentOperator, second] = copyValues;
        const result = operate(first, currentOperator, second);
        copyValues = [result, operator];
        display.value = result;
    }

    arrayValues = [];
}