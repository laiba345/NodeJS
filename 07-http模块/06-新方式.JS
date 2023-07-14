// 1、导入fs模块
const http = require('http')

// 创建服务对象 createServeR() 中还接收一个实参
const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8')
    // 实例化URL的对象
    let url = new URL(request.url, "http://127.0.0.1")
    // 输出路径
    console.log(url.pathname);
    // 输出keyword 查询字符串
    console.log(url.searchParams.get('keyword'));
    response.end('url new')
})

// 3、监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动...');
})
