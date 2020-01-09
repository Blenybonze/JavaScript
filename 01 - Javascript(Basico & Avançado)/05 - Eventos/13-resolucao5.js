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
                $btn.addEventListener('click', function(){
                    //armazenando em uma variável o que for digitado no input text, concatenando com a tag <li>
                    var task = '<li>'+$txtTask.value+'</li>';
                    
                    //adicionando o texto digitado e armazenado com a var task já com as tags <li> utilizando o innerHTML
                    $ul.innerHTML += task;
                    
                    //após adicionar o texto a lista, o espaço é 'limpado'
                    $txtTask.value = '';
                    
                    //colocando foco no campo para digitar
                    $txtTask.focus();
                })
            })()
		</script>
	</body>