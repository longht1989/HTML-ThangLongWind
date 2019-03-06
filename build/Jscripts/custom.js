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
        $('#zone-featured').mouseover(function() {
            textlistingIn();
        });
        $('#zone-featured').mouseleave(function() {
            tm.delayedCall(1, textlistingOut);
        });
        setupChart();
        window.onscroll = function() { myScroll() };
    }
});

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
    tm.to(chart1, 0.5, { height: '45%', ease: Power4.easeOut })
    tm.to(chart2, 0.5, { height: '23%', ease: Power4.easeOut })
    tm.to(chart3, 0.5, { height: '91%', ease: Power4.easeOut })
    tm.to(chart4, 0.5, { height: '99%', ease: Power4.easeOut })
    tm.to(chart5, 0.5, { height: '97%', ease: Power4.easeOut })
    tm.to(chart6, 0.5, { height: '99.5%', ease: Power4.easeOut })
}

function myScroll() {
    var posTop = $('#zone-chart').offset().top;
    console.log(posTop);
    if (document.body.scrollTop > (posTop - 200) || document.documentElement.scrollTop > (posTop - 200)) {
        chartIn();
    }
}