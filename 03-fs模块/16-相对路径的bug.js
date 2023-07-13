/* 
    解决bug
*/
// 绝对路径
// __dirname; 绝对路径中的'全局变量',保存的是:所在文件的所在目录的绝对路径
// console.log(__dirname)
// 路径的补充说明
const fs = require('fs')

// 相对路径
fs.writeFileSync(__dirname + '/index.html', 'love')
