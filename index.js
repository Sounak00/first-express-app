const express= require("express")
const cors = require("cors");
const app=express()

app.use(express.json())
app.use(cors());

app.post('/sum', (req, res)=>{
    a=req.body.a
    b=req.body.b
    sum=Number(a)+Number(b);
    console.log(sum);
    res.json({ result: sum });
})
app.listen(3000)