/* ====================================
   Onload functions
   ==================================== */
var tm;

$(function() {
    tm = TweenMax;
    tl = new TimelineMax;

    // affix site header
    var headerHeight = $('.site-header').height();
    $('.site-header-wrap').affix({
        offset: headerHeight
    })
    // go to top
    $("#go-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    // toggle header menu
    $('.site-header__menu .btn').click(function() {
        $(this).toggleClass('is-active');
        $(".menu__listing").slideToggle('fast');
        $(".menu__listing").toggleClass('m-show');
    });
    // toggle search input
    $('#site-header .fa-search').click(function() {
        $(this).toggleClass('fa-times');
        $('.search-wrap').toggleClass('active');
    });
    // index slider
    $('#slider-cover > ul').bxSlider({
        pager: 1,
        nextText: '',
        prevText: '',
        nextSelector: '',
        prevSelector: '',
        mode: 'vertical'
    });
    if ($('.site-content').hasClass('site-index')) {
        setupTextlisting();
        setupChart();
        window.onscroll = function() { myScroll() };
    }
    // timeline page js
    if ($('body').hasClass('page-timeline')) {
        $('.btn-menu').on('click', menuListingClick);
        var timelinePos = $('#home .timeline').offset().top;
        $('#home .timeline').affix({
            offset: timelinePos
        })
    }
});

function menuListingClick(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleMenuListing();
}

function toggleMenuListing() {
    console.log('Toggle menu__listing');
    $('.menu__listing').toggleClass('active');
}
// featured animate
function setupTextlisting() {
    tm.set(textListing1, { opacity: 0, x: 100 });
    tm.set(textListing2, { opacity: 0, x: 100 });
    tm.set(textListing3, { opacity: 0, x: 100 });
}

function textlistingIn() {
    tm.to(textListing1, 0.5, { opacity: 1, x: 0, ease: Quad.easeOut })
    tm.to(textListing2, 0.5, { opacity: 1, x: 0, delay: 0.5, ease: Quad.easeOut })
    tm.to(textListing3, 0.5, { opacity: 1, x: 0, delay: 1, ease: Quad.easeOut })
}

function textlistingOut() {
    tm.to(textListing3, 0.25, { opacity: 0, x: 100, ease: Quad.easeInOut })
    tm.to(textListing2, 0.25, { opacity: 0, x: 100, delay: 0.25, ease: Quad.easeInOut })
    tm.to(textListing1, 0.25, { opacity: 0, x: 100, delay: 0.5, ease: Quad.easeInOut })
}

// chart animate
function setupChart() {
    tm.set(chart1, { height: '0%' });
    tm.set(chart2, { height: '0%' });
    tm.set(chart3, { height: '0%' });
    tm.set(chart4, { height: '0%' });
    tm.set(chart5, { height: '0%' });
    tm.set(chart6, { height: '0%' });
}

function chartIn() {
    tm.to(chart1, 2, { height: '90%', ease: Power2.easeInOut });
    tm.to(chart2, 2, { height: '45%', ease: Power2.easeInOut });
    tm.to(chart3, 2, { height: '30%', ease: Power2.easeInOut });
    tm.to(chart4, 2, { height: '26%', ease: Power2.easeInOut });
    tm.to(chart5, 2, { height: '20%', ease: Power2.easeInOut });
    tm.to(chart6, 2, { height: '15%', ease: Power2.easeInOut });
}

function myScroll() {
    var posChart = $('#zone-chart').offset().top;
    var posFeatured = $('#zone-featured').offset().top;
    var botFeatured = posFeatured + $('#zone-featured').outerHeight();
    if ((document.documentElement.scrollTop > (posFeatured - 200) && document.documentElement.scrollTop < (botFeatured + 200)) || (document.body.scrollTop > (posFeatured - 200) && document.body.scrollTop < (botFeatured + 200))) {
        textlistingIn();
    } else if (document.documentElement.scrollTop > (posChart - 200) || document.body.scrollTop > (posChart - 200)) {
        chartIn();
    } else {
        textlistingOut();
    }
}

function autoPlay() {
    var posTopCover = $('#zone-cover').offset().top;
    console.log(posTopCover);
    if (document.body.scrollTop > (posTopCover) || document.documentElement.scrollTop > (posTopCover)) {
        $('#coverVideo').get(0).play();
    }
}