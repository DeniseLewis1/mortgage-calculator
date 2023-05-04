/*
* https://frontendeval.com/questions/mortgage-calculator
*
* Create a calculator that works out your monthly mortgage payment
*/

const principal = document.querySelector(".principal");
const rate = document.querySelector(".rate");
const years = document.querySelector(".years");
const button = document.querySelector(".submit");
const output = document.querySelector(".output");

function calculatePayment() {
  const p = Number(principal.value);
  const r = Number(rate.value) / 100 / 12;
  const n = Number(years.value) * 12;

  const monthlyPayment = Math.floor(p * r * (1 + r) ** n / ((1 + r) ** n - 1)).toLocaleString("en-US");

  output.innerHTML = `Your monthly mortgage payment will be <span>$${monthlyPayment}</span>.`;

}

button.addEventListener("click", calculatePayment);