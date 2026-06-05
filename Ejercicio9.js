function numeroDeAes(texto) {
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === "a") {
      contador++;
    }
  }

  return contador;
}

console.log(numeroDeAes("casa"));      
console.log(numeroDeAes("banana"));    
console.log(numeroDeAes("hola"));      
console.log(numeroDeAes("perro"));     