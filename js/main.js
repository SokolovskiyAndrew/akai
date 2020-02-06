let burger = document.getElementById('burger');
console.log(burger)
let close = document.getElementById('close');
console.log(close)
let nav = document.getElementById('nav');
console.log(nav)
let line = document.querySelectorAll('.line');

burger.addEventListener('click', function () {
    nav.classList.toggle('nav-active');
    for (let i = 0; i < line; i++) {
        line[i].style.width = '30px';
    }

});


$(document).ready(function () {
    $('li[filter="web"]').click(function () {
        $('.gallery_item').hide(300);
        $('div[filter="web"]').show(300);
        // $('li[filter="web"]').toggleClass('active');
    });
    $('li[filter="gr"]').click(function () {
        $('.gallery_item').hide(300);
        $('div[filter="gr"]').show(300);
        // $('li[filter="gr"]').toggleClass('active');
    });
    $('li[filter="fash"]').click(function () {
        $('.gallery_item').hide(300);
        $('div[filter="fash"]').show(300);
        // $('li[filter="fash"]').addClass('active');
    });
    $('li[filter="log"]').click(function () {
        $('.gallery_item').hide(300);
        $('div[filter="log"]').show(300);
        // $('li[filter="log"]').addClass('active');
    });
    $('li[filter="adv"]').click(function () {
        $('.gallery_item').hide(300);
        $('div[filter="adv"]').show(300);
        // $('li[filter="adv"]').addClass('active');
    });
    $('li[filter="all"]').click(function () {
        $('.gallery_item').show(300);


    });
    $('.portfolio_menu li').click(function () {
        $('ul .active').removeClass('active');
        $(this).addClass('active');
    });
});