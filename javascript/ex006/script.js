function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Olá, agora são ${hora} horas.`
    var hora = 9
    if (hora >= 0 && hora < 12) {
       img.src = 'imagem/manha.jpg'
        document.body.style.background = 'rgb(184, 164, 131)'
    } else if (hora > 12 && hora <= 18) {
        img.src = 'imagem/tarde.jpg'
        document.body.style.background = 'rgb(225, 158, 50)'
    } else {
        img.src = 'imagem/noite.jpg'
        document.body.style.background = 'rgb(34, 26, 66)'
    }
}