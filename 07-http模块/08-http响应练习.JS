/* 
    练习
    - 搭建HTTP服务，响应一个4行3列的表格，并且要求表格有隔行换色效果
    并且点击单元格能高亮显示
*/
// 1、导入fs模块
const http = require('http')

// 创建服务对象 createServeR() 中还接收一个实参
const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8')
    // response.end('url new')
    // 不仅可以返回字段，还可以返回边框等表格字段
    response.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>响应练习</title>
            <style>
                td {
                    padding: 20px 40px;
                }
                table tr:nth-child(odd) {
                    background: #aef;
                }
                table tr:nth-child(even) {
                    background: #fcb;
                }
                table, td {
                    border-collapse: collapse;
                }
            </style>
        </head>
        <body>
           <table border="1"> 
                <tr><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td></tr>
           </table>

           <script>
                // 获取所有的td
                let tds = document.querySelectorAll('td')
                // 遍历
                // 因为给每一块td都添加了一个点击事件
                tds.forEach(item => {
                    item.onclick = function() {
                        this.style.background = '#222';
                    }
                })
           </script>
        </body>
        </html>
    `)
})

// 3、监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动...');
})
