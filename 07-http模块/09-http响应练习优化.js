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
    response.setHeader('content-type', 'text/html;charset=utf-8')
    // 读取文件内容, 相对路径也可以变成绝对路径
    let html = fs.readFileSync(__dirname + '/10-table.html')
    // 可以通过fs模块读出来，然后放到这个地方
    // end() 里面可以是字符串也可以是buffer
    response.end(html)
})

// 3、监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动...');
})
