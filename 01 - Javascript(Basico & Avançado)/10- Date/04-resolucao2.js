
//criando a função
function formataDate(date){
    //Colhendo os dados de new Date para uma variável
    var date = new Date();
    //Apresentando a data no padrão do browser
    console.log('Data Brows:  '+date);

    //Colhendo o dia, mes e ano para variáveis
    var diaBr = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

    var mesBr = (date.getMonth() +1) < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1);

    var anoBr = date.getFullYear();

    //Variável que apresentará a data e retornará as informações formatadas no padrão BR
    var dataBr = 'Data BR: '+diaBr+'/'+mesBr+'/'+anoBr;

    //retornando var que formatou a Data
    return dataBr;
}

//apresentnado no console fora da função para teste
console.log(formataDate());
