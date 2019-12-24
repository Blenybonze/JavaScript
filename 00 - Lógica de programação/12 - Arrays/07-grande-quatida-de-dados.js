        <h1>Lógica de programação com Javascript - Introdução </h1>
        
        <div id="output"></div>
        
        <script>
            /*MOSTRAR NA TELA os dados de produtos,
            contendo quantidade em estoque e preço. Estes dados estarão agrupados em array de objetos.
            */
            
            
            
            //vamos entender o que é isto abaixo
            var produtos = [ //Aqui eu criei um array literal [], e dentro dos colchetes abri 3 vezes {}, {}, {} sendo cada um deles um objeto com duas propriedades dentro de cada, sendo elas 'nome' e 'preco'. SEM MISTÉRIO
                {'nome': 'caneta', 'preco': 2},
                {'nome': 'lapis', 'preco': 1.2},
                {'nome': 'norracha', 'preco': 0.5}
            ];
            
            var msg = ''; //Criei a variável msg para poder produzir nosso texto para o output
            
            for(var i=0; i < produtos.length; i++){ //criando loop com for, para o i ir até o mesmo números de elementos existentes dentro de produtos, utilizando produtos.length.
                console.log(produtos[i]) //criei um console.log(produtos[i]) apenas para vizualisar se a lógica estava dando certo.
                
                msg += 'produto: '+produtos[i].nome+'<br>Preço: '+produtos[i].preco+'<br><br>'; //utilizando a variavel msg produzi um texto mais ''bonito'', passando informações dos objetos da Array produtos, seja lá quantos forem.
            }
            
            
            document.querySelector('#output').innerHTML = msg; //Criei um querySelector para o ID outpur no mundo HTML, em seguida ordenei que ele escreva no Mundo HTML o que estiver armazenado em msg

        </script>
