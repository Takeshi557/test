function calc(num1, num2, op) {
  if (op === "+") return num1 + num2;
  if (op === "-") return num1 - num2;
  if (op === "*") return num1 * num2;
  if (op === "/") return num2 === 0 ? "エラー" : num1 / num2;
}

window.addEventListener("DOMContentLoaded", () => {
  const num1El = document.getElementById("num1");
  const num2El = document.getElementById("num2");
  const opEl = document.getElementById("operator");
  const btn = document.getElementById("calcBtn");
  const formulaEl = document.getElementById("formula");
  const resultEl = document.getElementById("result");

  const render = () => {
    const num1 = Number(num1El.value || 0);
    const num2 = Number(num2El.value || 0);
    const op = opEl.value;

    formulaEl.textContent = `${num1} ${op} ${num2}`;
    resultEl.textContent = calc(num1, num2, op);
  };

  btn.addEventListener("click", render);
  num1El.addEventListener("input", render);
  num2El.addEventListener("input", render);
  opEl.addEventListener("change", render);

  render();
});

