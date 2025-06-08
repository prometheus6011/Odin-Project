document.addEventListener("DOMContentLoaded", () => {
  const screen = document.querySelector(".screen");
  const buttons = document.querySelectorAll("button");

  const nums_arr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero", "decimal"];
  const ops_arr = ["plus", "minus", "times", "div", "mod"]

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      screen.style.color = "white";
      screen.style.textAlign = "right";

      if (nums_arr.includes(button.id)) {
        screen.textContent += button.textContent;
      } else if (button.id === "ac") {
        screen.textContent = "";
      } else if (button.id === "del") {
        screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);
      } else if (ops_arr.includes(button.id)) {
        screen.textContent += button.textContent;
      } else {
        operate(screen.textContent);
      }
    });
  })

  function operate(calcStr) {
    if (!calcStr) return;

    const sanitized = calcStr
      .replace(/x/g, "*")
      .replace(/÷/g, "/")
      .replace(/mod/g, "%");

    const cleanExp = sanitized.replace(/[\+\-\*\/\%]$/, "");

    try {
      const result = Function(`"use strict"; return (${cleanExp});`)();
      screen.textContent = result;
    } catch (err) {
      console.error("Calculation error:", err);
      screen.textContent = "Error";
    }
  }
});