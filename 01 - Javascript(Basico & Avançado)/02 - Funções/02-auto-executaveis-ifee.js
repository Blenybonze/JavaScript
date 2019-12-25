
    //É indicado sempre criar as variáveis dentro das funções, para evitar colisão

    //IFE
    (function(){ //função autoinvocável, boa prática para evitar colisão de variáveis no Escopo Global
        'use strict'; //Bom colocar dentro das funções IFEE, pois dessa forma não permitirá que criemos variaveis sem a palavra VAR dentro da function
        var isValid = false;
        console.log(isValid);


        function somar(arr){
            console.log(arguments);//arguments serve para destacar todos os parâmetros que foram passados aqui dentro
            var result = 0; //variável para armazenar os valores somados abaixo
            var x = 0; //variavel criada para poder criar o loop

            while(arguments[x]){ //Loop criado, enquanto arguments tiver elementos indicados por X, o loop continuará
                result += arguments[x]; //repetição e somando valores
                x++; //incremento para X
            };

            console.log('result: ',result); //console para mostrar a variavel result no console.
        };

        somar(20,20,10,30); //parâmetros passados dentro da function somar, passando os valores aqui, a soma do console acima será a respeito destes numeros.
    })()

