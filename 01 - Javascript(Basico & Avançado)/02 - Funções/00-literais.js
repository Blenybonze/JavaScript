
    //semantica literal para criar uma função
    function somar(n1, n2){ //função recebendo dois parâmetros
        //corpo da função
        return n1 + n2; //fazendo a função retornar estes valores;
    }

    var soma = somar(10, 20); //os dois parâmetros que 'somar' recebeu agora tem o valor de 10, 20, na função somar, no fim dela, ordenamos que retorne a soma de n1 + n2. Se soma é = a function somar, significa que ela guarda o valor do resultado da soma.
    console.log('resultado: ',soma);//No console ele concatena com virgulas, mostrando o valor de soma

    somar.teste = 'propriedade da funcao'; //aqui atribuimos uma propriedade .teste na function somar, agregando um valor de string.

    console.log(somar.teste) // aqui passamos como parâmetro a function juntamente da sua propriedade

    var teste = function(str){ //estamos criando uma função anonima(sem nome). Mesmo que n faça sentido agora, há a possibilidade de criar-la sem nome / também atribui um parâmetro str na mesma
        console.log('teste',str);//concatenei o parametro aqui
    }
    teste('olá'); //chamei o parametro aqui.
