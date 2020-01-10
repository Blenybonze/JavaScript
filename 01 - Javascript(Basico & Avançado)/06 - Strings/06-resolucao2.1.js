<body>
    <p>What is Lorem Ipsum? is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and. scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.What is Lorem Ipsum? is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and. scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

    <p>What is Lorem Ipsum? is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and. scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

    <p>What is Lorem Ipsum? is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and. scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in </p>

    <script>
        //variável responsável por acessar todos os paragrafos do HTML
        var $paragrafos = document.querySelectorAll('p');

        //criando loop
        var x = 0;
        while($paragrafos[x]){
            //a texto da var que acessa os paragrafos do html recebera uma formatação
            //receberá uma função que modificará o innerHTML da mesma
            $paragrafos[x].innerHTML = formatarTexto($paragrafos[x].innerHTML);

            //continuação do loop
            x++;
        }

        //Função que formata a variável responsável pelos paragrafos
        function formatarTexto(texto){
            //var responsável por dar um número máximo.Neste caso 200;
            var numMax = 200;

            //condição, se o parâmetro da função(texto.length) for menor ou igual o numero máximo de caracteres permitidos a condição passa e retorna o texto(parâmetro)
            if(texto.length <= numMax){
                return texto;
            }

            //Se o texto.length for maior que o numMax(200 caracteres) a var subTexto receberá o texto, porém modificado e limitado até 200 caracteres. Também será concatenado com as Reticências para informar que havia mais texto ali, porém foi limitado.
            var subTexto = texto.slice(0,numMax);
            return subTexto + '...';
        }
    </script>
</body>