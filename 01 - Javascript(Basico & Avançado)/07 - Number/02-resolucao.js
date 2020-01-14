
    function calcularMedia(){
        var total = 0;
        var qtd = arguments.length;
        var x = 0;

        while(typeof arguments[x] === 'number'){
            total += arguments[x];
            x++;
        }
        return (total / qtd).toPrecision(2);
    }

    var media = calcularMedia(10, 20, 30);
    alert(media);
