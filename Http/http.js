const http = require('http')

const server= http.createServer( (req,res)=>{
    res.end("harsha will get job soon")
});

server.listen(5000)
