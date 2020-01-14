
    //Dessa forma o valor da string seria 10
    var n = new Number('1010101010');

    //trata casas decimais, neste exemplo ele mostrará apenas duas casas decimais, mas o número permanece intactio, só muda no que é mostrado.
    n.toFixed(2);
    //neste caso se tiver mais casas do que o numero original, preencherá com zeros
    n.toFixed(10);


    //diz não quantos digitos tem nas casas decimais, mas sim quantos digitos tem no total.
    n.toPrecision(2); //retornará apenas os dois primeiros dígitos.
    //se for maior que o original, completará com zeros
    n.toPrecision(10)

    //transforma um número em string e converte o formato
    n.toString(2); //vantagens é mudar o formato do número para binários, hexadecimal ou octal. NESTE CASO PASSADO PARA BINÁRIO

    //serve para retornar a anotação científica de um número
    //exemplo: 10 é igual a 1e+1
    n.toExponential();

