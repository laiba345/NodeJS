const fs = require('fs')
const path = require('path')

// 1、path.resolve() 拼接规范的绝对路径
console.log(path.resolve(__dirname, './kk.html'));

// sep分隔符 window \ linux /

// __filename 文件的绝对路径