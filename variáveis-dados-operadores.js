// função que retorna o nome do jogo apenas com o nome da criadora
function Jogo(nome, criadora) {
  const _nome = nome;
  const _criadora = criadora;

  //Criando um método que vai juntar o nome de ambos
  this.nomeJogo = function(){
    return(_nome+" criado por "+_criadora);
  }
}
//Registrando primeiro game
var jogo1 = new Jogo("CyberPunk2077","CDProjectRed");

//Impriimindo...
console.log(jogo1.nomeJogo());