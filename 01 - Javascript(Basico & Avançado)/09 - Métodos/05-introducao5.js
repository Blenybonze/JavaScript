/*Método slice retorna um pedaço de uma array, não modifica o array original*/
arr = [10,20,30,40,50,60,70,80,90,100];
/*Aplicando o arr.slice(2, 5) por exemplo, irá mostrar os número que vem depois do segundo array, no caso do exemplo, o numero 30 em diante até o 50*/



/*Parecido com o slice, o metodo SPLICE é diferente pois conseguimos incluir, tirar elementos em arrays. é uma método muito flexível*/
/*Primeiro parametro: informando a posição onde começará a transformação da array
Segundo parametro: quantos elementos quero remover a partir da posição passada no primeiro parâmetro
Terceiro parametro ou mais: quantos elementos incluir*/
arr.splice(2, 0, 'limão','melão')
/*com esse método conseguimos expluir, incluir valores e elementos em qualquer lugar dentro de um array*/
