
    function mudarcor(cor){
        console.log(this);
        this.cor = cor;
    }

    var caneta1 = {
        cor: 'vermelha',
        mudarCor: mudarcor
    }

    var caneta2 = {
        cor: 'azul',
        mudarCor: mudarcor
        }


    caneta1.mudarCor('green');
    console.log(caneta1);
