        <h1>Lógica de programação com Javascript - Introdução </h1>
        
        <button onclick="mostrarAreaAlert()">Mostrar Area</button>
        
        <button onclick="mostrarAreaOutput()">Mostrar Area no output</button>
        
        <div id="output"></div>
        
        <script>
            
            
            
            function mostrarAreaAlert(){ //botão que mostrará o resultado no alert
                var largura = parseFloat(prompt("digite a largura"));//solicitando valores
            
                var altura = parseFloat(prompt("digite a altura"));//solicitando valores
                
                var area = calcularArea(largura, altura);//criando variável area e dando a ela os valores retornados da função calcularArea que está fazendo o cálculo da largura x altura.
                
                alert('a área total é de: '+area); //Mostrando no alert o valor da variável área.
            }
            
            function mostrarAreaOutput(){ //botão que mostrará o resultado no output
                var largura = parseFloat(prompt("digite a largura"));//solicitando valores
            
                var altura = parseFloat(prompt("digite a altura"));//solicitando valores
                
                var area = calcularArea(largura, altura);//criando variável area e dando a ela os valores retornados da função calcularArea que está fazendo o cálculo da largura x altura.
                
                document.querySelector('#output').innerHTML = 'a área total é de: '+ area;//Mostrando valor no output. Com a div criada, aplicamos o document.querySelector ao ID da DIV selecionada. Após isto aplicamos o .innerHTML = e damos um valor em string para ele mostrar na div.
            }
            
            function calcularArea(l, a){ // o objetivo dessa função é receber valor e retornar os valores calculados dentro dela para quem chamar-la
                return l * a;
            }
        
        </script>       