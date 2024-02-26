const http = require('http');
const url = require('url');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res)=>{
    const parseUrl = url.parse(req.url, true);

    //VD url: http://localhost:3000/?name=Khang2&age=20
    const queryParameter = parseUrl.query;

    const name = queryParameter.name;
    const age = queryParameter.age;

    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain; charset=utf-8');
    res.end(`Name: ${name}, age: ${age}`);
})
server.listen(port,hostname,()=>{
    console.log(`May chu dang chay tai port ${port}`);
});