/*
    ctrl + shift + / 多行注释
    
    需求: 新键一个文件，
    新建一个文件，座右铭.txt,写入内容，三人行，则必有我师焉

    用处：用户每次请求网站的时间，用一个txt来存，可以用代码实现自动化
*/
// 1、导入fs模块
const fs = require('fs')

// 2、写入文件
fs.writeFile('./座右铭.txt','三人行,必有我老师', err => {
    if(err) {
        console.log('写入失败')
        return 
    }
    console.log('写入成功')
})

// 同步写入 - 效率很低
fs.writeFileSync('./data.txt', 'test')