function posiciones(arreglo) {
  let resultado = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      resultado.push(i);
    }
  }

  return resultado;
}

console.log(posiciones([1, 2, 3, 4, 5]));
// [1, 3]

console.log(posiciones([2, 4, 6]));
// [0, 1, 2]

console.log(posiciones([1, 3, 5]));
// []