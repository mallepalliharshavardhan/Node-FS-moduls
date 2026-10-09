const express = require("express")

const app = express();

const port = 5000;

app.use(express.json())

app.use((req,res,next)=>{
    console.log('Middleware Executes');
    next();
})

app.use((req,res,next)=>{
    console.log("Request received");
    next();
})

app.get("/",(req,res)=>{
    console.log("api call");
    res.send("Harsha is sending get request")
})

app.get("/products/:id",(req,res)=>{
    console.log(`the product id is ${req.params.id}`);
    res.send(`the product id is ${req.params.id}`);
})

app.get("/products", (req,res)=>{
    console.log(req.query );
    res.send(req.query)
})

app.get('/users',(req,res)=>{
    console.log(req.query);
    res.send(req.query)
})
app.post("/users",(req,res)=>{
    console.log( req.body);
    res.send(req.body)
    
})

app.put("/users",(req,res)=>{
    console.log("update user")
    res.send("User Updated Sucessfully")
})

app.delete("/users",(req,res)=>{
    console.log("delete user")
    res.send("User deleted Sucessfully")
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

