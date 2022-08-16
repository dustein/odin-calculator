
// function soma(num1, num2) {
//   return num1 + num2;
// }

// function subtrai(num1, num2) {
//   return num1 - num2;
// }

// function multiplica(num1, num2) {
//   return num1 * num2;
// }

// function divide(num1, num2) {
//   return num1 / num2;
// }
const display = document.querySelector('#numero');
const pressKey = document.querySelectorAll('.tecla');
pressKey.forEach(tecla => {
  tecla.addEventListener('click', () => {
    console.log(tecla.innerHTML)
    display.innerText += tecla.innerText;
  })
})
