//Tirando a média de nota da turma A

const turmaA = [
  { aluno: 'João', nota: 10},
  { aluno: 'Ana', nota: 8},
  { aluno: 'Fernando', nota: 9},
  { aluno: 'Bia', nota: 10},
  { aluno: 'Manoelly', nota: 10},
]

let index = 0;
let SomaDasNotas = 0;
let totalAlunos = turmaA.length;

do{
  console.log('a nota do aluno '+turmaA[index].aluno+' é: '+turmaA[index].nota);
  SomaDasNotas += turmaA[index].nota;

  index++;
}while(index<turmaA.length)

let media = SomaDasNotas / totalAlunos;

console.log(media);