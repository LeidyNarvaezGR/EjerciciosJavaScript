function empiezanConA(arreglo) {
  let resultado = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i][0].toLowerCase() === "a") {
      resultado.push(arreglo[i]);
    }
  }

  return resultado;
}

console.log(empiezanConA(["Camilo", "Daniel", "Leidy", "Valeri"]));


console.log(empiezanConA(["avión", "casa", "árbol", "Amigo"]));


console.log(empiezanConA(["Sara", "Ian"]));
