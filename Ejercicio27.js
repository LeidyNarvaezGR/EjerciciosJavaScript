function numerosAPalabras(arreglo) {
  let palabras = [
    "cero",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve"
  ];

  let resultado = [];

  for (let i = 0; i < arreglo.length; i++) {
    resultado.push(palabras[arreglo[i]]);
  }

  return resultado;
}

console.log(numerosAPalabras([0, 1, 2, 3]));


console.log(numerosAPalabras([5, 8, 9]));


console.log(numerosAPalabras([7, 4, 1]));
