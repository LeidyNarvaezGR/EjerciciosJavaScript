function fizzBuzz(numero){
    if (numero % 3 === 0 && numero % 5 === 0) {
    return "fizzbuzz";
} else if (numero % 3 === 0){
    return "fizz";
} else if (numero % 5 === 0){
    return "buzz";
} else{
    return numero;
}
}

console.log(fizzBuzz(6));
console.log(fizzBuzz(7));
console.log(fizzBuzz(10));
console.log(fizzBuzz(20));