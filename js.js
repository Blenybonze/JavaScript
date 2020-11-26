const produtos = [
  {id: 20, tipo: "Filme"},
  {id: 10, tipo: "Jogo"},
  {id: 8, tipo: "Música"},
];

for(const produto of produtos)
 {
  if ( produto.id === 10 || produto.id === 8 ) {
    console.log(produto.tipo);
  }
}