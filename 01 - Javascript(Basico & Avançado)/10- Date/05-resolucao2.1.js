
var data = new Date();
data.setDate(9);
data.setMonth(2);

function formataDate(data){
    //dia recebe getDate(). se for menor que 10 concatena o 0 + getDate se não for será apenas o getDate normal
    var dia = data.getDate() < 10 ? '0' + data.getDate() : data.getDate();
    //mes recebe getMonth() se for menor que 10 concatena o 0 + getMonth se não for será apenas o getMonth normal
    var mes = (data.getMonth() + 1) < 10 ? '0' + data.getMonth() : data.getMonth();

    return dia + '/' + mes + '/' + data.getFullYear();
}

console.log(formataDate(data));
