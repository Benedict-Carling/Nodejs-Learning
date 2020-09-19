const express = require('express');
// Package for webframework express
const path = require('path')
// Package for path utilites
const bodyParser = require('body-parser');
// Package to parse body of post requests
const Joi = require('joi');
//Package to validate user inputs
const people = require('./routes/people')

const app = express();
// app.use means installing middleware
// creating a alias for static folder unknown to other outside server
app.use('/public',express.static(path.join(__dirname,'static')));
// Parses request for us, attaches to body of request object
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// You must call request when using custom middleware
// Whenever there is a request by the user 
app.use('/',(req,res,next)=>{
    console.log(req.url,req.method)
    // Also need to use 
    next();
})

app.use('/public',express.static(path.join(__dirname,'static')));

app.use('/people',people);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'))
})

app.post('/',(req,res)=>{
    console.log(req.body);
    const schema = Joi.object({
        email : Joi.string().trim().email().required(),
        lname : Joi.string().trim().min(5).max(10).required()
    });
    
    const validation = schema.validate(req.body);
    if(validation.error){
        console.log(validation.error)
        res.send(validation.error)
    }
    else{
        // database work here
        res.send('successfully posted data')
    }
})

app.get('/json',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index_json.html'))
})

app.post('/json',(req,res)=>{
    console.log(req.body);
    // database work here
    res.json({success: true})
})

app.get('/example',(req,res)=>{
    res.send('hitting example route');
})

app.get('/example/:name/:age',(req,res)=>{
    // Params is a route paramter
    // used for much have parameters
    console.log(req.params);
    // Query string is optional additions to url with ? after url with &
    // Used for non optional parameters
    console.log(req.query);
;    res.send(req.params.name+" : "+req.params.age);
})

app.listen(3000)