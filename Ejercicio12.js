function multiplicarArreglo(arreglo) {
  let resultado = 1;

  for (let i = 0; i < arreglo.length; i++) {
    resultado *= arreglo[i];
  }

  return resultado;
}

console.log(multiplicarArreglo([2, 3, 4])); 
console.log(multiplicarArreglo([5, 2]));    
console.log(multiplicarArreglo([7]));       