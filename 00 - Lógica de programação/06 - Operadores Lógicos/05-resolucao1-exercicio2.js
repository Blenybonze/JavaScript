    //Fazer jogador 1 digitar um numero
    var n1 = parseInt(prompt("Jogador 1, placar: "));

    //Fazer jogador 2 digitar um numero
    var n2 = parseInt(prompt("Jogador 2, placar: "));


    //se forem iguais, mostrar mensagem 'empate'
    if(n1==n2){
        alert("empate");
    }
    else{
        //sortear um numero entre 0 e 1
        var sorteio = parseInt(Math.random() * 2); 
        /*  Math.random() sorteia números aleatorios de 0 a 0,999
        porém quando multiplicamos *2 ele vai até 1,9999
        Colocando ele dentro de parseInt(...) não virá numeros quebrados, apenas 1 ou 0. Ou seja, exatamente o que o exercício quer.
        */

        //Mostre o número sorteado
        alert("Número sorteado: "+sorteio);


        //se o numero sorteado for 0, ganha quem escolher o número MENOR
        //se o numero sorteado for 1, ganha quem escolher o número MAIOR

        if((sorteio==0)&&(n1 < n2)||(sorteio == 1)&&(n1 > n2)){
            alert("Jogador 1 ganhou!")//Percebeu como ficou mais "fácil"? Implementamos diversas condições no IF, se nenhuma delas for verdadeira, só restará a vitória do jogador 2.
        }
        else
            alert("Jogador 2 ganhou!")
    }      
