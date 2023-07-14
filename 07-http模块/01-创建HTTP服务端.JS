// 1、导入fs模块
const http = require('http')

// 2、创建服务对象 createServeR() 中还接收一个实参
// request 请求，response响应
const server = http.createServer((request, response) => {
    // response.end('Hello HTTP Server') // 设置响应体
    // 设置响应头解决乱码问题
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.end('你好, zhq')
})

// 3、监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动...');
})

// 4、浏览器可以发送HTTP请求
// 默认端口是80，好处是简单
// HTTPS协议的默认端口是443
// 默认端口的一般用于项目上线的时候

