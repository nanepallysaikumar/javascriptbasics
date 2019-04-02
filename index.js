const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json()); // body parser is required to get data from http body data

const data = {
    username: "user",
    password: "sai@6793"
}

app.get('/', function(req,res) {
    res.send("Hello WOrld saikumar");
    console.log("hi i am listening to the port");
});

app.post('/', function(req,res) {
    console.log("userdata",req.body)
    if(req.body.name === data.name && req.body.password) {
        res.send("login Successfull");
    }
    else {
        res.send("Login Failed");
    }

})

app.listen(4444);