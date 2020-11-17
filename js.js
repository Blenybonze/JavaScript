const minimoDeJogadores = 2;
const iniciarJogo = minimoDeJogadores >= 2 && true;

const msgInicial = "Iniciando o jogo";
const msgErro = "Você não consegue jogar sozinho";

console.log(iniciarJogo?msgInicial:msgErro);