var altura = 0
var largura = 0
var vida = 1
var tempo = 15
var criaNivel = 2000

let nivel = window.location.search
nivel = nivel.replace('?', '')
if (nivel === 'facil') {
    criaNivel
} else if (nivel === 'normal') {
    criaNivel = 1500
} else {
    criaNivel = 750
}

const ajustaTela = () => {
    altura = window.innerHeight
    largura = window.innerWidth
}
ajustaTela()
const moscas = () => {
    let existe = document.getElementById('mosca')
    if (existe) {
        existe.remove()
        if (vida > 3) {
            window.location = 'gameover.html'
        } else {
            document.getElementById('v' + vida).src = '../imagens/coracao_vazio.png'
            vida++
        }

    }

    //random de posição
    let posicaoy = Math.floor(Math.random() * altura) - 90
    let posicaox = Math.floor(Math.random() * largura) - 90
    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy < 0 ? 0 : posicaoy
    //criar mosca//
    let mosca = document.createElement('img')
    mosca.src = '../imagens/mosca.png'
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosca.style.left = posicaox + 'px'
    mosca.style.top = posicaoy + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function () {
        this.remove()
    }
    document.body.appendChild(mosca)
}
const tamanhoAleatorio = () => {
    let classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosca'
        case 1:
            return 'mosca1'
        case 2:
            return 'mosca2'
    }
}

const ladoAleatorio = () => {
    let classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
let decremento = setInterval(function () {
    tempo -= 1
    if (tempo <= 0) {
        clearInterval(decremento)
        clearInterval(criarMosca)
        window.location.href = 'vitoria.html'
    }
    document.getElementById('tempo').innerHTML = tempo
}, 1000)

