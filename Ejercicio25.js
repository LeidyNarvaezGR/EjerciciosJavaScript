function terminanConS(arreglo) {
  let resultado = [];

  for (let i = 0; i < arreglo.length; i++) {
    let palabra = arreglo[i];

    if (palabra[palabra.length - 1].toLowerCase() === "s") {
      resultado.push(palabra);
    }
  }

  return resultado;
}

console.log(terminanConS(["casas", "perro", "lunes", "sol"]));

console.log(terminanConS(["MES", "flor", "Atlas"]));


console.log(terminanConS(["casa", "perro"]));
