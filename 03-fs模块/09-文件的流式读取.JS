/* 
    流式输出: 一块一块的进行读取操作
*/

// 1、引入fs模块
const fs = require('fs')

// 2、创建读取流对象
const rs = fs.createReadStream('./观书有感.txt')

// 3、绑定data事件:用来获取读取到的数据
// 创建流对象以后，通过绑定相关内容，res.on()
rs.on('data', chunk => {
    // console.log(chunk.length)
    console.log(chunk.toString())
})

// 4、end 可选事件
rs.on('end', () => {
    console.log('读取完成')
})