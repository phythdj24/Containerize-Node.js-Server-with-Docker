import express from "express";

const app = express()

const PORT = process.env.PORT || 8000;

app.get('/', (req,res)=> {
    return res.json({message: "Hey,  I Am Nodejs in Container"})
})

app.listen(PORT, ()=> console.log(`server started at PORT:- ${PORT}`))