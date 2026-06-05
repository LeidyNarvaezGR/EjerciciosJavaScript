function password(texto) {
  let resultado = "";

  texto = texto.toLowerCase();

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === " ") {
      continue;
    } else if (texto[i] === "a") {
      resultado += "4";
    } else if (texto[i] === "e") {
      resultado += "3";
    } else if (texto[i] === "i") {
      resultado += "1";
    } else if (texto[i] === "o") {
      resultado += "0";
    } else {
      resultado += texto[i];
    }
  }

  return resultado;
}

console.log(password("Hellou"));


console.log(password("Este es un ejercicio"));


console.log(password("Leidy"));
