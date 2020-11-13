// criando objetos literais, não precisam de uma função existente
// Indicado utilizar quando não for necessário a reutilização do código

var filmes = {
  nome: "Avatar",
  diretor: "James Cameron",
  ano: "2009",
  exibirInfo: function(){
    return(this.nome+" criado por "+this.diretor+" no ano de "+this.ano);
  }
}

//imprimindo...
console.log(filmes.exibirInfo());