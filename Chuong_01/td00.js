const fs = require('fs');
fs.readFile('data.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
console.log('Đọc tệp bắt đầu, nhưng luồn chính tiếp tục chạy');