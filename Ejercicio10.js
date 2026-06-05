function numeroDeCaracteres(texto, caracter) {
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === caracter) {
      contador++;
    }
  }

  return contador;
}

console.log(numeroDeCaracteres("banana", "a")); 
console.log(numeroDeCaracteres("banana", "n")); 
console.log(numeroDeCaracteres("hola", "o"));   
console.log(numeroDeCaracteres("perro", "z"));  