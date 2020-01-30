function testeSaltos(){
  for(var i = 0; i < 10; i++){
    console.log(i);
    if(i === 5){
      continue //interrompe temporariamente o loop
      //break; //sai do loop, mas n sai da função
      //return 'alguma coisa'; //Sai da função
    }
  }
  console.log('fim do loop');
}
var teste = testeSaltos();
console.log(teste);

var n = 10;

switch (n){
  case 0:
    console.log('switch 0');
    break;
  case 10:
    console.log('swtich 10');
    break;
  case 20:
    console.log('switch 20')
    break;
  default:
    console.log('switch default');
}