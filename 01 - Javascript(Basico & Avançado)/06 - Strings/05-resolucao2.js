<body>
    <span id="span"></span>
    <br><br>
    <span id="span2"></span>
    <br><br>
    <span id="span3"></span>
    
    <script>
        //Criamos uma variável para acessar o ID span, que se refere ao span criado no body apenas para armazenar texto.
        var span = document.getElementById('span');


        //Texto exemplo
        var texto = 'What is Lorem Ipsum? is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and. scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'



        //Variável responsável por limitar o texto a 200 caracteres
        var textoLimite = texto.slice(0,200);

        //Variável que irá contar quantos espaços temos no texto.
        var espacos = textoLimite.split(/ /g).length-1;

        //Responsável por dizer quantos espaços temos no texto que foi limitado a 200 caracteres
        span2.textContent += 'Espaços no texto total: '+espacos;

        //Apresentando o txto limite com 200 caracteres na span
        span.textContent += textoLimite;
    </script>
</body>