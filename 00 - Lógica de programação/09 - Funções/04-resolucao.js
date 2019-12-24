    <h1>Lógica de programação com Javascript - Introdução </h1>


    <button onclick="teclaSomar()">+</button>
    <button onclick="teclaSubtrair()">-</button>
    <button onclick="teclaMultiplicar()" >*</button>
    <button onclick="teclaDivisao()" >/</button>
    <button onclick="teclaReset()" >RESET</button>


    <div id="output"></div>

    <script>
        //pergunte um número para o usuário
        var numero1 = parseInt(prompt("Digite um número para iniciar: "));
        var mensagem = '';

        output.innerHTML = numero1;//Responsável por mostrar o número1 na tela abaixo dos botões.


        function escreve(){ //função responsável por automatizar e poupar repetição de código. Atrelamos a variável output a DIV id output no html. e depois informamos que o valor de output mostrará no html será igual a variável menságem.
            var output = document.querySelector('#output');
            output.innerHTML = mensagem;
        }


        //Criando função para RESETAR e redigitar o primeiro
        function teclaReset(){
            numero1 = parseInt(prompt('Digite um primeiro número: '));

            output.innerHTML = numero1;//responsável para mostrar o número1 redigitado na tela abaixo dos botões.
        }


        //Criando função para SOMAR
        function teclaSomar(){
            var numero2 = parseInt(prompt("Número: "));
            mensagem = numero1+' + '+numero2+' = '+(numero2+numero1);

            numero1 += numero2;
            escreve();
        }

        //Criando função para SUBTRAIR
        function teclaSubtrair(){
            var numero2 = parseInt(prompt("Número: "));
            mensagem = numero1+' - '+numero2+' = '+(numero1-numero2);

            numero1 -= numero2;
            escreve();
        }

        //Criando função para MULTIPLICAR
        function teclaMultiplicar(){
            var numero2 = parseInt(prompt("Número: "));
            mensagem = numero1+' x '+numero2+' = '+(numero1*numero2);

            numero1 *= numero2;
            escreve();
        }

        //Criando função para DIVIDIR
        function teclaDivisao(){
            var numero2 = parseInt(prompt("Número: "));
            mensagem = numero1+' / '+numero2+' = '+(numero1/numero2);

            numero1 /= numero2;
            escreve();
        }

    </script>           