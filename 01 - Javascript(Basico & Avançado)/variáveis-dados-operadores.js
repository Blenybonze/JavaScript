// Objeto com função construtora
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.falar = function ( ) {
      return ("Meu nome é " + this.nome + " " + this.sobrenome);
  }
 }
 
 
 // Criando um objeto a partir de uma função construtora
 var funcionario = new Pessoa("Maria", "Peixoto");
 
 // Acessando a propriedade nome e o método falar
 funcionario.nome;
 funcionario.falar();

 // chamando a função
 console.log(funcionario.falar());
 
