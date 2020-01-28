
  //O BOM vem ainda antes do DOM
  //Serve para interagir diretamente com o Browser

  //retorna o tamanho atual do browser, varia sempre que o tamanho muda
  innerHeight

  //Retorna a largura atual do Browser, varia
  innerWidth

  //altura e largura externas, tamanho fixo
  outerHeight //Altura
  outerWidth //Largura

  //retorna quanto a página foi scrollada
  pageXOffset //Scroll para o lado
  pageYOffset //Scroll para baixo ou cima

  //posição da janela em relação ao monitor
  screenX
  screenY

  //Navegando no historico pelo history
  history.go //Avança a página navegada
  history.back //Volta a página

  //Location retorna diversos objetos.
  location 
  location.href //retorna a url que está navegando
  location.hash //identifica hastag na url
  location.search //colhe informações que são passadas pela url
  location.reload() //atualiza a página
  location.assign() //ele vai abrir uma página no navegador e registrar no historico
  location.replace() //Faz a mesma coisa que o assign porém o history.length não é alterado.

  //Objeto navigator: Uma série de informações referêntes ao ambiente de hospiedagem quando utilizamos o browser
  Navigator //Retorna todas as informações que ele acessa.

  //Objeto Screen: é referênte ao monitor do usuário, independente do browser
  screen //Retorna informações sobre a tela de monitor.

  //Metodos do BOM
  alert()
  prompt()
  confirm()

  window.open()//Abre uma janela, passada por parâmetro 
  window.close()//Close só funciona se abrir a tela com o open. caso contrário não funciona

  scrollTo() //Escolla a pagina até um local e fica fixo/Necessário colocar 2 valores (eixo x, Eixo y)
  scrollBy() //Muda independente de quantas vezes for alterada/Também passa 2 valores (X, Y)

  print() //Inicia uma impressão da página