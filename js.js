//Somando valores dos carros da concecionária

const carros = [
  { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 18000 },
  { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 12000 },
  { id: 3, modelo: 'Gol', marca: 'Volkswagen', preco: 14000 },
  { id: 4, modelo: 'Saveiro', marca: 'Volkswagen', preco: 20000 },
  { id: 5, modelo: 'Uno', marca: 'Fiat', preco: 12000 }
];

//Variáveis utilizadas no exercício
let index = 0;
let valorFinal =0;

//Estrutura de repetição
while(index<carros.length){
  valorFinal += carros[index].preco;
  console.log(valorFinal)
  index++;
}

//Imprimindo o valor final dos carros da concecionária e formatando o valor de valorFinal para BRL
console.log('O valor de todos os carros é de: '+valorFinal.toLocaleString('pt-br',{style:'currency',currency:'BRL'}))

