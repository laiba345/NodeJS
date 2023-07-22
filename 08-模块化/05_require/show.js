/**
 * 伪代码
 */

function require(file){
  //1. 将相对路径转为绝对路径，定位目标文件
  let absolutePath = path.resolve(__dirname, file);
  //2. 缓存检测 - 检测之前是否有返回这个文件
  if(caches[absolutePath]){
    return caches[absolutePath];
  }
  //3. 读取文件的代码 - 读取文件里面的内容
  let code = fs.readFileSync(absolutePath).toString();
  //4. 包裹为一个函数 然后执行
  let module = {};
  let exports = module.exports = {};
  (function (exports, require, module, __filename, __dirname) {
    const test = {
      name: '尚硅谷'
    }
  
    module.exports = test;
  
    //输出
    console.log(arguments.callee.toString());
  })(exports, require, module, __filename, __dirname)
  //5. 缓存结果 第一次进来的话将结果放到了第2步当中
  caches[absolutePath] = module.exports;
  //6. 返回 module.exports 的值  - 返回的结果其实本质是module.exports
  return module.exports;
}

const m = require('./me.js');

