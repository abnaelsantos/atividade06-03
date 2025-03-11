/* Faça um programa que receba 10 números inteiros, calcule e mostre a quantidade
de números pares e a quantidade de números ímpares.
*/

function contarParesEImpares(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10) {
    
    let pares = 0;
    let impares = 0;

    
    if (num1 % 2 === 0) pares++; else impares++;
    if (num2 % 2 === 0) pares++; else impares++;
    if (num3 % 2 === 0) pares++; else impares++;
    if (num4 % 2 === 0) pares++; else impares++;
    if (num5 % 2 === 0) pares++; else impares++;
    if (num6 % 2 === 0) pares++; else impares++;
    if (num7 % 2 === 0) pares++; else impares++;
    if (num8 % 2 === 0) pares++; else impares++;
    if (num9 % 2 === 0) pares++; else impares++;
    if (num10 % 2 === 0) pares++; else impares++;

    
    console.log('Quantidade de números pares:' +pares);
    console.log('Quantidade de números ímpares:'+impares);
}


contarParesEImpares(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);