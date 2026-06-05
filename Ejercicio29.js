function numAsteriscos(arreglo) {
  let contador = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === "*") {
      contador++;
    }
  }

  return contador;
}

console.log(numAsteriscos(["*", "*", "*"]));


console.log(numAsteriscos(["*", "hola", "*", "mundo"]));


console.log(numAsteriscos(["hola", "mundo"]));
