function min(arreglo) {
  let menor = arreglo[0];

  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] < menor) {
      menor = arreglo[i];
    }
  }

  return menor;
}

console.log(min([3, 9, 6, 8]));       
console.log(min([10, 5, 20, 15]));    
console.log(min([-2, 4, -8, 1]));     