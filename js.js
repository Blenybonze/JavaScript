// exemplos com for in e for off

const produtos = [
  { descricao: 'Resma Ofício', valor: 11.50, quantidade: 10 },
  { descricao: 'Lapis preto', valor: 0.50, quantidade: 3 },
  { descricao: 'Transferidor plastico', valor: 1.20, quantidade: 4 }
]

let totalGeral = 0;
let totalProduto = 0;

for(const index in produtos){
  const{valor,quantidade,descricao} = produtos[index];
  totalProduto = valor * quantidade;
  totalGeral += totalProduto;
  console.log('produto '+descricao+' tem o total em Reais de R$'+totalProduto.toFixed(2));
}

console.log('O total Geral de todos os produtos estocados é de: R$'+totalGeral.toFixed(2))

