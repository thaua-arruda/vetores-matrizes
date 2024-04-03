/*
Questão 7: Crie uma matriz 3x3 e escreva uma função para verificar se a matriz é
simétrica em relação à sua diagonal principal.
*/

let matriz = [
    [10,20,30],
    [20,50,60],
    [30,80,90]
];

function matrizSimetrica (matriz) {
    for (let i = 0; i < matriz.lenght; i++) {
        for (let j = 0; j < i; j++) {
            if (matriz[i][j] !== matriz[j][i]) {
                return false
            }
        }
    }
    return true
}
console.log(matrizSimetrica(matriz));
