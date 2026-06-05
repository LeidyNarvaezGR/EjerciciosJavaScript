function pares(arreglo) {
  let resultado = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      resultado.push(arreglo[i]);
    }
  }

  return resultado;
}

console.log(pares([1, 2, 3, 4, 5, 6]));
// [2, 4, 6]

console.log(pares([7, 9, 11]));
// []

console.log(pares([10, 15, 20, 25]));
// [10, 20]