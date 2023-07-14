// 1、导入fs模块
const fs = require('fs')

// 2、创建文件夹 mk 
// fs.mkdir('./创建的文件夹', err => {
//     if(err) {
//         console.log('创建失败')
//         return 
//     }
//     console.log('创建成功')
// })

// 递归创建, 第二个参数就是专门用来配置相关属性
// fs.mkdir('./a/b/c', { recursive: true }, err => {
//     if (err) {
//         console.log('创建失败')
//         return
//     }
//     console.log('创建成功')
// })

// 读取文件夹; 目标文件夹的资源列表
// fs.readdir('./a', (err, data) => {
//     if(err) {
//         console.log('读取失败')
//         return 
//     }
//     console.log(data)
// })

// 删除文件夹  rm
// fs.rmdir('./a/b/c', err => {
//     if(err) {
//         console.log('删除失败')
//         return 
//     }
//     console.log('删除成功')
// })

// 递归删除 （会有提醒） 建议使用rm删除
fs.rmdir('./a', { recursive: true }, err => {
    if (err) {
        console.log('删除失败')
        return
    }
    console.log('删除成功')
})

