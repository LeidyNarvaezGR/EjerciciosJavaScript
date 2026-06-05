function sumarArreglo(arreglo, inicio, fin) {
  let suma = 0;

  for (let i = inicio; i <= fin; i++) {
    suma += arreglo[i];
  }

  return suma;
}

console.log(sumarArreglo([1, 2, 3, 4, 5], 1, 3)); 
console.log(sumarArreglo([10, 20, 30, 40], 0, 2)); 