/*
Questão 6: Escreva um código para calcular a soma de todos os elementos de uma
matriz em JavaScript.
*/

let matriz = [
    [10,20,30],
    [40,50,60],
    [70,80,90],
];
 
let soma = 0;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        soma += matriz[i][j]
    }
    
}
console.log(soma);