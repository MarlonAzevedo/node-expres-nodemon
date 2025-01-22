const express = require("express");
const app = express();
const port = 3000;

app.set('view engine','ejs');

app.get("/",(rec,res)=>{
    res.render("index");
});

app.get("/sobre",(rec,res)=>{
    res.render("sobre");
});

app.listen(port,()=>{
    console.log("porta = "+ port);
});