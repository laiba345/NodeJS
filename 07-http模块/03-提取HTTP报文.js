// 1、导入fs模块
const http = require('http')

// 2、创建服务对象 createServeR() 中还接收一个实参
// request 请求，response响应
const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8')
    // 获取请求的方法
    // console.log(request.method)
    // 获取请求的 url
    // console.log(request.url)
    // 获取HTTP协议的版本号
    // console.log(request.httpVersion)
    // 获取HTTP的请求头
    console.log(request.headers)
    response.end('你好, zhq')
})

// 3、监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动...');
})
