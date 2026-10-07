 const fs = require('node:fs')

 // ---------to create a txt file and add text--

 fs.writeFile(" memory.txt"," Harsha is writing",(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("memory.txt created and written text in it ")
 })