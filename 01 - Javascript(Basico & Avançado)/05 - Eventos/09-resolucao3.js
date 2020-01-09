<body>
    <form action="#">
        <textarea id="msg" cols="50" rows="10" readonly>
            Contrato de Alguma coisa.
        </textarea>

        <div>
            <label>
                <input type="checkbox" id="chk" checked>Li e Aceito os benditos termos
            </label>
        </div>
        <input type="submit" value="Continuar" id="btn">
    </form>
    <script>
        //Criando função autoinvocável para iniciar o desafio
        (function (){
            'use strict'

            //Criei duas variáveis para poder armazenar dados dos ID's do HYML(Botão e input checkbox)
            var $btn = document.getElementById('btn');
            var $chk = document.getElementById('chk');

            //Função para habilitar e desabilitar o botão
            btn();

            //Criando evento para o input checkbox, quando estiver ativado ou não(change) ele ativara uma função
            $chk.addEventListener('change', function(){
                //Função está, a mesma que chamamaos acima
                btn();

            });

            //Função para ativar ou desativar o botão
            function btn(){
                //Botão DESABILITADO recebera checkbox NÃO CHECADO
                //Se o botão estiver checado, o botão ficará normal
                $btn.disabled = !$chk.checked;
            }
            //FIMMMMMMMMMM
        })()
    </script>
</body>