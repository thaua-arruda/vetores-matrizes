let meuArray = [];

// adicionando elementos ao final de um array
meuArray.push(10);
meuArray.push(20);
meuArray.push(30);

console.log(meuArray);

meuArray.push(40, 50, 60);
console.log(meuArray);

meuArray[2] = 35;
console.log(meuArray);

let elementoRemovido = meuArray.pop();
console.log(elementoRemovido);

console.log(meuArray);

let tamanhoArray = meuArray.length;

console.log(tamanhoArray);