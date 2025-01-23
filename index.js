const express = require("express");
const app = express();
const port = 3000;

app.set('view engine','ejs');

app.get("/:nome/:tel",(req,res)=>{

    var nome = req.params.nome;
    var tel = req.params.tel;
    res.render("index",{
        nome:nome,
        tel:tel
    });
});

app.get("/sobre",(rec,res)=>{
    res.render("sobre");
});

app.listen(port,()=>{
    console.log("porta = "+ port);
});