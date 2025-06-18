//弹窗界面
const pop = document.querySelector('#popup')
const closeBtn = document.querySelector('.login-bottom-bar-right-closeBtn')

document.addEventListener('DOMContentLoaded', function () {
    pop.classList.toggle('hidden')
})
closeBtn.addEventListener('click', function () {
    pop.classList.toggle('hidden')
})

//jQuery代码
// $(document).ready(function() {
//     const $pop = $('#popup');
//     const $closeBtn = $('.login-bottom-bar-right-closeBtn');
//
//     // 页面加载完成后显示弹窗
//     $pop.toggleClass('hidden');
//
//     // 点击关闭按钮时隐藏弹窗
//     $closeBtn.on('click', function() {
//         $pop.toggleClass('hidden');
//     });
// });