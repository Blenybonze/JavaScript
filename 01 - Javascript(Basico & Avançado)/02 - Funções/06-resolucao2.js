
(function(){
    //Criando variáveis que terão os valores que serão calculados
    var peso = 80;
    var altura = 1.80;



    //Função simples, com parametros de peso e altura, dentro dela retornaremos para calcularIMC(peso, altura) o resultado deste calculo
    function calcularIMC(peso, altura){
        return peso / (altura*altura);
    }


    //Variável imc criada que receberá o valor retornado de calcularIMC(peso, altura)
    var imc = calcularIMC(peso, altura);


    //Função que como parâmetro passará o imc, que já contem o resultado do calculo de peso / altura²
    function classificaIMC(imc){

        //Agora basta criar condições com o parametro/variável imc para retornar a string com as classificações
        if(imc <= 16.9){
            return 'Muito abaixo'
        }
        else if(imc >= 17 && imc <= 18.4){
            return 'Abaixo do peso'
        }
        else if(imc >= 18.5 && imc <= 24.9){
            return 'Normal'
        }
        else if(imc >= 25 && imc <=29.9){
            return 'Sobrepeso'
        }
        else if(imc >= 30 && imc <= 39.9){
            return 'Obesidade'
        }
        else
            return 'Obesidade Grave'
    }

    //variável que receberá o valor retornado de classificaIMC(imc).
    var classificacao = classificaIMC(imc);

    //Passando para o console a variável classificacao, que contém a string do resultado / avaliação do calculo
    console.log('Classificação IMC: '+classificacao);
})()
