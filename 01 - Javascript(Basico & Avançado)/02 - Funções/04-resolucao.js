
    function calcularMedia(arr){//Criei a função com um parâmetro arr, para usarmos lá fora depois.
        console.log(arguments); //Console para mostrar os números que foram passados por parâmetro para dentro da function

        var x = 0; //Variável criada dentro da função
        var somador = 0; //Variável criada dentro da função
        var qtd = arguments.length;

        while(typeof arguments[x] == 'number'){ //TTPEOF == 'number' serve para arguments aceitar até mesmo o 0, pois neste caso 0 é considerado falso.
        //Loop de repetição utilizando arguments[x], sendo x = 0 com incremento. Enquanto existir indice dentro de arguments, o loop se repetirá.
            somador += arguments[x]; //Variável y absorve os valores passados por parâmetro, independente de quanto forem. Aqui os números serão somados
            x++;//Incremento
        };

        console.log('resultado: ',(somador/qtd)); //Aqui mostramos o resultado, fora do loop e dentro da function. Sendo o valor total de Y dividido pelo valor que X chegou, por exemplo, 3 números de parâmetro tornará x=3, se for 4 números x=4; Oque nos dá o resto exato.
    };

    calcularMedia(0, 5, 6, 9, 5);//Fora da function, CHAMAMOS A FUNÇÃO e apenas passamos os números que queremos tirar a média.

