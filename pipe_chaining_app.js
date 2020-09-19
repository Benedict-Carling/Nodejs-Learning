const fs = require('fs');
// filestream package
const zlib = require('zlib');
// compression pakage

const gzip = zlib.createGzip();

//Using Pipes

const readStream = fs.createReadStream('./example.txt','utf8');
const writeStream = fs.createWriteStream('example2.txt.gz');

// Pipe is shorthand version of code inside read, write stream handling
// pipes input into output
// gzip compresses each chuck
readStream.pipe(gzip).pipe(writeStream)
