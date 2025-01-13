function tabuada() {
    var num = document.getElementById('nume')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por Favor, digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option') //Comando para criar qualquer elemento em JS
            item.text = `${n} x ${c} = ${n*c}` //Informação que vai dentro do option
            item.value = `tab${c}` // Todo option precisa de um value
            tab.appendChild(item) // Adiciona um elemento filho
            c++
        }
    }
}