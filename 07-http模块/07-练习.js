// 根据不同的路径展示不同的页面结果
// 1、导入http模块
const http = require('http')

// 2、创建服务对象
// 只要有请求过来，都会放到此处，
const server = http.createServer((request, response) => {
    // 获取请求的方法
    let { method } = request
    // 获取请求的url地址
    let { pathname } = new URL(request.url,"http://127.0.0.1")

    console.log(method)
    console.log(pathname)
    response.end('practise')
})

// 3、监听端口 启动服务
server.listen(9000, () => {
    console.log('服务已经启动..., 端口9000监听中');
})

