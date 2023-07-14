/* 
    文件的流式写入操作
        - 适用于写入更频繁的场景
    1. 观书有感.TXT
*/
// 1、导入fs模块
const fs = require('fs')

// 2、创建写入流对象; 写入流对象 createWriteStream() 
const ws = fs.createWriteStream('./观书有感.txt')

// 3、write
ws.write('天生我才必有用\r\n')
ws.write('千金散尽还复来\r\n')

// 4、关闭通道
ws.close()