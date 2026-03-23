const express= require("express")
const app=express()

app.get('/', (req, res)=>
res.send("<h1>My first express app"))
app.listen(3000)