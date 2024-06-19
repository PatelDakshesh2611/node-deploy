const express=require('express')
const app=express();
const cors=require('cors')

app.use(cors());

app.get('/',(req,res)=>{
    res.status(200).send('Landing page')
})
app.get('/page',(req,res)=>{
res.json({message:'good working'})
})
app.listen(4000,()=>{
    console.log('object')
})