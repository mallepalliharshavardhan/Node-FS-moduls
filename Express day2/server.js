const express = require("express");

const mobileRoutes = require("./routes/mobilesRoutes")

const app = express();

const port =7000;

app.use(express.json());

app.use("/mobiles",mobileRoutes);

app.use((req,res,next)=>{
     console.log('Middleware Executes');
    console.log("request recieved");
    next();
})

app.get("/",(req,res)=>{
    console.log("get request");
    res.send("GET request");
})

// route parameters -- reads values from the URL path, such as /products/101.
// Example: getting a specific product by its ID

app.get("/products/:id",(req,res)=>{
  console.log(req.params.id);
  res.send(req.params.id);
})

// route query --reads values after ?, such as /products?brand=Samsung 
// Example: filtering products by brand and category

app.get("/products/",(req,res)=>{
    console.log(req.query);
    res.send(req.query);
})

// post route - used to write data Example: submitting details to create a user

app.post("/users",(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

// PUT route -to update the data
app.put("/users",(req,res)=>{
    console.log(" update User");
    res.send("update user");
})

app.listen(port, (req,res)=>{
    console.log(`Server is running on port ${port}`);
})