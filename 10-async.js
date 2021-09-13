const {readFile,writeFile} =  require('fs');
readFile('./content/first.txt','utf-8',(err,res)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = res;
    readFile('./content/second.txt','utf-8',(err,res)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = res;
        writeFile('./content/result-async.txt',
        `Here is my result : ${first}  and ${second}`,
        (err,res)=>{
            if(err,res){
                console.log(err);
                return;
            }
            console.log(res);
        })

    })
})