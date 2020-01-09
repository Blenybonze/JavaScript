
    //metodos mais usados para trabalhar com Strings
    var teste = 'minha string linda';

    teste.length; // neste caso igual a 18 strings

    teste.replace('i','I'); //neste caso trocamos o primeiro i para maiúsculo
    teste.replace(/i/g,'I'); //Neste caso trocamos TODOS os i para maiúsculo


    teste.indexOf(' '); //Neste caso ele da o números de strings para chegar até o primeiro elemento buscado por parâmetro(Neste caso 5), neste caso, uma string vazia.
    teste.lastIndexOf(' '); //neste caso esse metodo procura pelo ultimo elemento pesquisado por parametro(Neste caso 12), aqui, como exemplo, também uma string vazia


    teste.slice(5); //Este método corta a string de acordo com o número que é colocado por parâmetro. a string original permanece intacta.
    teste.slice(5, 10) //Neste caso a string retorna cortada em dois pontos de sua totalidade. neste caso foi retirada até a casa 5 e depois da casa 10


    teste.substring(5); //Aqui temos uma opção semelhante a de cima(slice) porém aqui podemos fazer a inversão automática, como no exemplo abaixo
    teste.substring(10,5) // Ela retorna já fazendo a inversão.


    teste.split(' '); //Ele retorna um Array e utiliza o que foi utilizado por parametro para quebrar a string. Teste no console.
    //Neste exemplo ele separa em Array toda string que está entre espaços.(DICA: UTILIZADO COM O .LENGTH PODEMOS CONTAR AS PALAVRAS DENTRO DE UM TEXTO :D)


    teste.toUpperCase(); //Retorna a string toda miúscula
    teste.toLowerCase(); //Retorna a string para minuscula
