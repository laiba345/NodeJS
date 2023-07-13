// 1、buffer与字符串的转换
// let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
// console.log(buf_4.toString()); // utf-8

// // 2、[]
// const buf = Buffer.from('hello')
// // 下方的toString是进行进制的转换工作
// console.log(buf[0].toString(2)) // 01101000

// 3、修改
// buf[0] = 95
// console.log(buf.toString())

// 溢出

// 中文  - 
let buf = Buffer.from('你好') // utf-8的中文
console.log(buf) // 每个中文 = 3个字节


