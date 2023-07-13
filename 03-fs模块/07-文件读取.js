// 文件读取观书有感
// 为什么要进行文件读取操作：也是自动化,用脚本来做
// 1、读取fs模块
const fs = require('fs')

// 2、异步读取
// fs.readFile('./观书有感.txt', (err, data) => {
//     if(err) {
//         console.log('读取失败')
//         return 
//     }
//     // 用到之前的内容，将buffer转化成字符串的形式
//     console.log(data.toString())
// })

// 3、同步读取
let data = fs.readFileSync('./观书有感.txt')
console.log(data.toString())