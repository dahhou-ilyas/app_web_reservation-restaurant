const express=require('express');
let nodemailer=require('nodemailer')
const bodyParser=require('body-parser');
const mongoose=require('mongoose')
const Reservation=require('./models/reservation')
const app=express();
const path = require('path');
const Port=3000;
//créer un transport
var transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: 'gogo.great2020@gmail.com',
      pass: 'jtdryxvakudsaozt'
    }
  });
  
//
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//connecter avec mongoose
mongoose.connect("mongodb+srv://ilyas:ilyas@cluster0.eprpclj.mongodb.net/reservation?retryWrites=true&w=majority",{useNewUrlParser: true})
  .then( result => {
    console.log("ilyas");
  })
  .catch( err => {
    console.log(err);
  }); 

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
    let mailOptions={
        from:'gogo.great2020@gmail.com',
        to:data.email,
        subject:'reservation dans LOS POLLOS',
        text:`votre réservation est validée monsieur
        ${data.nom} ${data.prenom} le ${data.date}`
    }
    const reservation=new Reservation(data)
    console.log(data);
    reservation.save()
    .then((result)=>{
        res.sendFile(path.join(__dirname+'/views/index.html'))
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    }).catch((err)=>{
        console.log(err);
    })
})
  
  
  app.listen(Port,()=>{
      console.log('app listen in 3000');
  })