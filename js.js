function verificaEstacao(mes) {
    let retorno = "";

    
switch(mes)
{

  case 'Janeiro':
  case 'Fevereiro':
  case 'Março':
    retorno = 'Verão!';
    break
  case 'Abril':
  case 'Maio':
  case 'Junho':
    retorno = 'Outono!';
    break
  case 'Julho':
  case 'Agosto':
  case 'Setembro':
    retorno = 'Inverno!';
    break
  case 'Outubro':
  case 'Novembro':
  case 'Dezembro':
    retorno = 'Primavera!';
}

    
  return retorno;
}

const mes = 'Maio'
console.log(verificaEstacao(mes));