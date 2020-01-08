
	<body>
        <form action="#">
            <label for="txtUser">Usuário</label>
            <input type="text" id="txtUser" name="user">
            
            <label for="txtPass">Senha</label>
            <input type="password" id="txtPass" name="pass">
            
            <button type="button" id="btn">Logar</button>
        </form>
        


		<script>
			//Criamos uma função alto invocável
            (function(){
                //use strict para sempre cuidarmos das variáveis internas
                'user strict';
                
                //criando as 3 variáveis que referenciam os elementos HMTL(Usuário, senha e botão)
                var $txtUser = document.getElementById('txtUser');
                var $txtPass = document.getElementById('txtPass');
                var $btn = document.getElementById('btn');
                
                
                //adicionando um evento ao btn do HTML
                $btn.addEventListener('click', function(){
                   
                    //Se a variável $txtUser e $txtPass forem diferentes de terem um valor, ou seja, vazias, o JS rodará esta condição
                    if( !$txtUser.value  || !$txtPass.value){
                        alert('Campo vazio, preencha todos os campos corretamente');
                    }
                    
                });
                
            })()
            
           

		</script>
	</body>