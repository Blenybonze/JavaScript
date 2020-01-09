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
                })
                function addTask(){
                    var task = '<li>'+$txtTask.value+'</li>';
                    $ul.innerHTML += task;
                    
                    $txtTask.value = '';
                    $txtTask.focus();
                }
            })()
		</script>
	</body>