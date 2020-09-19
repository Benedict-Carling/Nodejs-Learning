const fs = require('fs');

// Append to Files

fs.appendFile('newexample.txt',"\nthis data is being appended",(err)=>{
    if(err)
        console.log(err)
    else
        console.log('successfully apended data to file')
})