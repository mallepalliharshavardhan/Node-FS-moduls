 const fs = require('node:fs')

 // ---------to create a txt file and add text   ----------------

 fs.writeFile(" memory.txt"," Harsha is writing",(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("memory.txt created and written text in it ")
 })

 // ---------to create a txt file and add text using varaible   ----------------
 const data ="To practice the intended sequence, set data to something like Harsha is Writing and run each operation only after the previous one completes"

 fs.writeFile("memory.txt",data,(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("memory.txt created and written text in it using variable")
 })

   // ---------to read a txt file and --------------

  fs.readFile("memory.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(data)
  })