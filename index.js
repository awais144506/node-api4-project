const express = require('express')

const server = express()

const port= process.env.PORT || 9000;
server.use(express.json());


server.get('/hello',(req,res)=>{
    res.json({message:"Hello World !"})
})


server.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})