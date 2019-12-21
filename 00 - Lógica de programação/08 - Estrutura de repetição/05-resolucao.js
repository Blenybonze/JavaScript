    var n1 = parseFloat(prompt("Digite um número inteiro"));

    var indice = 1;

    //informo uma variável, uma condição e um incremento
    while(indice <= 1000){
        document.write(n1+'x'+indice+'='+(n1*indice)+' <br>');

        if(indice % 10 === 0 && indice > 0){
            document.write('<hr');
        }

        indice = indice + 1;
    }
