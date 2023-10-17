/*console.log("hola koders")

let numero1 = 10;
let numero2 = 5;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;

console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);*/

function esParOImpar(numero) {
    if (numero % 2 === 0) {
      return "Par";
    } else {
      return "Impar";
    }
  }
  
  // Ejemplo de uso:
  let numero = 5;
  let resultado = esParOImpar(numero);
  console.log(`El número ${numero} es ${resultado}.`);
  