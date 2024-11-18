const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
response.json({
    "nome": 'Caroline Coelho',
    "imagem": 'https://media.licdn.com/dms/image/v2/D4D03AQGhygn9sKd5-g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698429308509?e=1736985600&v=beta&t=0BTsy_wFOKtyjIMVaZmDYwrDc24ZQoOH6zqHKiVu3UE',
    "minibio": 'Product Manager' 
})
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)