const express = require('express');
const path = require("path");
const app = express();
const port = 80;

//EXPRESS SPECIFIC CONFIG
app.use('/static',express.static('static')); //for serving static files

//PUG SPECIFIC PUG
app.set('view engine','pug') //set the template engine as pug
app.set('views', path.join(__dirname,'views')); //set the views directory

//ENDPOINTS
app.get('/', (req,res)=>{
    const con = "This is supposed to show up in the html page but i wrote this in the app.js and this looks cool";
    const params = {'title':'Pug example','content':con}
    res.status(200).render('index.pug',params)
})

//START THE SERVER
app.listen(port,()=>{
    console.log("The application started succesfully at port "+(port))
});

