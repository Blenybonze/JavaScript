    var nometodo = 'Bleny Bonze Bernabe de Souza';

    //primeiro preciso coletar o pedaço da string que quero, neste caso o sobre nome 'Bonze' que começa na 6° casa e termina na 11°.

    //Crio uma variável com strings vazias
    var snome = '';

    //função responsável por pegar apenas o sobrenome Bonze
    function pegarSnome(){
        snome = nometodo.substring(6, 11); 
    } 
    //Chamo a Função
    pegarSnome();
    //Criando alert responsável por mostrar na tela o nome formatado
    alert(snome+', '+nometodo.split('Bonze')[0]+nometodo.split('Bonze')[1]);
