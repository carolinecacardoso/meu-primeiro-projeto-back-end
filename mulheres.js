const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        "nome": 'Caroline Coelho',
        "imagem": 'https://media.licdn.com/dms/image/v2/D4D03AQGhygn9sKd5-g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698429308509?e=1736985600&v=beta&t=0BTsy_wFOKtyjIMVaZmDYwrDc24ZQoOH6zqHKiVu3UE',
        "minibio": 'Product Manager',
    },
    {
        "nome": 'Simara Conceição',
        "imagem": 'https://bit.ly/3LJIyOF',
        "minibio": 'Desenvolvedora e instrutora',
    },
    {   
        "nome": 'Iana Chan',
        "imagem": 'https://media.licdn.com/dms/image/v2/D4D03AQH94QQ7TrKasQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1686007268307?e=1736985600&v=beta&t=ytUAmJRJm17EM4tuwLtYmJDMHLls4-3ENK2HrH8Jwd0',
        "minibio": 'CEO & Founder da PrograMaria',
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)