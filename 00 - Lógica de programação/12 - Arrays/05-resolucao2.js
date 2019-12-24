    <div id="output"></div>

    <script>

        var arr = new Array(25,30,45,28,0,12,78,64,60);

        var msg = '';

        var somaPar = 0;
        var somaImpar = 0;

        var output = document.querySelector('#output');



        //Mostrar na tela a soma dos números pares da array acimda.

        for(var i=0; i < arr.length; i++){ //Criei um for para a variável i chegar até o número de elementos que existem dentro da Array arr.
            if(arr[i] % 2 == 0){ //If para somente os números pares entrarem. arr[i] para se referir ao número do elemento que está Dentro do array
                msg += 'numero '+(i+1)+ '='+ arr[i]+'<br>'; //mensagem armazenando texto para exportar para o output
                somaPar += arr[i];//Variável responsável por comportar a soma dos npumeros pares que entrarem nesta condição
            }
            else{
                msg += 'numero '+(i+1)+' = '+arr[i]+' não é par<br>'; //mensagem armazenando texto para exportar para o output
                somaImpar += arr[i];//Variável responsável por comportar a soma dos npumeros pares que entrarem nesta condição
            }
        }
        alert('A soma total dos números pares digitados é de: '+somaPar);//Lançando informação para o Alert da soma
        alert('Já a soma dos números ímpares é de: '+somaImpar);//Lançando informação para o Alert da soma

        output.innerHTML = msg; //Lançando todo o texto da variável msg para o output


    </script>