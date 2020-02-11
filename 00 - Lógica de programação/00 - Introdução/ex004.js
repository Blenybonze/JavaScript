var nome = window.prompt("Qual é o seu nome?");

//write escreve no body
document.write(`Olá, <strong>${nome}</strong>. Seu nome tem ${nome.length} letras<br>`)
document.write(`Seu nome em Maiúsculas é ${nome.toUpperCase()}, legal né?<br>`)
document.write(`Já em minúscula fica ${nome.toLowerCase()}`)
