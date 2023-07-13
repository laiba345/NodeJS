// 1、导入fs模块
const fs = require('fs')

// 2、追加写入文件
// fs.appendFile('./座右铭.txt',',就是HK老师', err => {
//     if(err) {
//         console.log('写入失败')
//         return 
//     }
//     console.log('写入成功')
// })

// 同步追加写入
// 追加的时候，可以换行追加等
// 
fs.appendFileSync('./座右铭.txt', '\r\ntest')