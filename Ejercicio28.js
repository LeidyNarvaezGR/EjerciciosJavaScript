function palabrasANumeros(arreglo) {
  let resultado = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === "cero") {
      resultado.push(0);
    } else if (arreglo[i] === "uno") {
      resultado.push(1);
    } else if (arreglo[i] === "dos") {
      resultado.push(2);
    } else if (arreglo[i] === "tres") {
      resultado.push(3);
    } else if (arreglo[i] === "cuatro") {
      resultado.push(4);
    } else if (arreglo[i] === "cinco") {
      resultado.push(5);
    } else if (arreglo[i] === "seis") {
      resultado.push(6);
    } else if (arreglo[i] === "siete") {
      resultado.push(7);
    } else if (arreglo[i] === "ocho") {
      resultado.push(8);
    } else if (arreglo[i] === "nueve") {
      resultado.push(9);
    } else {
      resultado.push(-1);
    }
  }

  return resultado;
}

console.log(palabrasANumeros(["cero", "uno", "dos"]));
// [0, 1, 2]

console.log(palabrasANumeros(["cinco", "ocho", "nueve"]));
// [5, 8, 9]

console.log(palabrasANumeros(["uno", "hola", "tres"]));
// [1, -1, 3]