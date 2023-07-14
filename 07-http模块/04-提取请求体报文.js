// 1、导入fs模块
const http = require('http')

// 2、创建服务对象 createServeR() 中还接收一个实参
const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8')
    // 获取请求体
    // 该方法仅仅需要了解一下即可
    // 1、声明一个变量
    let body = ""
    // 2、绑定data事件
    request.on('data', chunk => {
        body += chunk
    })
    // 3、绑定end事件
    request.on('end', () => {
        console.log(body)
        response.end('你好, zhq')
    })
})

// 3、监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动...');
})
