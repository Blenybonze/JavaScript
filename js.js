// aprendendo os diferentes modos de usar o new Date()

const hoje = new Date();

//Imprimindo uma string com a data e hora local
console.log('local: '+hoje.toLocaleString());

//Imprimindo uma string com a data armazenada
console.log('armazenada: '+hoje.toString());

//Imprimindo uma string com a data universal (UTC)
console.log('universal: '+hoje.toUTCString());

//imprimindo Timestamp
console.log('timestamp(milissegundos): '+hoje.valueOf());

const dataAtual = new Date();
const dataPostagem = new Date('2020-11-11T00:00')
console.log('objeto postado dia '+dataPostagem.toLocaleString()+' e hoje é dia: '+dataAtual.toLocaleString())

//Pegando o timestamp das datas para converter mais abaixo
const timeAtual = dataAtual.getTime();
const timePostagem = dataPostagem.getTime();

//Verificando a diferença em milissegundos
const diferenca = timeAtual - timePostagem;

//convertendo o timestemp em horas
const segundos = diferenca / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;

//Exibindo a diferença
console.log(horas;