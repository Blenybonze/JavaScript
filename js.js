//Somando os valores dentro de um Array[]

const produtos = [
  {descricao:"Resma Oficio", valor:11.50, quantidade:10},
  {descricao:"lapis preto", valor:0.50, quantidade:3},
  {descricao:"Paleta Plástica", valor:1.20, quantidade:4},
  {descricao:"Caneta", valor:2, quantidade:5}
];


let total = 0;
let totalProduto=0;
let index = 0;

while(index<produtos.length){
  const{descricao,valor,quantidade} = produtos[index];

  totalProduto = valor * quantidade;
  total += totalProduto;
  index++;
  
  console.log("Total de "+descricao+" é "+totalProduto);
}

console.log("O Total geral é: R$"+total.toFixed(2));