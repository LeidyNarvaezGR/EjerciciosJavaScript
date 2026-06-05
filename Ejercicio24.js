function empiezanConA(arreglo) {
  let resultado = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i][0].toLowerCase() === "a") {
      resultado.push(arreglo[i]);
    }
  }

  return resultado;
}

console.log(empiezanConA(["Daniel", "Valeri", "Leidy", "Camilo"]));


console.log(empiezanConA(["carro", "hotel", "hoja", "Amigo"]));


console.log(empiezanConA(["Andres", "sarit"]));
