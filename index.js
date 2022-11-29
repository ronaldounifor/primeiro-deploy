const express = require("express");
const app = express();

app.get("/", function(req,res){
        res.send("Bem vindo ao meu TESTE");
    }
)

app.listen(4000, function(erro){
    if(erro){
        console.log("Erro ao iniciar");
    } else {
        console.log("Servidor iniciado");
    }
})