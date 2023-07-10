
// Ahmed Elmoslmany 2023-01-16 13:34:54

const defaultResult = 0;
let currentResult = defaultResult + 10;

let logEntries = [];
/*
function add(num1, num2) {
  const result = num1 + num2;
  alert("Result is " + result);
}
add(1, 2);
add(5, 5);
*/

function ceateAndWriteOutput(operator, resultBeforeCalc, calcNum) {
  const calcDescription = `resultBeforeCalc: ${resultBeforeCalc} ${operator} ${calcNum}`;
  outputResult(currentResult, calcDescription);
}

function createToLog(_operation, _prevResult, _number, _result) {
  const logEntry = {
    operation: _operation,
    prevResult: _prevResult,
    number: _number,
    result: _result,
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}
/*
function add() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult = currentResult + parseInt(userInput.value);
  ceateAndWriteOutput(`+`, initialResult, enteredNumber);

  createToLog("Add", initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult = currentResult - parseInt(userInput.value);
  ceateAndWriteOutput(`-`, initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult = currentResult * parseInt(userInput.value);
  ceateAndWriteOutput(`*`, initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult = currentResult / parseInt(userInput.value);
  ceateAndWriteOutput(`/`, initialResult, enteredNumber);
}

*/
function calculate(operation){
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  let operator;
  if(operation === "ADD"){
    currentResult += parseInt(userInput.value);
    operator = '+';

  }else if(operation === "SUBTRACT"){
    currentResult -= parseInt(userInput.value);
    operator = '-';

  }else if(operation === "MULTIPLY"){
    currentResult *= parseInt(userInput.value);
    operator = '*';
  }else{
    currentResult /= parseInt(userInput.value);
    operator = '/';

  }
  ceateAndWriteOutput(operator, initialResult, enteredNumber);
  createToLog(operation, initialResult, enteredNumber, currentResult);

}
addBtn.addEventListener("click", calculate.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculate.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculate.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculate.bind(this, "DIVIDE"));
