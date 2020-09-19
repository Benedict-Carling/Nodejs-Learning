const http = require('http');
const fs = require('fs');

// res, response object is a pipeable stream
http.createServer((req,res)=>{
    // The readstream can take in json, images, html remember to specify correct type in write head
    const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200,{'Content-type': 'text/html'});
    readStream.pipe(res)
}).listen(3000);