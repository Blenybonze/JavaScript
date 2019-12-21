    /*
    Exercício Proposto
    Para este exercicio aplique a lógica necessário para mostrar os anos que são realmente bissextos, respeitando a regra: Os anos bissextos são múltiplos de 4, não múltiplos de 100 (1900 não é bissexto) e múltiplos de 400 (2000 é bissexto). (fonte:http://www.ponteiro.com.br/bisse.php)
    */


    var ano = 1004;

    while(ano <= 2020){//enquanto for menor que 2017, a condição se reptirá
        if((ano%4===0) && (ano%100>=1) || (ano%400==0)){ //Condição só passara pelo if se a var ano for dividida por 4 e ter 0 de resto E for dividida por 100 e ter resto de 1
        document.write(ano + '<br>'); //mostrando os anos
        }
        //ano = ano + 4;
        ano += 4; //mesma coisa que a opção acima
    }