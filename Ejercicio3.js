function bmi (peso, altura){
    const resultado = peso / (altura * altura);

    if (resultado < 18.5){
        return "Bajo de peso";
    }
    if (resultado >= 18.5 && resultado <= 24.9){
        return "Normal";

    }

    if (resultado >= 25 && resultado <= 29.9){
        return "Sobrpeso";
    }
    return "Obeso";
}

console.log(bmi(50, 1.75)); 
console.log(bmi(65, 1.70)); 
console.log(bmi(80, 1.70));
console.log(bmi(95, 1.70));