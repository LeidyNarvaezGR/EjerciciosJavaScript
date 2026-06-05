function sumarArreglo(arreglo) {
  let suma = 0;

  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }

  return suma;
}

console.log(sumarArreglo([3, 7, 2]));      
console.log(sumarArreglo([1, 2, 3, 4]));  
console.log(sumarArreglo([5]));            
console.log(sumarArreglo([]));             