// Faça um programa que leia três números e exiba o maior entre eles.

let numero1 = 50;
let numero2 = 85;
let numero3 = 55
let maior;

function numeroMaior(){
    if( numero1 > numero2 && numero1 > numero3){
        return numero1+ " é o maior número";
    }
    else if(numero2 > numero1 && numero2 > numero3){
        return numero2+" é o maior número";
    }
    else{
        return numero3+" é o maior número";
    }
}
console.log(numeroMaior(maior));