function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('nas')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sex0')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Sua idade é ${idade} anos`
        var gênero = ''

        //ADICIONANDO IMG PELO JS
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
       
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/criança_h.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/adolescente_h.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto_h.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso_h.png')
            }
        } else {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/criança_m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/adolescente_m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulta_m.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosa_m.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }



}