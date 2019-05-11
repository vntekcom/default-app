const express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
//Load modules
const config = require('config');
//compression
const compression = require('compression');
app.use(compression(7));
//Session
const session = require('express-session');
app.use(session({
    secret: '07102018',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
//Nodemailer
const nodemailer = require("nodemailer");
const mailusername = config.get("smtp.username");
const mailpassword = config.get("smtp.password");
const transporter = nodemailer.createTransport('smtps://'+mailusername+'%40gmail.com:'+mailpassword+'@smtp.gmail.com');
//Start SRV
app.listen(process.env.PORT || '3000', ()=>{
    console.log("Server started!")
});

app.get('/',(req,res,next)=>{
    res.render("home",{
        title: "Defaul APP"
    })
});