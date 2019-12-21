    var n1 = parseInt(prompt("Digite um número inteiro"));

    var indice = 1;
    //repita até que indice seja >= 1000

    do{ //do while garante que a condição seja executada ao menos uma vez, se chegar no while e a condição for falsa, ele para de repetir e segue o código.
        document.write(n1 +' x '+indice+' = '+ (n1*indice)+'<br>');//este comando não é utilizado profissionalmente, aqui é apeans um exemplo para a lógica de programação
        indice = indice + 1;
    }
    while(indice<=1001)

    document.write("saiu do loop");
