        <script>
            /*Exemplo de comentário
            de multiplas linhas*/
            
            
            //-----------forma literal da variável receber valores
            var nome = 'Daniel'; 
            var n = 10;
            var n2 = 1.5;
            var ehMaiorDeIdade = true;
            var obj = { //adicionando objetos{} na variável obj
                nome: 'ze',
                idade: 25
            };
            var frutas = ['maça', 'pera', 'uva']; //Adicionando varios Arrays[] na variável frutas
            
            var frase = 'O "HTML" é maneiro' //Mude as aspas internas das externas
            alert(frase);
            
            
            //---------------forma Formal da variável receber valores
            var obj = new Object();
            obj.nome = 'zézin', 'pedro';
            
            
            
            
            //----------------Diferença entre modos de criar variáveis
            //var
            //let
            //const
            
            
            //----------------Null, NaN, undefined e infinity
            var teste2 = null; alert(teste2); //Null serve para informar que o programador criou uma variável vazia
            
            var teste3 = 2;var str = 'olá'; alert(teste3*str); //Aqui a conta não bate, está tentando operar string com números, aparecerá NaN
            //Porém podemos concatenar
            alert(teste3+' olá');
            
            var teste; alert(teste); //Aqui o undefined aparecerá, pois não foi atribuído valor nenhum a variável.
            
            alert(2e10);//Assim o js nos mostrará o número 2 + 10 casas de 0;
            alert(2+308); //Aqui ele mostrará que o número é infinito.
            
            /*
            Uma outra forma de entender, por exemplo, 2e2 é pensarmos em potência na base 10. Por exemplo 2e2 é o mesmo que 2 x 10 X 10 = 200. Ou seja, é o mesmo que 2 * 10**2 (Lê-se dois vezes dez ao quadrado)

            Outro exemplo: 2e3 é o mesmo que 2 * 10**3 (dois vezes dez ao cubo) . Ou seja: 2 * 10 * 10 * 10 = 2000. */
            
            
        </script>
        