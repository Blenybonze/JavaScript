
    var Caneta = (function(window){
        'use strict'
        console.log(this);

        //funções utilizadas para construção é bom começar com a letra maiúscula
        function _caneta(preco, cor){
            var color = cor || 'black';

            //o operador New cria um objeto vazio
            //a palavra this referencia ao novo objeto criado
            this.preco = preco || 1;

            this.mudarCor = function(cor){
                if(cor !== 'red' && cor !== 'blue' && cor !== 'black'){
                    return;
                }
                color = cor;
            }

            this.pegaCor = function(){
                return color;
            }
        }

        return _caneta;
    })(window)
 