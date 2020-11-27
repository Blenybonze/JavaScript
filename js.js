//metodos do objeto new Date()

const data = new Date();
console.log('o padrão a ser imprimido é:  '+data)

console.log()
console.log('Getters do date')
console.log()

//imprimir apenas o ano da data
console.log('apenas o ano:  '+data.getFullYear());

//Imprimir apenas o mês de 0 a 11(indicado somar +1 para não confundir)
console.log('apenas o mês:  ',data.getMonth()+1);

//Imprimir apenas o dia do mês
console.log('apenas o dia do mês:  '+data.getDate());

//Imprimir apenas a hora da data
console.log('apenas a hora da data:  '+data.getHours());

//Imprimir apenas os minutos da data
console.log('apenas os minutos da data:  '+data.getMinutes());

//Imprimir apenas os segundos da data
console.log('apenas os segundos da data:  '+data.getSeconds());

//Imprimir apenas a hora da data
console.log('apenas a hora da data:  '+data.getHours());

//Imprimir apenas os milissegundos da data
console.log('apenas os milissegundos da data:  '+data.getMilliseconds());

//Imprimir dia da semana de 0 a 6 (indicado somar +1 para não confundir)
console.log('apenas o dia da semana de 0(domingo) a 6(sabado):  ',data.getDay()+1);

console.log()
console.log()
console.log('Getters de conversão para String')
console.log()

//Este objeto também tem outros métodos chamados Getters de conversão
//Utilizado para imprimir a data como string

//Imprimir a data como string
console.log("imprimindo a data como string: ",data.toDateString());

//retorna uma string com a data local apenas
console.log('imprimindo a data local como string: ', data.toLocaleDateString());

//retorna uma string com o tempo
console.log('imprimindo uma string com o tempo: ', data.toTimeString());

//retorna uma string com o tempo local
console.log('imprimindo uma string com o tempo local',data.toLocaleTimeString());

//Retorna uma string com um formato universal(ISO 8601)
//o horário retornado será sempre com o fuso horário 0, ou seja:
console.log('Retorna uma string com um formato universal: ',data.toISOString());

//Retorna uma string apenas com a data e o tempo
console.log('string apenas com a data e o tempo:',data.toLocaleString());


