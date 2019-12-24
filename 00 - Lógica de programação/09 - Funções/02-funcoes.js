        <h1>Lógica de programação com Javascript - Manipulando o HTML com JS</h1>
        
        <button onclick="mostrarTabuada()">Criar tabuada</button> <!-- atributo onclick serve para enviar uma função para o JS -->
        <button onclick="limparTabuada()">Limpar tabuada</button>
        
        
        <div id="output"></div>
        
        <script>
            //Manipulando o HTML pelo JS com funções
            
            function mostrarTabuada(){//Esta é a sintaxe de chamar uma função do HTML para o JS. TODA vez que essa função for chamada no HTML, será rodado este trecho de codigo abaixo dentro dos {}.
                
                limparTabuada(); //colocando este valor fixo da função limparTabuada no início da função mostrarTabuada fará que automaticamente após apertar novamente o botão, a tabuada ser limpa. do contrario, as tabuadas até 1000 serão somadas uma as outras.
                
                //peguntar o número para o usuário e converter o número
                var n = parseInt(prompt("Digite um número"));
                
                
                //criar uma variavel que servirá de indice
                var i = 1;
                
                
                //enquanto indice <= 1000 
                    //concatena na variavel mensagem
                while(i <= 1000){
                    mensagem += n + ' x ' + i + ' = ' + (n*i) +'<br>';//Atrelamos a variavel mensagem para replicar a linha de texto que mostrará para o usuário as respostas desejadas
                    
                    i++; //incremento para o i para que ele vá de 1 a 1001.
                }
                //mostra mensagem no output
                output.innerHTML = mensagem;
            }
            function limparTabuada(){ //function criada justamente para limpar a tabuada gerada.
                mensagem = '';
                output.innerHTMl = mensagem;
            }
            
            var output = document.querySelector("#output");//toda vez que eu preciso acessar um elemento no html, independente de quem seja, deve-se utilizar sempre a palavra document. - no caso o querySelector ele vai selecionar no mundo HTML um elemento que tenha o ID #outupt, se fosse classe .output
            
            var mensagem = ''; //essa variável será responsável por mostrar em texto(string) as respostas da tabuada.
            
            
            output.innerHTML = mensagem/*Apliquei um texto no html pelo JS*/
            
            
        </script>       