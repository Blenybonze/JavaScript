
    <body>
        <h1>Lógica de programação com Javascript - exercício </h1>
        
        
        <div id="output"></div>
        
        <script>
            var pessoas = [
                {'nome': 'Bleny', 'email': 'bleny@gmail.com'}, 
                {'nome': 'Manoelly', 'email': 'manoelly@gmail.com'}, 
                {'nome': 'Miguel', 'email': 'miguel@gmail.com'},
                {'nome': 'Micael', 'email': 'micael@gmail.com'}
            ];
            
            var msg = '';
            
            for(var i=0; i < pessoas.length; i++){
                console.log(pessoas[i]);
                
                msg +='Nome: '+pessoas[i].nome+'<br>E-mail: '+pessoas[i].email+'<br><br>';
            }
            
            document.querySelector('#output').innerHTML = msg;
        </script> 
    </body>
