const {readFileSync,writeFileSync} = require('fs');
const first  = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
// console.log(first,second);
console.log('start');
setTimeout(()=>{
    console.log('in set Time out function')
    writeFileSync('./content/result-sync.txt',`Here is a result : ${first} \n and \n ${second}`);
},10000)
console.log('end');
