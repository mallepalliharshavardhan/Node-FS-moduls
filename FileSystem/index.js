 const fs = require('node:fs')

//  // ---------to create a txt file and add text   ----------------

//  fs.writeFileSync(" memory.txt"," Harsha is writing",(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("memory.txt created and written text in it ")
//  })

//  // ---------to create a txt file and add text using varaible   ----------------
//  const data ="To practice the intended sequence, set data to something like Harsha is Writing and run each operation only after the previous one completes"

//  fs.writeFileSync("memory.txt",data,(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("memory.txt created and written text in it using variable")
//  })

//    // ---------to read a txt file and --------------

//   fs.readFileSync("memory.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data)
//   })

//    // ---------to addtxt in a txt file  --------------

//    fs.appendFileSync("memory.txt","for Adding text use appendFile ",(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("adding text")
//    })

//     // ---------to rename  a txt file  --------------

//     fs.rename("sample.txt","old_sample.txt",(err)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         console.log("renamed file")
//     })

//       // ---------to check file exist --------------

//     //   console.log(fs.existsSync("old_sample.txt"))
//     //    console.log(fs.existsSync("sample.txt"))

// // if(fs.existsSync("oldsample.txt")){
// //     console.log('file exist')
// // }else{
// //     console.log("file not exist")
// // }


// // -------- to create folder -------

// fs.mkdir("mkdir",(err)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         console.log("create folder ")
//     })

    // -------- to read all folder -------

    fs.readdir(".", (err,file)=>{
        if(err){
            console.log(err)
            return
        }
        console.log("reading folder ",file)
    })
    // -------- to remove all folder ------- 
 fs.rmdir('mkdir',(err)=>{
        if(err){
            console.log(err)
            return
        }
        console.log("removed folders ")
    })

    //--------------------------------------

    const user ={
        id:111,
        name:"Harsha",
        age:22

    }

    fs.writeFileSync("user.JSON",JSON.stringify(user,null,2),(err)=>{
        if(err){
            console.log(err)
        }
        console.log(user)
    })

    fs.readFileSync("user.JSON","utf-8",(err,data)=>{
        if(err){
            console.log(err)
        }
        const user= data.parse(data)
        console.log(user.id)
    })

    //---- creating log file ---------
 

const log =`${new Date().toISOString()}-user logged in\n`;
    fs.appendFile("app.log",log,(err)=>{
        if(err){
            console.log(err)
            return
        }
        console.log("app.log file created")
    })