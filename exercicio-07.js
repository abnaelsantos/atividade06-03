/* Escreva um programa que calcule e mostre a tabuada (até 10x) de um número
qualquer.
*/

let numero = 10;
let resultado;



function tabuada(){
    
    for(let i = 1; i <= 10; i++) {
    console.log (`${numero} x ${i} = ${numero * i}`);
    
    }
    
}
console.log(tabuada(numero));




