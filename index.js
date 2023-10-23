const http=require('http');
const hostname='0.0.0.0';
const port=3000;
const server =http.createServer((req,res)=>{
    res.end("done");
})

server.listen(port,hostname,()=>{
    console.log("done");
})