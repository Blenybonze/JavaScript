
    //Para calcular um número elevado a outro é desta forma:
    var n1 = prompt("Numero: ");
    n1 = parseInt(n1);

    var n2 = prompt("numero: ");
    n2 = parseInt(n2);

    var mult = (n1 ** n2); //Resultado: n1 será multiplicado por ele mesmo até o valor de n2, exemplo: 2 ** 4 = 2x2x2x2 = 16 .
    alert("Resultado de "+n1+" elevado a "+n2+" é de:" +mult);
    //novo método de concatenação, basta interligar a variável fora das aspas duplas interligando-o com o sinal de +