
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
let guardaValor;
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
    if(key.dataset.operator === "soma") {
      guardaValor = Number(display.innerText);
      display.innerText += '+' ;
      console.log(operate("soma", guardaValor, 9))
    }
    if(key.dataset.operator === "menos") {
      guardaValor = Number(display.innerText);
      display.innerText += '-' ;
    }
    if(key.dataset.operator === "multi") {
      guardaValor = Number(display.innerText);
      display.innerText += 'x' ;
    }
    if(key.dataset.operator === "divide") {
      guardaValor = Number(display.innerText);
      display.innerText += '/' ;
      
    }
    
  })
})
console.log(operate("divide", guardaValor, 4))