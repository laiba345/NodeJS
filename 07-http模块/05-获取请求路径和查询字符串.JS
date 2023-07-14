// 1、导入fs模块
const http = require('http')
// 1、导入url模块
const url = require('url')

// 创建服务对象 createServeR() 中还接收一个实参
const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8')
    // 2、解析request.url
    // console.log(request.url)
    let res = url.parse(request.url, true)
    // 路径
    let pathname = res.pathname
    // 查询字符串
    let keyword = res.query.keyword
    console.log('res', res)
    console.log('pathname', pathname)
    console.log('keyword', keyword)
    response.end('你好, zhq')
})

// 3、监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动...');
})
