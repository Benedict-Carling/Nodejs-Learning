const http = require('http');
// package for http servers

//res is response
//req is request
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write('Hello world from nodejs');
        res.end();
    }
    else{
        res.write('using other domain');
        res.end();
    }
});

server.listen('3000');