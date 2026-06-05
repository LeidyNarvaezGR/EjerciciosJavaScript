function max(arreglo) {
  let mayor = arreglo[0];

  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
      mayor = arreglo[i];
    }
  }

  return mayor;
}

console.log(max([3, 9, 6, 8]));      
console.log(max([10, 5, 20, 15]));   
console.log(max([7]));               