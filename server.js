const express = require('express');

const app = express();

app.use("/",(req,res)=>{
    res.send("fcvghbjn")
})

app.listen(5000 , ()=>{
    console.log("Server Started.")
})