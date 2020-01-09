	<body>
        <div>
            <button>Botão 1</button>
            <button>Botão 2</button>
            <button>Botão 3</button>
        </div>
		<script>
            //Criando função autoinvocável para iniciar o desafio
			(function (){
                'use strict'
                
                //atribuindo a uma variável os elementos do HTML(tag name = buttons)
                var $btns = document.getElementsByTagName('button');
                
                //criei um loop para poder passar pelas tags selecionadas uma a uma colocando i menor que $btns.length
                for(var i=0; i < $btns.length; i++){
                    //variável no indice i(iniciado em 0) adicionará um evento de click chamando uma função
                    $btns[i].addEventListener('click', clicou);
                }
                
                //função que será chamada dentro do addEventListener
                function clicou(){
                    //mostra no console.log o this, no caso do problema, a variável $btns e mostra o text content dela, no caso do problema = botão 1, 2, 3
                    console.log(this.textContent);
                }
            })()
		</script>
	</body>