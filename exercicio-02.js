/* Crie um programa que receba um número inicial, um número final e retorne todo o
intervalo entre os números, aumentando de 2 em 2.
*/

function intervalo(inicio, fim) {
    for (let i = inicio; i <= fim; i += 2) {
        console.log(i);
    }
}

intervalo(50, 60); 