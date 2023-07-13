// 修改之前创建的文件的名字
// 1、导入fs模块
const fs = require('fs')

// 2、调用 rename方法
// fs.rename('./座右铭.txt', './Kang.txt', err => {
//     if(err) {
//         console.log('操作失败')
//         return 
//     } 
//     console.log('操作成功')
// })

//  3、文件的移动
fs.rename('./kang.txt', './资料/Kang.txt', err => {
    if(err) {
        console.log('操作失败')
        return 
    } 
    console.log('操作成功')
})
