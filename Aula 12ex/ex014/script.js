

var hora = new Date().getHours();
var corpo = document.querySelector('body#corpo');
var imagem = document.querySelector('div#imagem');
var frase = document.querySelector('div#frase');
var titulo = document.querySelector('h1#titulo')

console.log(hora)
console.log(imagem)

if(hora >= 0 && hora < 5){

    corpo.style.backgroundColor = 'rgb(199,150,100)'
    frase.innerText = `Agora são ${hora} hora(s)`
    imagem.innerHTML = '<div> <img src="./img/Noite Corte.jpg" width=200px"> </div>'
    titulo.innerText = 'Hora da Madrugada'

}else if(hora >= 5 && hora < 18){

    corpo.style.backgroundColor = 'rgb(199,150,150)'
    frase.innerText = `Agora são ${hora} hora(s)`
    imagem.innerHTML = '<div> <img src="./img/Manha Corte.jpg" width="200px"> </div>'
    titulo.innerText = 'Hora da Manha'

}else{

    corpo.style.backgroundColor = 'rgb(199,150,100)'
    frase.innerText = `Agora são ${hora} hora(s)`
    imagem.innerHTML = '<div> <img src="./img/Tarde Corte.jpg" width="200px"> </div>'
    titulo.innerText = 'Hora da Noite'

}