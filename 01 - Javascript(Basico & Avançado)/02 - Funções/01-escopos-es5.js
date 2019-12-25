
    console.log('------------------');

    var x = 0;
    var y; //Dessa forma será undefined, pois n terá valor atribuído

    function mostraX(){ //Os valores de uma variável dentro de uma função não afeta valores fora da função
        var x = 10;//Criando variável no Escopo Local - essa variável só existe dentro da função

        //x = 10; //Já aqui atribuímos um valor a variável que foi criada no escopo GLOBAL

        var y = 20;//Aqui ela terá um valor agregado, porém apenas dentro da função

        //y = 20; //Variável criada dentro do escopo sem a palavra VAR automaticamente é transferida para o escopo GLOBAL. Do contrario, colocando a palavra VAR, ela é declarada como inexistente, pois no escopo global ela não foi criada
        console.log('mostra x: ', x);
        console.log('mostra y: ', y);
    };



    mostraX();

    console.log('mostra X: ', x);
    console.log('mostra Y: ', y);
