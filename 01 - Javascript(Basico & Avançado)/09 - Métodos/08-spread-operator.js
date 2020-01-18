/*Spread operator serve para acessar os parametros como argumentos
 para dentro de uma função, exemplo:*/
//exemplo utilizando uma função que tira a média
calcularMédia(...[2,3]);
//retornará 2.50

//porém se não utilizarmos os ...
calcularMédia([2,3]);
/*retornará 0.00, pois dessa forma o 2 e 3 são apenas um argumento só,
 e dessa forma não pode-se tirar a média conforme no exemplo*/