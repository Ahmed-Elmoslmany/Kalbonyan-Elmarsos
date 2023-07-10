const task3Element = document.getElementById("task-3");

function firstFunction() {
  alert("Hello it's my first function");
}

function secondFunction(name) {
  alert("Hello " + name);
}

function brandNew(fName, sName, lName) {
  const fullName = fName + sName + lName;
  return fullName;
}

firstFunction();
secondFunction("Ahmed");

task3Element.addEventListener("click", firstFunction);
const fullName = brandNew("Ahmed ", "Sami ", "Elmoslmany");
alert(fullName);
