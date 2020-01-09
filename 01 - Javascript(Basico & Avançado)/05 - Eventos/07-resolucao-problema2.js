<body>
    <textarea id="msg" cols="50" rows="10" maxlength="10"></textarea>
    restam <span id="restam"></span> caracteres

    <script>
        //Criamos uma função alto invocável
        (function(){
            //use strict para sempre cuidarmos das variáveis internas
            'user strict';

            var $txtMsg = document.getElementById('msg');
            var $resta = document.getElementById('restam');
            //atribuo o valor passado pela propiedade do HTML para uma variável JS
            var maxima = $txtMsg.maxLength;

            //atribuimos o valor que estiver em maxima e atribuímos em texto para dentro da Span na variável $resta
            $resta.textContent = maxima;


            //chamamos um evento para a $txtMsg
            $txtMsg.addEventListener('input', checkLength);

            function checkLength(e){
                var numeroLetrasDigitadas = this.value.length;
                $resta.textContent = maxima - numeroLetrasDigitadas;

                if($resta.textContent == 0){
                    alert('numero maximo de carácteres permitidos');
                }
            } 
        })()
    </script>
</body>