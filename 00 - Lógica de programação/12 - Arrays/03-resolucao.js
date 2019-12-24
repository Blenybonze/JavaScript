        <h1>Lógica de programação com Javascript - exercício </h1>
        
        
        
        <script>
            
            var dias = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta','Sábado');
            
            var hoje = new Date(); //recebeu um novo objeto do tipo data.
            var diaSemana = hoje.getDay(); //retorna o dia da semana
            
            //Desafio: Mostrar um Alert com a mensagem. 'bem vindo(a), hoje é ....' de todos os dias da semana;
            
            alert('Bem vindo(a) hoje é '+dias[diaSemana]); //dessa forma colocamos a variável dias, que por sua vez tem os 7 dias da semana dentro de si, e dentro dos [] colocamos a variavel diaSemana, que indicara em número o dia coletado pela variável hoje.
               </script>