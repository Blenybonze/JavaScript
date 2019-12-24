    <h1>Lógica de programação com Javascript - Manipulando o HTML com JS</h1>

    <button onclick="mostrarArea(largura, altura)">Mostrar área</button> <!-- Esse onclick declarou a função mostrarArea e dentro dos parenteses() ela declarou as duas variáveis que solicitamos nos prompts assim que a tela carrega. -->

    <script>
        var largura = parseFloat(prompt("digite a largura"));//armazenando variavel largura
        var altura = parseFloat(prompt("digite a altura"));//armazenando variavel altura

        function mostrarArea(L, A){ //Aqui a function mostrarArea está em ação. As variáveis largura e altura que foram colhidas no início e armazenadas, agora são parametros de L(largura), A(altura).
            alert('Área total: '+(L*A)); //aqui simplesmente informamos o cálculo.
        }
    </script>       