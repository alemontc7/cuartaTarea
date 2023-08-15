import sumar from "./sumador";
import multiplicar from "./mutltiplicador ";


const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

const firstm = document.querySelector("#primer-numero-m");
const secondm = document.querySelector("#segundo-numero-m");
const formm = document.querySelector("#multiplicar-form");
const divm = document.querySelector("#resultado-mult");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

formm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstm.value);
  const secondNumber = Number.parseInt(secondm.value);

  divm.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});


