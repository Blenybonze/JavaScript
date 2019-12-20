
    /*
    Pedir para o usuário digitar dois
    números e mostrar uma mensagem informando se foi aprovado ou não.
    A nota de corte é 5.
    Contudo, se qualquer uma das notas for zero, reprova automaticamente.
    */

        // OUTRA FORMA DE RESOLVER O PROBLEMA COM OS OPERADORES.

    var nota1 = parseInt(prompt("Digite a nota do primeiro semestre: ")); //Armazena a nota do primeiro semestre em uma variável
    var nota2 = parseInt(prompt("Digite a nota do segundo semestre: ")); //Armazena a nota do segundo semestre em uma variável

    var media = (nota1+nota2)/2; //Calcule a média em uma variável separada para facilitar as operações futuras.

    if((media >= 5)&&(nota1 > 0)&&(nota2 > 0)){ // Desta vez colocaremos diversas condições com o operador &&(and) para facilitar a nossa vida, e se todas forem verdadeiras, significará que o aluno está aprovado!
        alert("Parabéns, sua média foi de "+media+" e você foi aprovado"); //Boa notícia para ele(a) xD
    }
    else{ //Se uma das condições acima forem falsas, infelizmente o(a) aluno terá que estudar mais
        alert("Sentimos muito, mas sua média foi de "+media+" e você esta reprovado"); //má notícia
    }
