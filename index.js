const express=require('express')
const app=express();
const cors=require('cors')

app.use(cors());

app.get('/',(req,res)=>{
    res.json({message:'working fine'})
})

app.listen(4000,()=>{
    console.log('object')
})