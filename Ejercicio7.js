function contarRango(num1, num2) {
  let contador = 0;

  for (let i = num1 + 1; i < num2; i++) {
    contador++;
  }

  return contador;
}

console.log(contarRango(1, 4));
console.log(contarRango(3, 8));
console.log(contarRango(5, 6));