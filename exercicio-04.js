/*Faça um programa que leia 2 números, some-os e exiba uma mensagem com o
resultado apenas se o resultado for maior que 100.
*/

let numero1 = 50;
let numero2 = 50;
let soma;

function somaNumero(){
     soma = numero1 + numero2;
    if(soma >= 100){
        return "O resultado é: "+ soma;
    }
    else{
        return " O resultado é menor que 100"
    }
}
console.log(somaNumero(soma));