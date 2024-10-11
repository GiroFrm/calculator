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

const display = document.querySelector(".display");
const btnNumber = document.querySelectorAll(".number");
const btnAC = document.getElementById("btn-ac");

      btnNumber.forEach(btn => btn.addEventListener("click", ()=>{
        let value =   btn.value;
        displayNumber(value);
      }))
      
      btnAC.addEventListener("click", ()=>{
        clearDisplay();
      })

   
function displayNumber(number){
   // display number to input display
   arrayValues.push(number);
   display.value = arrayValues.join("");
}

function clearDisplay() {
    display.value= "";
    arrayValues = [];
}

