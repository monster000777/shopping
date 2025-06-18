// 轮播图功能（jQuery版本）
$(document).ready(function () {
    const $carousel = $('.carousel-container');
    const $carouselItems = $('.carousel-item');
    const $indicators = $('.carousel-indicator');
    const $prevBtn = $('.carousel-prev');
    const $nextBtn = $('.carousel-next');
    let currentIndex = 0;
    let interval;
    const totalSlides = $carouselItems.length;

    // 初始化轮播图
    function initCarousel() {
        showSlide(currentIndex);
        startInterval();
        setupEventListeners();
    }

    // 显示指定索引的幻灯片
    function showSlide(index) {
        // 隐藏所有幻灯片
        $carouselItems.css({
            opacity: '0',
            zIndex: '0'
        });

        // 移除所有指示器的活动状态
        $indicators.removeClass('active bg-white').addClass('bg-white/70');

        // 显示当前幻灯片
        $carouselItems.eq(index).css({
            opacity: '1',
            zIndex: '1'
        });

        // 设置当前指示器为活动状态
        $indicators.eq(index).addClass('active bg-white').removeClass('bg-white/70');

        currentIndex = index;
    }

    // 开始自动轮播
    function startInterval() {
        clearInterval(interval);
        interval = setInterval(() => {
            let nextIndex = (currentIndex + 1) % totalSlides;
            showSlide(nextIndex);
        }, 5000);
    }

    // 设置事件监听器
    function setupEventListeners() {
        // 点击指示器切换幻灯片
        $indicators.on('click', function () {
            const index = parseInt($(this).data('index'));
            showSlide(index);
            startInterval();
        });

        // 上一张
        $prevBtn.on('click', function () {
            let prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            showSlide(prevIndex);
            startInterval();
        });

        // 下一张
        $nextBtn.on('click', function () {
            let nextIndex = (currentIndex + 1) % totalSlides;
            showSlide(nextIndex);
            startInterval();
        });

        // 点击轮播图区域切换到下一张
        $carousel.on('click', function (e) {
            // 避免点击按钮或指示器时触发
            if (!$(e.target).closest('.carousel-prev').length &&
                !$(e.target).closest('.carousel-next').length &&
                !$(e.target).closest('.carousel-indicator').length) {
                let nextIndex = (currentIndex + 1) % totalSlides;
                showSlide(nextIndex);
                startInterval();
            }
        });
    }

    // 初始化轮播图
    initCarousel();
});

// 滚动时导航栏效果
$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $('header').addClass('shadow-md').removeClass('shadow-sm');
    } else {
        $('header').removeClass('shadow-md').addClass('shadow-sm');
    }
});

// 返回顶部按钮
const $backToTopBtn = $('.fa-arrow-up').parent();
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        $backToTopBtn.css({opacity: '1', pointerEvents: 'auto'});
    } else {
        $backToTopBtn.css({opacity: '0', pointerEvents: 'none'});
    }
});

$backToTopBtn.click(() => {
    $('html, body').animate({scrollTop: 0}, 'smooth');
});

// 侧边栏分类悬停效果
$('.category-item').hover(
    function () {
        $(this).find('.sub-category').show();
    },
    function () {
        $(this).find('.sub-category').hide();
    }
);

/*//响应式布局收纳按钮
$('#click').click(function () {
    $('#mobile-nav').toggleClass("hidden");

});

//搜索框收纳按钮
$('#click2').click(function () {
    $('#search').toggleClass("hidden");

});*/
// 使用标志位控制互斥逻辑

//由两个click事件整合，解决了同时出现时的冲突，添加了互斥逻辑
let isMobileNavOpen = false;
let isSearchOpen = false;

$('#click').click(function () {
    if (!isMobileNavOpen) {
        // 打开导航时强制关闭搜索
        $('#search').addClass("hidden");
        isSearchOpen = false;
    }
    $('#mobile-nav').toggleClass("hidden");
    isMobileNavOpen = !isMobileNavOpen;
});

$('#click2').click(function () {
    if (!isSearchOpen) {
        // 打开搜索时强制关闭导航
        $('#mobile-nav').addClass("hidden");
        isMobileNavOpen = false;
    }
    $('#search').toggleClass("hidden");
    isSearchOpen = !isSearchOpen;
});


//购物车右上角计数小红点配置（纯手搓）
let cartCount = 0;

function fn(i) {
    const $span = $('#shopping');
    const $buttons = $(`#${i} button`);

    $buttons.on('click', function () {
        cartCount++;
        updateCartCount();
    });

    function updateCartCount() {
        $span.text(cartCount);
        $span.css('display', cartCount > 0 ? 'flex' : 'none');
    }
}

// 初始化各模块按钮
fn('model1');
fn('model2');
fn('one');
fn('two');
fn('three');
fn('four');
fn('five');
fn('six');



