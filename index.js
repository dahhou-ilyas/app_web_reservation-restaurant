const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const path = require('path');
const Port=3000;

//
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// lire les fichier static
app.use(express.static('public'));

//les routes 
app.get('/form',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/form.html'))
  })
  app.get('/',(req,res)=>{
      res.sendFile(path.join(__dirname+'/views/index.html'))
  })
  
  app.post('/',(req,res)=>{
      let data=req.body
      console.log(data);
      res.sendFile(path.join(__dirname+'/views/index.html'))
        
  })
  
  
  app.listen(Port,()=>{
      console.log('app listen in 3000');
  })