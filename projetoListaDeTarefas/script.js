//Variáveis de seleção
const reset = document.querySelector('.reset');
const data = document.getElementById('data');
const lista = document.getElementById('lista');
const addTarefa = document.getElementById('addTarefa');
const item = document.getElementsByClassName('item');

//DATA
let hoje = new Date; 
data.innerHTML = hoje.getDate()+'/'+hoje.getMonth()+1+'/'+hoje.getFullYear();


//variáveis para controle de id e lista
let LIST = [];
let id = 0;


//função que cria os intens dentro da ul
function criarItem(tarefa){
  tarefa = addTarefa.value;
  if(tarefa != '' && LIST.length<=9){
  
    LIST.push ({
      nome:tarefa,
      id:LIST.length
    });

  const texto = `<li class="item">
                  <i class="far fa-circle eft-btn" onclick="concluirTarefa()" aria-hidden="true"></i>
                  <p class="textoItem">${tarefa}</p>
                  <i class="fas fa-trash-alt eft-btn btn-del" onclick="removerTarefa()" aria-hidden="true"></i>
                </li>`
  const posicao = 'beforeend'
  lista.insertAdjacentHTML(posicao,texto);
  
  id++;
  }
}


//botão que envia o valor para as li's e limpa o campo de texto
function adicionarTarefa(){
  criarItem(addTarefa.value);
  addTarefa.value = '';
}


//Resetar Lista
function resetarTudo(){
  document.location.reload(true);
}


//Ambas as funções encontrei diversas dificuldades em acompanhar as li's para deletar e concluir'las
//Peço desculpas pela inconclusão
function removerTarefa(){
  alert('Remover');
}
function concluirTarefa(){
  alert('Concluir')
}

