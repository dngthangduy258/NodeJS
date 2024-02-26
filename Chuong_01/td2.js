const http = require('http');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain; charset=utf-8');
    res.end('Xin chào các bạn!');
})
server.listen(port,hostname,()=>{
    console.log(`May chu dang chay tai port ${port}`);
});