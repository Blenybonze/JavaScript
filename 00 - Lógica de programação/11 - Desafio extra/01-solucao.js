        <h1>Lógica de programação com Javascript - Introdução </h1>
        
        <button onclick="mostrarAreaAlert()">Mostrar Area</button>
        
        <button onclick="mostrarAreaOutput()">Mostrar Area no output</button>
        
        <div id="output"></div>
        
        <script>
            
            
            
            function mostrarAreaAlert(){ //botão que mostrará o resultado no alert
                var largura = parseFloat(prompt("digite a largura"));//solicitando valores
                
                var altura = parseFloat(prompt("digite a altura"));//solicitando valores
                
                
                if(isNaN(largura)||isNaN(altura)){ //simples alteração para caso o usuário tente digitar string ao invez de números
                    alert("erro! digite apenas números!") //cria alerta com aviso
                    mostrarAreaAlert();//reativa a função mostrarAreaAlert, fazendo o programa reler desde o início refazendo as primeiras perguntas
                    return 0;//e retorna o valor das variáveis a 0, para não acontecer de calcularem string com números digitados anteriormente.
                }
                
                
                var area = calcularArea(largura, altura);//criando variável area e dando a ela os valores retornados da função calcularArea que está fazendo o cálculo da largura x altura.
                
                alert('a área total é de: '+area); //Mostrando no alert o valor da variável área.
            }
            
            function mostrarAreaOutput(){ //botão que mostrará o resultado no output
                var largura = parseFloat(prompt("digite a largura"));//solicitando valores
            
                var altura = parseFloat(prompt("digite a altura"));//solicitando valores
                
                if(isNaN(largura)||isNaN(altura)){ //simples alteração para caso o usuário tente digitar string ao invez de números
                    alert("erro! digite apenas números!") //cria alerta com aviso
                    mostrarAreaOutput();//reativa a função mostrarAreaOutput, fazendo o programa reler desde o início refazendo as primeiras perguntas
                    return 0;//e retorna o valor das variáveis a 0, para não acontecer de calcularem string com números digitados anteriormente.
                }
                
                var area = calcularArea(largura, altura);//criando variável area e dando a ela os valores retornados da função calcularArea que está fazendo o cálculo da largura x altura.
                
                document.querySelector('#output').innerHTML = 'a área total é de: '+ area;//Mostrando valor no output. Com a div criada, aplicamos o document.querySelector ao ID da DIV selecionada. Após isto aplicamos o .innerHTML = e damos um valor em string para ele mostrar na div.
            }
            
            function calcularArea(l, a){ // o objetivo dessa função é receber valor e retornar os valores calculados dentro dela para quem chamar-la
                return l * a;
            }
                    
        </script>