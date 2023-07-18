// 获取所有的td
let tds = document.querySelectorAll('td')
// 遍历
// 因为给每一块td都添加了一个点击事件
tds.forEach(item => {
    item.onclick = function () {
        this.style.background = '#222';
    }
})