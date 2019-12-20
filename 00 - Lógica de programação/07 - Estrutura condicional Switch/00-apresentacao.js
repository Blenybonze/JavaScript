    var n = parseInt(prompt("digite um número"));

    switch(n){ //Aqui podemos implementar diversas cases para ocasiões diferentes.
        case 1:
            alert("boa escolha");
            break; //Sempre no fim da case é necessário colocar o break, se não colocar, o js rodará todas as cases até o default sem parar.
        case 2:
            alert("parabéns");
            break;
        case 3:
            alert("Quase lá");
            break;
        case 4:
            alert("Isso aí");
            break;
        case 5:
            alert("caramba");
            break;
        default: //para encerrer aplicamos o default e uma mensagem, neste caso não precisamos colocar o break
            alert("escolha de 1 a 5");
    }