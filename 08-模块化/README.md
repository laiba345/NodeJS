Node.js模块化
1. 什么是模块化与模块？
- 将一个复杂的程序文件按照一定的规则拆分成多个文件的过程称之为模块化
- 其中拆分出的每个文件就是一个模块，模块的内部数据是私有的，不过模块可以暴露内部
数据以便于其他模块使用

2. 模块化的好处
- 防止命令冲突
- 高复用性
- 高维护性

3. 模块暴露数据
- 暴露多个数据的话，多个方法等，可以使用对象的形式来进行暴露操作

4. fs导入模块
- 对于自己创建的模块，导入时路径建议写相对路径，且不能省略./和../
- js和json文件导入时可以不用写后缀
- 如果导入其他类型的文件（没有类型也是），会以js规则导入，

5. fs导入文件夹
- 如果导入的路径是个文件夹，则会首先检测该文件夹下package.json文件中
main属性对应的文件
    - 如果存在则导入，反之如果不存在会报错
    - 如果main属性不存在，或者package.js不存在，则会尝试导入文件夹下
    的index.js和index.json，如果还是没有找到，则报错
！！！ 导入node.js内置模块时，直接require模块的名字即可！ 

6. CommonJS规范
- module.exports、exports以及requires这些都是CommonJS模块化规范中的内容
- 而Node.js是实现了CommonJS模块化规范，两者关系有点像JavaScript和ECMAScript
