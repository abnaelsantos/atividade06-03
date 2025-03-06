/* Crie um programa que receba o nome do aluno, o nome da UC, a nota do aluno e
retorne seu desempenho. Considere que:
0 a 6 = Baixo desempenho
6 a 8 = Bom desempenho
8 a 10 = Excelente desempenho
*/

var nomeAluno = "Abnael";
var uc  = "Desenvolvimento de Sistemas";
var nota = 5;

function baixoDesenpenho(){
    if( nota <= 6 ){
        return nomeAluno +  " do curso de" + uc+  " teve baixo desenpenho";
    }
    else if(nota > 6 && nota <= 8){
        return nomeAluno+ " do curso de "+uc+ " teve um bom desenpenho";
    }
    else if( nota > 8 && nota <= 10){
        return nomeAluno+ " do curso de "+uc+ " teve um exelente desenpenho";
    }
}
console.log(baixoDesenpenho(nota))