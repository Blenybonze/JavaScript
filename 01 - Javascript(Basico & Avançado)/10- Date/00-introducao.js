//Métodos do tipo DATE

var minhaData = new Date()
//Se utilizar Date sem usar padrão, ele passa a data atual.
/*Esta variável representa o objeto tipo Date que tem metodos  e propiedades
a data e horas não representam a hora atual do usuário e sim a data e hora que o objeto foi instanciado
Estas são: */


//Apresenta o dia da semana de 0 a 6
minhaData.getDay();

//Apresenta o dia do mês
minhaData.getDate();

//Apresenta o Mês de 0 sendo Janeiro e 11 sendo Dezembro
minhaData.getMonth();

//Apresenta o ano
minhaData.getFullYear();

//Mostra as horas atuais
minhaData.getHours();

//mostra os minutos
minhaData.getMinutes();

//Mostra um número de milisegundos a partir de 1 Janeiro de 1970
minhaData.getTime();

//Dessa forma setamos 0 milisegundos no objeto
minhaData.setTime(0);

//seta o dia do mês, por exemplo dia 23
minhaData.setDate(23)

//seta o ano
minhaData.setYear(1980);

//também podemos passar as informações dessa forma
//Por parâmetro (ano, mês, dia, horas, minutos, segundos, milisegundos)
minhaData = new Date(2017, 11, 23, 10, 47, 30, 500)

