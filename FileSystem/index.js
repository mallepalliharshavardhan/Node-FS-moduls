const fs = require('filesystem');

fs.writefile("sample.txt","Harsha is Writing",(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("Sample.text file created")
})

