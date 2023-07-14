// 文件删除; unlink() && rm() 
// 1、导入fs模块
const fs = require('fs')

// 2、调用unlink方法 (方法1) unlinkSync
fs.unlink('./资料/Kang.txt', err => {
    if(err) {
        console.log('删除失败')
        return 
    }
    console.log('删除成功')
}) 

// 调用rm方法 14.4  rmSync
fs.rm('./资料/Kang.txt', err => {
    if(err) {
        console.log('删除失败')
        return 
    }
    console.log('删除成功')
}) 