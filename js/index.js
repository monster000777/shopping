// 轮播图功能
document.addEventListener('DOMContentLoaded', function () {
    // 获取DOM元素
    const carousel = document.querySelector('.carousel-container');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentIndex = 0;
    let interval;
    const totalSlides = carouselItems.length;

    // 初始化轮播图
    function initCarousel() {
        showSlide(currentIndex);
        startInterval();
        setupEventListeners();
    }

    // 显示指定索引的幻灯片
    function showSlide(index) {
        // 隐藏所有幻灯片
        carouselItems.forEach(item => {
            item.style.opacity = '0';
            item.style.zIndex = '0';
        });

        // 移除所有指示器的活动状态
        indicators.forEach(indicator => {
            indicator.classList.remove('active', 'bg-white');
            indicator.classList.add('bg-white/70');
        });

        // 显示当前幻灯片
        carouselItems[index].style.opacity = '1';
        carouselItems[index].style.zIndex = '1';

        // 设置当前指示器为活动状态
        indicators[index].classList.add('active', 'bg-white');
        indicators[index].classList.remove('bg-white/70');

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
        indicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                const index = parseInt(indicator.dataset.index);
                showSlide(index);
                startInterval();
            });
        });

        // 上一张
        prevBtn.addEventListener('click', () => {
            let prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            showSlide(prevIndex);
            startInterval();
        });

        // 下一张
        nextBtn.addEventListener('click', () => {
            let nextIndex = (currentIndex + 1) % totalSlides;
            showSlide(nextIndex);
            startInterval();
        });

        // 点击轮播图区域切换到下一张
        carousel.addEventListener('click', (e) => {
            // 避免点击按钮或指示器时触发
            if (!e.target.closest('.carousel-prev') &&
                !e.target.closest('.carousel-next') &&
                !e.target.closest('.carousel-indicator')) {
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
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shadow-md');
        header.classList.remove('shadow-sm');
    } else {
        header.classList.remove('shadow-md');
        header.classList.add('shadow-sm');
    }
});

// 返回顶部按钮
const backToTopBtn = document.querySelector('.fa-arrow-up').parentElement;
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'auto';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.pointerEvents = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 侧边栏分类悬停效果
const categoryItems = document.querySelectorAll('.category-item');
categoryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const subCategory = item.querySelector('.sub-category');
        if (subCategory) {
            subCategory.style.display = 'block';
        }
    });

    item.addEventListener('mouseleave', () => {
        const subCategory = item.querySelector('.sub-category');
        if (subCategory) {
            subCategory.style.display = 'none';
        }
    });
});

//解决同时出现时的冲突，添加了互斥逻辑
let isMobileNavOpen = false;
let isSearchOpen = false;

document.getElementById('click').addEventListener('click', function () {
    const mobileNav = document.getElementById('mobile-nav');
    const search = document.getElementById('search');

    if (!isMobileNavOpen) {
        search.classList.add('hidden');
        isSearchOpen = false;
    }

    mobileNav.classList.toggle('hidden');
    isMobileNavOpen = !isMobileNavOpen;
});

document.getElementById('click2').addEventListener('click', function () {
    const mobileNav = document.getElementById('mobile-nav');
    const search = document.getElementById('search');

    if (!isSearchOpen) {
        mobileNav.classList.add('hidden');
        isMobileNavOpen = false;
    }

    search.classList.toggle('hidden');
    isSearchOpen = !isSearchOpen;
});


//购物车右上角计数小红点配置（纯手搓）
let cartCount = 0;

function fn(i) {
    const span = document.querySelector('#shopping')
    const btn = document.querySelectorAll(`#${i} button`)


    for (let i = 0; i < btn.length; i++) {
        // console.log(btn[i])
        btn[i].addEventListener('click', function () {
            cartCount++;
            updateCartCount();
            // console.log(btn)
        });
    }

    function updateCartCount() {
        span.innerHTML = cartCount;
        span.style.display = cartCount > 0 ? 'flex' : 'none';
    }
}

fn('model1')
fn('model2')
fn('one')
fn('two')
fn('three')
fn('four')
fn('five')
fn('six')
