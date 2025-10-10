const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      display.value = "0";
    } 
    else if (value === "CE") {
      display.value = "0";
    } 
    else if (value === "⌫") {
      display.value = display.value.slice(0, -1) || "0";
    } 
    else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } 
    else if (value === "1/x") {
      display.value = 1 / parseFloat(display.value);
    } 
    else if (value === "x²") {
      display.value = Math.pow(parseFloat(display.value), 2);
    } 
    else if (value === "√x") {
      display.value = Math.sqrt(parseFloat(display.value));
    } 
    else if (value === "+/-") {
      display.value = parseFloat(display.value) * -1;
    } 
    else {
      if (display.value === "0" || display.value === "Error") {
        display.value = value;
      } else {
        display.value += value;
      }
    }
  });
});
