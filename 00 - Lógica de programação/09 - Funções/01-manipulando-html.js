    <h1>Lógica de programação com Javascript - Manipulando o HTML com JS</h1>

    <div id="output"></div>

    <script>
        //Manipulando o HTML pelo JS

        var output = document.querySelector("#output");//toda vez que eu preciso acessar um elemento no html, independente de quem seja, deve-se utilizar sempre a palavra document. - no caso o querySelector ele vai selecionar no mundo HTML um elemento que tenha o ID #outupt, se fosse classe .output

        var mensagem = '';
        for(var i = 0; i < 1001; i++){ //cada interação no loop agrega na variável mensagem.
            mensagem += 'i: '+i+'<br>'
        }


        console.log(output);//enquanto estou desenvolvendo eu posso pedir para demonstrar no console do browser, mas deve-se ser tirado depois



        output.innerHTML = mensagem/*Apliquei um texto no html pelo JS*/

    </script>       