function contar() {
    var comeca = Number(document.getElementById('inic').value)
    var termina = Number(document.getElementById('termi').value)
    var pula = Number(document.getElementById('pula').value)
    var res = document.getElementById('res')

    if (pula <= 0) {
        alert('O passo não pode ser 0 ou negativo!')
        return
    }
    if (termina < comeca) {
        alert('O valor final não pode ser menor que o valor inicial!')
        return
    }

    res.innerHTML = 'Contando: <br>'

    for (var i = comeca; i <= termina; i += pula) {
        res.innerHTML += `${i} 👉 `
    }
    res.innerHTML += '🏁'
}