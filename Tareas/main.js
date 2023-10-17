function palabrasNuevas(palabra) {
    let palabraNon = '';
    let palabraPar = '';
  
    for (let i = 0; i < palabra.length; i++) {
      if (i % 2 === 0) {
        palabraPar += palabra[i];
      } else {
        palabraNon += palabra[i];
      }
    }
  
    return [palabraNon, palabraPar];
  }
  
  let palabraOriginal = "Ulises";
  let [palabraNon, palabraPar] = palabrasNuevas(palabraOriginal); 
  /*devuelve un array con dos elementos, 
  donde el primer elemento es la palabra con las letras en posiciones non y el segundo elemento es la palabra 
  con las letras en posiciones par.*/
  
  console.log("Palabra con letras en posición non: " + palabraNon);
  console.log("Palabra con letras en posición par: " + palabraPar);
  