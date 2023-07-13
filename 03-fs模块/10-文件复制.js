/* 
    文件复制的流程
    方法：可以将某个文件中的内容读取出来,然后放到另一个文件中即可

    操作方法都是一样的，先读出来，然后进行存取操作
*/
const fs = require('fs')
const process = require('process')
// 方法一: readFile
// 1、读取文件内容
// let data = fs.readFileSync('./观书有感.txt')

// 2、写入文件
// fs.writeFileSync('./资料/观书有感Copy.txt', data)

// 方法二、流式操作 (该方法会更好一点)
// 创建读取流对象
const rs = fs.createReadStream('./观书有感.txt')
// 创建一个写入流对象
const ws = fs.createWriteStream('./资料/观书有感Copy2.txt')
// 绑定data事件
rs.on('data', chunk => {
    ws.write(chunk)
})

// 文件读取结束在进行查看
rs.on('end', () => {
    console.log(process.memoryUsage()) // 观察rss即可
})

// 方法三、pipe() 管道
rs.pipe(ws) 
