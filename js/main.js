$(document).ready(function () {
    // header menu
    $('.dropdown > a').click(function (e) {
        e.preventDefault();
        $('.submenu').not($(this).next()).removeClass('active');
        $(this).next('.submenu').toggleClass('active');

        $('.dropdown > a').not($(this)).removeClass('active');
        $(this).toggleClass('active');
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.dropdown > a').length) {
            $('.submenu').removeClass('active');
            $('.dropdown > a').removeClass('active');
        }
    });

    // header search
    $('header .btnwrap').click(function () {
        $('.searchopen').toggle();
        $('.btnwrap button').toggle();
        $('.header__search input').toggle();
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.header__search').length) {
            $('.searchopen').show();
            $('.btnwrap button').hide();
            $('.header__search input').hide();
        }
    });

    // header 
    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });

    // burger menu
    $('.burger').click(function () {
        $(this).toggleClass('on');
        $('.header__wrapper').toggleClass('show');
        $('.menubg').toggleClass('active');

        $('.header__navcol').toggleClass('show');
    })

    AOS.init({
        once: true,
        offset: -50,
        duration: 1000,
        easing: "ease-in-out",
    });

    // styled selects
    if ($('select').length) {
        $('.styledselect').select2({
            // placeholder: "Project Type*",
            minimumResultsForSearch: Infinity,
        });
    }

});


let swiper = new Swiper(".swiper-banner", {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
