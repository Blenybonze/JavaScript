
    //PEDIR PARA O USUÁRIO DIGITAR DOIS NÚMEROS E MOSTRAR UM BOOLEAN INDICANDO SE A MÉDIA FOR MAIOR QUE 5

    var n1 = parseFloat ( prompt("Numero um numero: "));
    //Poupando linhas de código colocando o parseFloat na mesma linha que o prompt
    var n2 = parseFloat ( prompt("Numero um numero: "));

    //criando variável que seja a resposta do calculo
    var media = (n1 + n2)/2;

    //criando um alert com um boolean(true ou false)
    alert(media > 5);


