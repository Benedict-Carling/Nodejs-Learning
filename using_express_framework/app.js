const express = require('express');
// Package for webframework express
const path = require('path')
// Package for path utilites

const app = express();
// app.use means installing middleware
// creating a alias for static folder unknown to other outside server

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'))
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