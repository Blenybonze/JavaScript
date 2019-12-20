
    //Para calcular o resto é simples
    var n1 = prompt("Numero: ");
    n1 = parseInt(n1);

    var n2 = prompt("numero: ");
    n2 = parseInt(n2);

    var resto = (n1 % n2); //Resultado: n1 será dividido por n2, se a divisão não for exata terá resto, se for exata não terá resto.
    alert("Resto da divisão de "+n1+" por "+n2+" é: "+resto);
    //novo método de concatenação, basta interligar a variável fora das aspas duplas interligando-o com o sinal de +
