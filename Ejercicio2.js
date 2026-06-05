function calcularImpuestos (edad, ingresos){
    if (edad >= 18 && ingresos >= 1000){
        return ingresos *0.4;
    }
    return 0;
}
console.log(calcularImpuestos(18, 1000));
console.log(calcularImpuestos(20, 2000));
console.log(calcularImpuestos(17, 1000));
console.log(calcularImpuestos(18, 999));