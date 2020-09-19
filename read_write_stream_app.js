const fs = require('fs');

//Using readstream and write stream

//Good because you do not need to wait till data is loaded to process

//Also good uses a smaller buffer size when handling large files

const readStream = fs.createReadStream('./example.txt','utf8')
const writeStream = fs.createWriteStream('example2.txt');

// attached an eventlistner to the readsteam everytime
// a chunk is emmitted it is processed by callback function

readStream.on('data',(chunk)=>{
    console.log(chunk);
    writeStream.write(chunk);
});

