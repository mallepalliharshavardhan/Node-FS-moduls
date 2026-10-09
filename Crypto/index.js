const crypto = require('crypto');

const randomValue = crypto.randomBytes(16);

console.log(randomValue)
console.log( randomValue.toString("hex")
)


// Password Verification 
const regPassword = "hallo13"

const registeredHash = crypto
 .createHash("sha256")
 .update(regPassword)
 .digest("hex")

 console.log(`this is the registerd hashed password ---${registeredHash}`);


 const loginPassword = "hallo123";

 const loginHash = crypto
 .createHash("sha256")
 .update(loginPassword)
 .digest("hex")

 console.log(`this is the login hashed password ---${loginHash}`);

 if(registeredHash === loginHash ){
    console.log("Login sucessfull")
 }else{
    console.log("invaild password")
 }