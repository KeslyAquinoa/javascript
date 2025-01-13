function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são exatamente ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'imgs/manha.png'
        document.body.style.background = '#948815'
    } else if (hora >=12 && hora < 18) {
        //BOA TARDE
        img.src = 'imgs/tarde.png'
        document.body.style.background = '#A0590C'
    } else {
        //BOA NOITE
        img.src = 'imgs/noite.png'
        document.body.style.background = '#293334'
    }
}