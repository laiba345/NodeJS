// 查看资源状态
const fs = require('fs')

// stat方法  创建时间等都可以拿到
fs.stat('./资料/观书有感Copy2.txt', (err, data) => {
    if(err) {
        console.log('操作失败')
        return 
    }
    // console.log(data) 打印文件信息
    // 判断是否是文件或者文件夹
    // isFile
    console.log(data.isFile())
    console.log(data.isDirectory())
})