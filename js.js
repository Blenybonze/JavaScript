//comprando chocolate, ou não
function comprarChocolate(nome,dinheiro){
let Nome = nome;
let Dinheiro = dinheiro;
let situacao = '';

console.log(Nome+' vai no supermercado com R$'+Dinheiro.toFixed(2));
situacao = Dinheiro > 50 ? "compra chocolate" : "não compra chocolate";
return console.log(situacao);
}