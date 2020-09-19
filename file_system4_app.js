const fs = require('fs');

// Delete Files

fs.unlink('newexample.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('successfully deleted file');
})