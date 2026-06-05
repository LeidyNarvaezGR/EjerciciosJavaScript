function removerCeros(arreglo) {
  let nuevoArreglo = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] !== 0) {
      nuevoArreglo.push(arreglo[i]);
    }
  }

  return nuevoArreglo;
}

console.log(removerCeros([1, 0, 2, 0, 3])); 
console.log(removerCeros([0, 0, 5, 6]));
console.log(removerCeros([1, 2, 3]));       