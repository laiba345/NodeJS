/* 
    练习
    - 搭建HTTP服务，响应一个4行3列的表格，并且要求表格有隔行换色效果
    并且点击单元格能高亮显示
*/
// 1、导入fs模块
const http = require('http')
const fs = require('fs')

// 创建服务对象 createServeR() 中还接收一个实参
const server = http.createServer((request, response) => {
    // 我们需要根据请求url的路径来返回
    // 此处不能设置响应头
    let { pathname } = new URL(request.url, "http://127.0.0.1")
    if (pathname === '/') {
        let html = fs.readFileSync(__dirname + '/10-table.html')
        response.end(html)
    } else if (pathname === '/index.css') {
        let css = fs.readFileSync(__dirname + '/index.css')
        response.end(css)
    } else if (pathname === '/index.js') {
        let js = fs.readFileSync(__dirname + '/index.js')
        response.end(js)
    } else {
        response.statusCode = 404
        response.end('<h1>404 Not Found</h1>')
    }
})

// 3、监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动...');
})
