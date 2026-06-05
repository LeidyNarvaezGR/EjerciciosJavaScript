function likes (numero){

    if (numero < 1000) {
    return numero.toString();
    }
    
    if (numero < 10000){
        return Math.floor (numero / 1000) + "K";
    }
    return Math.floor (numero / 1000000) +"M";

}

console.log (likes (983));
console.log (likes (1500));
console.log (likes (34567));
console.log (likes (7456345));