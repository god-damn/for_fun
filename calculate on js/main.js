let a = "";
let b = "";
let sign = "";
let finish = false;

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const action = ["+", "-", "*", "/"];

const screenOutput = document.querySelector("#calcScreen");
const btnClearAll = document.querySelector("#clearBtn");
const calcBtns = document.querySelector(".calc__buttons");

function clearAll() {
  a = "";
  b = "";
  sign = "";
  screenOutput.textContent = 0;
}

function playSound() {
  const soundEqual = document.querySelector("#soundEqual");
  soundEqual.volume = 0.3;
  soundEqual.play();
}

calcBtns.onclick = (event) => {
  if (!event.target.classList.contains("btn")) return;
  if (event.target.classList.contains("clear")) {
    btnClearAll.onclick = clearAll();
    return;
  }

  screenOutput.textContent = "";

  const selectBtn = event.target.textContent;

  if (digits.includes(selectBtn)) {
    if (b === "" && sign === "") {
      a += selectBtn;
      screenOutput.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = selectBtn;
      finish = false;
      screenOutput.textContent = b;
    } else {
      b += selectBtn;
      screenOutput.textContent = b;
    }
  }

  if (action.includes(selectBtn)) {
    sign = selectBtn;
    screenOutput.textContent = sign;
  }

  if (selectBtn === "=") {
    document.getElementById("equal").onclick = playSound;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = +a - +b;
        break;
      case "*":
        a = +a * +b;
        break;
      case "/":
        a = +a / +b;
        break;
    }
    finish = true;
    screenOutput.textContent = a;
  }
};
