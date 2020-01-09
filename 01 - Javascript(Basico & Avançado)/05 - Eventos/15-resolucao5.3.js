<body>
    <input type="text" id="txtTask">
    <br>
    <button id="btn">Cadastrar tarefa!</button>

    <ul>
        <li>Estudar JS</li>
        <li>Estudar ReactJS</li>
        <li>Jogar</li>
    </ul>
    <script>
        //Criando função autoinvocável para iniciar o desafio
        (function (){
            'use strict'
            //criando variáveis para acessar as tags ul, li e botão
            var $ul = document.querySelector('ul');
            //desta vez criamos uma variável que armazenara as li's
            var $lis = $ul.querySelectorAll('li');
            var $txtTask = document.querySelector('#txtTask');
            var $btn = document.querySelector('#btn');

            //adicionando evento ao botão com o listener e chamando uma função
            $btn.addEventListener('click', addTask);

            //criando um evento ao campo que será preenchido. utilizando o keyup para dizer ao eventlistener para prestar atenção nas teclas do teclado.
            $txtTask.addEventListener('keyup', function(e){
                //SEEEEE o e.keyCode for igual a 13(Numero das teclas enter do teclado, entrará nesta condição)
                if(e.keyCode == 13){
                    //chamando a função que adiciona o que estiver escrito na UL como uma LI
                    addTask();
                }
            });

            //criando um loop para averiguar todas as li's dentro da UL
            for(var i = 0; i < $lis.length; i++){
                //adicionando evento e chamando função
                $lis[i].addEventListener('click', feitoOuNao)
            }

            //Função que irá adicionar ou retirar uma classe da tag HTML.
            //após ser criada a class, basta utilizar essas propriedades para poder adicionar-la ou remover-la
            function feitoOuNao(){
                this.classList.toggle('done');
            }

            //função criada na resolução anterior. responsável em adicionar na UL o que for digitado como uma li, mas dessa vez, mudamos pois com as alterações se perderia a referência do DOM
            function addTask(){

                var li = document.createElement('li');
                var text = document.createTextNode($txtTask.value);

                li.appendChild(text);

                $ul.appendChild(li);

                $txtTask.value = '';
                $txtTask.focus();
            }
        })()
    </script>
</body>