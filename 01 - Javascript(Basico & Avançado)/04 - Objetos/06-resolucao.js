
    var pessoa1 = {
        nome: 'daniel',
        sobrenome: 'tapias morales'
    }

    var pessoa2 = {
        nome: 'Bleny',
        sobrenome: 'Bonze'
    }

    var pessoa3 = {
        nome: 'João',
        sobrenome: 'da Silva'
    }





    for(var i = 1; i <= 3; i++){
        console.log(window["pessoa"+i].nome + ' '+ window["pessoa"+i].sobrenome);
    }