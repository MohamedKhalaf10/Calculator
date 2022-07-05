/* Start Global Variables */

// Select Calculator
let calculator = document.querySelector(".calculator");

// Select Calculation
let calculation = document.querySelector(".calculation");

// Select Result
let result = document.querySelector(".result");

// Define Calaculation Number
let calcNumber = 0;

// Define Sign Value
let signValue = "";

/* End Global Variables */
/* Start Building App */
calculator.addEventListener("click", (e) => {
  if (e.target.classList.contains("n")) {
    displayNumber(e.target);
  } else if (e.target.classList.contains("del")) {
    deleteCharacter();
  } else if (e.target.classList.contains("ac")) {
    // Restart Calculations
    result.innerHTML = "0";
    calculation.innerHTML = "";
  } else if (e.target.classList.contains("sign")) {
    sign(e.target);
  } else if (e.target.classList.contains("equal")) {
    equal();
  }
});

/* End Building App */
/* Start Function */

// Display Number
function displayNumber(number) {
  if (result.innerHTML === "0") {
    if (number.innerHTML === "0") {
      result.innerHTML = "0";
    } else if (number.innerHTML === ".") {
      result.innerHTML += number.innerHTML;
    } else {
      result.innerHTML = "";
      result.innerHTML += number.innerHTML;
    }
  } else {
    if (number.innerHTML === ".") {
      // Prevent Typing More Than One Dot
      let arr = [...result.innerHTML];
      arr.filter((n) => {
        return n === ".";
      });
      if (arr.length <= 1) {
        result.innerHTML += number.innerHTML;
      }
    } else {
      result.innerHTML += number.innerHTML;
    }
  }
}

// Delete Character
function deleteCharacter() {
  if (result.innerHTML !== "0") {
    let arr = [...result.innerHTML];
    arr.pop();
    if (arr.length === 0) {
      result.innerHTML = "0";
    } else {
      result.innerHTML = arr.join("");
    }
  }
}

// Do Calculations
function sign(sign) {
  calculate();
  calcNumber = Number(result.innerHTML);
  signValue = sign.innerHTML;
  calculation.innerHTML = `${result.innerHTML} ${sign.innerHTML}`;
  result.innerHTML = "0";
}

function equal() {
  calculation.innerHTML += ` ${result.innerHTML} =`;
  calculate();
  signValue = "";
}

function calculate() {
  if (signValue === "+") {
    result.innerHTML = calcNumber + Number(result.innerHTML);
  } else if (signValue === "-") {
    result.innerHTML = calcNumber - Number(result.innerHTML);
  } else if (signValue === "*") {
    result.innerHTML = calcNumber * Number(result.innerHTML);
  } else if (signValue === "÷") {
    result.innerHTML = calcNumber / Number(result.innerHTML);
  }
}
/* End Function */
