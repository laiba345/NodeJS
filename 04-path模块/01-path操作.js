const fs = require('fs')
const path = require('path')

// path模块专门用于处理路径模块
// 1、path.resolve() 拼接规范的绝对路径
console.log(path.resolve(__dirname, './kk.html'));

// sep分隔符 window \ linux /

// __filename 文件的绝对路径