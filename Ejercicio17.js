function capitalizar(texto) {
  let palabras = texto.split(" ");
  let resultado = "";

  for (let i = 0; i < palabras.length; i++) {
    resultado += palabras[i][0].toUpperCase() + palabras[i].slice(1);

    if (i < palabras.length - 1) {
      resultado += " ";
    }
  }

  return resultado;
}

console.log(capitalizar("hola Valeri")); 
console.log(capitalizar("Valeri es genial")); 
console.log(capitalizar("Valeri Muñoz"));