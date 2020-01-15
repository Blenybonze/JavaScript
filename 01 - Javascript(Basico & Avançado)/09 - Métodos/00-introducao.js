
    //Para criar arrays temos duas formas, a formal e a literal
    //Literal
    var arr = ['sdsdsdsdd',20,3,4,'kjkl',5];



    //Metodo every retorna falso se apenas uma condição for falsa
    //Para ser verdade todas as condições tem que ser true
    var soNumeros = arr.every(function(el, indice, objeto){
        return typeof el === 'number';
    });

    //Para ser falso todos devem ser falso
    //Se tiver apenas um True, ele retorna true
    var aoMenosUmNumero = arr.some(function(el){
        return typeof el === 'number';
    });

    /*Serve para filtrar, neste caso solicitamos que o filter
    retornasse apenas os números da Array*/
    var numeros = arr.filter(function(el,i,arr){
        return typeof el === 'number'
    });

    //Este método cria loops sem criar variáveis
    arr.forEach(function(el, i, arr){
        console.log('el=', el,'  |  i=',i,'  |  i -',arr.toString())
    });

    //verificando a posição da string 'kjkl'
    var posicaoStr1 = arr.indexOf('kjkl');
    console.log('posicaoStr1',posicaoStr1);

    
    var posicaoStr2 = arr.lastIndexOf(20);
    console.log('posicaoStr2',posicaoStr2);


