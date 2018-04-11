const express =require('express');
const app = express();
const fs = require('fs');
const bodyParser =require('body-parser');
const cookieParser =require('cookies-parser');
const cors = require('cors');
const session = require('express-session');

app.use(cors());
app.use(bodyParser());
app.use(cookieParser())

app.get('/', function(req,res){
    
})

app.post('/login',function(req,res){
    let email = req.body.email;

    if(email=="admin@gmail.com"){
        req.session.email=="admin@gmail.com";
        let user={
            email:"admin@gmail.com",
            name:"admin"
        }
        req.session.user = user;
        res.send(user);
    }
    else{
        res.status(403).send("Forbidden");
    }
})

app.listen(3001,function(req,res){
    console.log("Success Connect to API");
})