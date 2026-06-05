function sumarRango(inicial, final) {
  let suma = 0;

  for (let i = inicial; i <= final; i++) {
    suma += i;
  }

  return suma;
}

console.log(sumarRango(1, 3)); 
console.log(sumarRango(0, 4)); 
console.log(sumarRango(5, 5)); 