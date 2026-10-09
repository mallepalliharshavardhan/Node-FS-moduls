 const mobiles = [];


const getMobile= ((req,res,)=>{
    res.json({data:mobiles}) 
})

const createMobile = (req,res)=>{
    console.log("req body--- ", req.body)

    mobiles.push(req.body)
    res.json({Message: "New mobile added---", data:req.body})
}

const updateMobile =(req,res)=>{

    console.log("req body -----",req.body);

    res.json( " Update new mobile--" )
}

const deleteMobile = (req,res)=>{
    console.log("delete mobile--" );

    res.json({Mesage:"delete mobile", data:req.body})
}

module.exports = {getMobile,createMobile,updateMobile,deleteMobile};