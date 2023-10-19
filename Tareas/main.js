function palabrasNuevas(letra) {
    let palabraNon = '';
    let palabraPar = '';
  
    for (let i = 0; i < letra.length; i++) {
      if (i % 2 === 0) {
        palabraPar += letra[i];
      } else {
        palabraNon += letra[i];
      }
    }
  
    return [palabraNon, palabraPar];
}
let palabraOriginal = "onomatopeya";
let [palabraNon, palabraPar] = palabrasNuevas(palabraOriginal); 
/*devuelve un array con dos elementos, 
donde el primer elemento es la palabra con las letras en posiciones non y el segundo elemento es la palabra 
con las letras en posiciones par.*/
  
console.log("Palabra con letras en posición non: " + palabraNon);
console.log("Palabra con letras en posición par: " + palabraPar);


/*Ejercicios*/
function caracteresNombre(texto, numero) {
    numero > texto.length ? "Error: El número excede la cantidad de caracteres del texto." : forFunction(texto, numero)
}

function forFunction(texto, numero){
    let subcadena = "";
    for (let i = 0; i <= numero; i++) {
    subcadena += texto[i];
    }
    console.log(subcadena);
}

caracteresNombre("israel", 3);

/*Ejercicios 2*/  
function contarLongitudes(texto) {
    let palabras = texto.split(' ');  // Divide el texto en palabras
  
    let pares = 0;
    let nones = 0;
  
    palabras.forEach(palabra => {
      const longitud = palabra.length;
      if (longitud % 2 === 0) {
        pares++;
      } else {
        nones++;
      }
    });
  
    return { pares, nones };
  }
  
  let texto = "La mejor forma de predecir el futuro es creándolo";
  let resultado = contarLongitudes(texto);
  
  console.log("-pares:", resultado.pares);
  console.log("-nones:", resultado.nones);
  