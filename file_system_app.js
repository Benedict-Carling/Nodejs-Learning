const fs = require('fs');

// Create a File
fs.writeFile('example.txt',"hello new file in which we are writing",(err)=>{
    if(err)
        console.log(err);
    else
        console.log('File successfully created');
        // Buffer Stream stores data in binary, you need to specify encoding to read files
        fs.readFile('example.txt','utf8',(err,file)=>{
            if(err)
                console.log(err);
            else
                console.log(file);
        })
});