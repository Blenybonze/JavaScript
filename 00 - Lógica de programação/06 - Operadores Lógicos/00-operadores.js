//OPERADORES LÓGICOS

//  !   Não(not)    1°
//  &&  E(and)      2°
//  ||  Ou(or)      3°


/*
    CONTROLE DE DECISÃO
    
    Se nota1 > 0 E nota2 > 0 E media > 5
        Mostrar mensagem de parabéns;
        
    Senão
        Mostra mensagem de Reprovação;
*/


/*
    EXEMPLO:
    
    var x = 1; var y = 2;
    ======================================================================

    x < y && x > 3 - OPERADOR E(and)as duas devem estar verdadeiras para ser true
    Resultado: false 
    ----------------------------------------------------------------------
    x < y && x < 3
    Resultado: true
    ======================================================================
    x < y || x > 3 - OPERADOR OU(or). Se uma for verdade o resultado é true
    Resultado: true
    ---------------------------------------------------------------------- 
    x > y || x < 3 
    Resultado: true
    ----------------------------------------------------------------------
    x > y || x > 3
    Resultado: false
    ======================================================================
    !(x > y) - OPERADOR NÃO(not) Inverte a resposta. Exemplo, x é maior que y? não, porém com o NOT aplicado se tornará resposta true. Interprete desta forma: "X não é maior que Y - true"
    Resultado: true
*/