
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


function operate(operator, num1, num2) {
  if(operator === 'soma') {
    return soma(num1, num2)
  } else if(operator === 'menos') {
    return subtrai(num1, num2)
  } else if(operator === 'multi') {
    return multiplica(num1, num2)
  } else if(operator === 'divide') {
    return(divide(num1, num2))
  }
}



const display = document.querySelector('#numero');

//capturar os numerais pressionados
let numero = ``;
const pressKey = document.querySelectorAll('.tecla');
pressKey.forEach(key => {
  key.addEventListener('click', () => {
    numero += key.dataset.key;

    display.innerText = numero;
    console.log(numero)    
  })
})

//capturar os opoeradores pressionados
const pressKeyOp = document.querySelectorAll('.tecla-op');
pressKeyOp.forEach(key => {
  key.addEventListener('click', () => {
    if(key.dataset.operator === 'ce') {
      display.innerText = '';
    }
    if(key.datase.operator === "sum") {
      soma(num1, num2)
    }
  })
})

console.log(operate("divide", 2, 4))