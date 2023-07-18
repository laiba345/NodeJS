/* 
    搭建静态资源服务
    - 创建需求
    1. GET /index.html       响应 page/index.html 的文件内容
    2. GET /css/app.css      响应 page/css/app.css 的文件内容
    3. GET /images/logo.png  响应 page/images/logo.png 的文件内容
*/
const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
    let { pathname } = new URL(request.url, "http://127.0.0.1")
    // 拼接文件路径
    let filePath = __dirname + '/pages' + pathname
    // 读取文件路径  fs 异步API  因为文件资源路径已经配置好了
    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.statusCode = 500
            response.end('文件读取失败！')
            return
        }
        // 响应文件内容
        response.end(data)
    })
})

// 3、监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动...');
})