function distancia(texto1, texto2) {
  let contador = 0;

  for (let i = 0; i < texto1.length; i++) {
    if (texto1[i] !== texto2[i]) {
      contador++;
    }
  }

  return contador;
}

console.log(distancia("hola", "hola")); 
console.log(distancia("hola", "hora")); 
console.log(distancia("casa", "cama")); 
console.log(distancia("abcd", "wxyz")); 