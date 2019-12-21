    var n1 = parseInt(prompt("Digite um número inteiro"));

    var indice = 1;
    //repita até que indice seja >= 1000

    while(indice<=1000){//Só entrará na repetição se a condição informada pelo While for verdadeira, exemplo indice<=1000, enquanto o indice for menor que 1000 essa estrutura se repetirá. Do contrário, não será lido.
        document.write(n1 +' x '+indice+' = '+ (n1*indice)+'<br>');//este comando não é utilizado profissionalmente, aqui é apeans um exemplo para a lógica de programação
        indice = indice + 1;
    }

    document.write("saiu do loop");