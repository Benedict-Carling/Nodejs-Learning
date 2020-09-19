const fs = require('fs');

// Creating and Deleting Folders

// To note rmdir has to be used with a empty directory

fs.mkdir('tutorial',(err)=>{
    if(err)
        console.log(err);
    else
        fs.rmdir('tutorial',(err)=>{
            if(err)
                console.log(err)
            else
                console.log('deleted folder')
        })
})