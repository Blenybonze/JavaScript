const reset = document.querySelector('.reset');
const data = document.getElementById('data');
const lista = document.getElementById('lista');
const addTarefa = document.getElementById('addTarefa');
const item = document.querySelector('.item');




let LIST = [];
let id = 0;

function criarItem(tarefa){
  tarefa = addTarefa.value;
  
  
  if(tarefa != ''){
  
    LIST.push ({
      nome:tarefa,
      id:0
    });

  const texto = `<li class="item">
                  <i class="far fa-circle eft-btn" onclick="concluirTarefa()" aria-hidden="true"></i>
                  <p class="textoItem">${tarefa}</p>
                  <i class="fas fa-trash-alt eft-btn" onclick="removerTarefa()" aria-hidden="true"></i>
                </li>`
  const posicao = 'beforeend'
  lista.insertAdjacentHTML(posicao,texto);
  
  id++;
}
  else{
    addTarefa.value = '';
}}




function adicionarTarefa(){
  criarItem(addTarefa.value);
  addTarefa.value = '';
}

function resetarTudo(){
  alert('reset');
}
 
function removerTarefa(){
  alert('remover');
}
function concluirTarefa(){
  alert('concluir');
}