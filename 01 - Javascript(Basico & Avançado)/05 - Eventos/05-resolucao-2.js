
	<body>
		
        <form action="#" method="post">
            <label for="txtUser">Usuário</label>
            <input type="text" id="txtUser" name="user">
            
            <label for="txtPass">Senha</label>
            <input type="password" id="txtPass" name="pass">
            
            <button type="submit" id="btn">Logar</button>
        </form>
        


		<script>
			//Criamos uma função alto invocável
            (function(){
                //use strict para sempre cuidarmos das variáveis internas
                'user strict';
                
                //selecionando o form do HTML
                var $form = document.querySelector('form');
                
                //criando as 3 variáveis que referenciam os elementos HMTL(Usuário, senha e botão)
                var $txtUser = document.getElementById('txtUser');
                var $txtPass = document.getElementById('txtPass');
                var $btn = document.getElementById('btn');
                
                
                //adicionando um evento ao FORM do HTML
                //neste caso, estamos aplicando um evento ao submit do formulário e não mais ao click do botão, pois da forma de antes, o alert se mostrava, mas o formulário ainda era enviado
                $form.addEventListener('submit', function(e){
                    
                    
                    
                    //Se a variável $txtUser e $txtPass forem diferentes de terem um valor, ou seja, vazias, o JS rodará esta condição
                    if(!$txtUser.value  || !$txtPass.value){
                        alert('Campo vazio, preencha todos os campos corretamente');
                        //previne o evento padrão de acontecer, neste caso, o button submit. impede de enviar o formulário se entrar nesta função
                        e.preventDefault();
                    }
                    
                });
                
            })()
		</script>
	</body>