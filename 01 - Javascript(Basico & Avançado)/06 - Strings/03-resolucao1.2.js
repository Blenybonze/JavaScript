    var nomeTodo = 'Bleny Bonze Bernabe de Souza';

    //primeiro preciso coletar o pedaço da string que quero, neste caso o sobre nome 'Bonze' que começa na 6° casa e termina na 11°.

    var nomeFormatado = formatarNome(nomeTodo);

    function formatarNome(nomeTodo){
        //retornar "Souza, Bleny Bonze Bernabe"
        var posicaoUltimo = nomeTodo.lastIndexOf(' ');
        if(posicaoUltimo <= 0){
            return nomeTodo;
        }

        var ultimoNome = nomeTodo.slice(posicaoUltimo);
        console.log('ultimoNome', ultimoNome);

        var primeiroNome = nomeTodo.slice(0, posicaoUltimo-2);
        console.log('posicaoUltimo',posicaoUltimo);

        return ultimoNome +', '+primeiroNome;
    }

    console.log(nomeFormatado);

