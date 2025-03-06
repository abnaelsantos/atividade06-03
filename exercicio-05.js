/* Faça um programa que leia um número e verifique se ele é par ou ímpar. Exiba uma
mensagem indicando o resultado.
*/

let numero = 11;

function parImpar(){
    
    if(numero %2 == 0 ){
        return "O número é par"
    }
    else{
        return "O número é impar"
    }
}
console.log(parImpar(numero));