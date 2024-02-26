const http = require('http');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain; charset=utf-8');
    if(req.url==="/"){
        res.end('Trang chủ - Xin chào các bạn!');
    }else if(req.url==="/about"){
        res.end('Trang giới thiệu - Xin chào các bạn!');
    }else if(req.url==="/detail"){
        res.end('Trang chi tiết - Xin chào các bạn!');
    }else{
        res.end('Không tìm thấy trang');      
    }
})
server.listen(port,hostname,()=>{
    console.log(`May chu dang chay tai port ${port}`);
});