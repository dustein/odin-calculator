
function soma(num1, num2) {
  return num1 + num2;
}

function subtrai(num1, num2) {
  return num1 - num2;
}

function multiplica(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}


const teclas = Array.from(document.querySelectorAll('.teclas'));
console.log(teclas)

teclas.forEach(tecla => {
  tecla.addEventListener('click', (e) => {
    console.log("teste")
  })
})