const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const path = require('path');
const Port=3000;



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.post('/',(req,res)=>{
    let data=req.body
    console.log(data);
      
})