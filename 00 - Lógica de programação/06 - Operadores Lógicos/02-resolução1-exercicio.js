
    /*
    Pedir para o usuário digitar dois
    números e mostrar uma mensagem informando se foi aprovado ou não.
    A nota de corte é 5.
    Contudo, se qualquer uma das notas for zero, reprova automaticamente.
    */

    var nota1 = parseInt(prompt("Digite a nota do primeiro semestre: ")); //Armazena a nota do primeiro semestre em uma variável
    var nota2 = parseInt(prompt("Digite a nota do segundo semestre: ")); //Armazena a nota do segundo semestre em uma variável

    var media = (nota1+nota2)/2; //Calcule a média em uma variável separada para facilitar as operações futuras.

    if((nota1 == 0)||(nota2 == 0)){ //Aplicaremos a primeira condição utilizando o operador ||(or) pois se uma das notas for igual a 0 o aluno já está reprovado.
        alert("Reprovado! Vai estudar!"); //má notícia para ele(a) :/
    }
    else{ // Se uma das notas NÃO for igual a 0 é um bom resultado, porém o aluno ainda não passou, pois a nota de corte é 5.
        if(media < 5){ //Se o aluno tirar uma média menor que 5 ele está reprovado.
            alert("Reprovado, a média mínima é 5 e sua média no valor de "+media+" não foi suficiente. VAI ESTUDARRR"); //má notícia para ele(a) DENOVO :/
        }
        else{ //Agora se for igual ou maior que 5 o aluno será APROVADO.
            alert("Média de "+media+" APROVADO!!!")
        }
    }
