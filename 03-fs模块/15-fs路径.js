// 路径的补充说明
const fs = require('fs')

// 相对路径
fs.writeFileSync('index.html', 'love')

// 绝对路径
fs.writeFileSync('D:/index.html', 'love')