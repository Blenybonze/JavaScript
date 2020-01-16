
var arr = ['sdsdsdsdd',20,3,4,'kjkl',5];

var numeros = arr.filter(function(el,i,arr){
return typeof el === 'number'
});

/*reduce pode executar qualquer expressão, precisam de dois 
parametros. Pode substituir um loop
Neste caso utilizei o reduce para somar os números de um
array*/
var somaDeArr = numeros.reduceRight(function(anterior, atual){
    return anterior + atual;
});
console.log(numeros);
console.log(somaDeArr);

var testeReduce = ['1','2','3','4','5'].reduceRight(function(i,a){
    return i + a;
});
console.log(testeReduce);

/*metodo que modifica a array original, reverte a ordem que os
    arrays foram criados*/
var arr = [10,20,30];
arr.reverse()
console.log(arr);
