/* Crie um programa que receba a idade de uma pessoa e retorne se ela pode ou não
votar. Considere o voto a partir dos 16 anos.
*/

let idade = 16;

function voto(idadeUsuario){
    
    if(idadeUsuario >= 16){
        return "Você pode votar"
        
    }
    else{
        
        return "Você não pode votar"
    }

}
console.log(voto(idade));