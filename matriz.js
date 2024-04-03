// criando matriz de arrays
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// acessar elementos da matriz
console.log(matriz[0][0]); // saída: 1
console.log(matriz[1][2]); // saída: 6

matriz[0][0] = 10

console.log(matriz); // saída: [[10,2,3],[4,5,6],[7,8,9]]

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}