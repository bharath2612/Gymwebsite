const express = require('express');
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

//EXPRESS SPECIFIC CONFIG
app.use('/static',express.static('static')); //for serving static files
app.use(express.urlencoded());

//PUG SPECIFIC PUG
app.set('view engine','pug') //set the template engine as pug
app.set('views', path.join(__dirname,'views')); //set the views directory

//ENDPOINTS
app.get('/', (req,res)=>{
    const params = {'title':'Pug example',}
    res.status(200).render('index.pug',params)
})
app.post('/',(req,res)=>{
    namee = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    about = req.body.about;
    let outputToWrite = `The name of the client is ${namee}, age is  ${age}, ${gender} , residing at:  ${address}, More about him/her:  ${about}`;
    fs.writeFileSync('Output.txt',outputToWrite);
    const params = {'message':'Your form has been submitted successfully',}
    res.status(200).render('index.pug',params)
})
//START THE SERVER
app.listen(port,()=>{
    console.log("The application started succesfully at port "+(port))
});

