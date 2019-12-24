        <h1>Lógica de programação com Javascript - exercício </h1>
        
        <div id="output"></div>
        
        <script>
            
            var mochila = new Object();
            mochila.nome = 'Mochila Invictus'; //variáveis dentro de um objeto é chamado de PROPRIEDADE. mochila é um objeto, nome, preco e estoque são PROPRIEDADES do objeto mochila.
            mochila.preco = 50;
            mochila.estoque = 20;
            
            //ENSINANDO METODOS - SÃO FUNÇÕES CRIADAS PARA OBJETOS ESPECÍFICOS!!!!
            mochila.comprar = function(qtd){ //criando função para o objeto mochila e colocando como parâmtetro uma quantidade.
                if(!qtd){//Se a quantidade não for informada, automaticamente será = 1
                    qtd=1;
                }
                console.log('comprou caneta'); //mensagem no console, para verificarmos
                this.estoque -= qtd; //(this se refere diretamente ao objeto da função) this será igual a ele mesmo menos o numero do parâmetro quantidade.
                console.log(this.estoque); //passando no console a quantidade atual do this.estoque;
            }
            
            
            
            
            
            msg += 'nome: '+mochila.nome+'<br>';
            msg += 'preco: '+mochila.preco+'<br>';
            msg += 'estoque: '+mochila.estoque+'<br>';
            
            var output = document.querySelector('#output');
            output.innerHTML = msg;
            
            
        </script>
