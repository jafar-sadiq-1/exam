const express =require('express')
const app=express();

app.listen(3000,()=>{
    console.log('server isfsdfjs running');
})

app.get('/',(req,res)=>{
    res.send('you cracked the server');
})

