    <h1>Lógica de programação com Javascript - Array </h1>

    <div id="output"></div>


    <script>

        var produtos = new Array('caneta', 'lapis', 'tesoura', 'borracha', 'caderno', 'livro');

        produtos.push('compaso', 'cartolina');//Adicionando mais elementos ao Array produtos com o metodo push(...)

        var output = document.querySelector('#output');//criando uma referência de um elemento do mundo HTML no mundo javascript com uma variável com o mesmo nome.

        var msg = '';//variável de string vazia

        for(var i=0; i < produtos.length; i++){//variável i iniciará em 0 e enquanto for MENOR que produtos.length(informa a quantidade de elementos que existem no Array produtos) ele irá somar +1.
            msg += 'produto '+ (i+1) +': '+ produtos[i]+'<br>'//variável msgn irá sempre somar os mesmos valores um abaixo do outro/ i+1 para ficar mais bonito, iniciando em 1 e indo até o número final do elemento / produtos[i] para poder aproveitar os números de i para indicar qual elemento dentro de si quer mostrar/ <br> para pular de linha
        }

        output.innerHTML = msg; //mostrar no mundo HTML o resultado de tudo isso.

    </script>