const fs = require('fs');

// Rename Existing Files 

fs.rename('example.txt','newexample.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('successfully renamed file')
})