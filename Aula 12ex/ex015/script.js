function carregarMascara(self){
    
    $(self).mask("#000", { reverse: true });
}

function carregarinformacoes(){

    var RespostaHTML = document.querySelector('div#informacoes')
    var numero = Number(document.querySelector('input.numero').value)
    var sexo = document.querySelector('input[name="gender"]:checked') // Pega o valor do input radio selecionado com o name = gender
    var anos = new Date().getFullYear() - numero;
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(anos <= 0 && numeo < new Date().getFullYear()){

        RespostaHTML.innerHTML = '<div style="text-align: center;">Ano Incorreto</div>'

    }else if(sexo.value == 1){

        genero = 'Homen'

        if(anos <= 5){

            img.setAttribute('src', 'foto-bebe-m.png')

        }else if(anos <= 19){

            img.setAttribute('src', 'foto-jovem-m.png')

        }else if(anos <= 60){

            img.setAttribute('src', 'foto-adulto-m.png')

        }else{

            img.setAttribute('src', 'foto-idoso-m.png')

        }

    }else{
        
        genero = 'Mulher'

        if(anos <= 5){

            img.setAttribute('src', 'foto-bebe-f.png')

        }else if(anos <= 19){

            img.setAttribute('src', 'foto-jovem-f.png')

        }else if(anos <= 60){

            img.setAttribute('src', 'foto-adulto-f.png')

        }else{

            img.setAttribute('src', 'foto-idoso-f.jpg')

        }
    }

    RespostaHTML.style.textAlign = 'center'
    RespostaHTML.innerHTML = `Detectamos um(a) ${genero} com ${anos} ano(s)`
    RespostaHTML.appendChild(img)
}