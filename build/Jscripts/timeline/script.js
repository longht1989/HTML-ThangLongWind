//Barba.Dispatcher.on('transitionCompleted', function (currentStatus) {

$(document).ready(function() {

    var nbPosts = $(".content-articles .event").length;
    $("#timeline-1").css("color", "#ffdc12")
    $(".wrap").on("scroll", function(event) {
        for (var loop = 0; loop < nbPosts + 1; loop++) {
            if (window.matchMedia("(min-width: 1601px)").matches) {
                var width = 219 * loop;
                var topPost = width - 219
            } else {
                var width = 168 * loop;
                var topPost = width - 168
            }

            var divis = 100 / 6;
            var timelapse = divis * loop;
            var timeline = timelapse + divis;
            var loopDate = loop + 1;
            var yPost = $(this).scrollLeft();
            if (yPost >= topPost + 1) {
                $(".content-articles .event#decennie-" + loop + " .content-slideshow").addClass("invisible");
                $(".timeline hr.jaune").css("width", timeline + "%")
                $("#timeline-" + loopDate).css("color", "#ffdc12")
            } else {
                $(".content-articles .event#decennie-" + loop + " .content-slideshow").removeClass("invisible");
                $("#timeline-" + loopDate).css("color", "white")
            }
        }
    });




    $.fn.moveIt = function() {
        var $window = $('.wrap');
        var instances = [];
        $(this).each(function() {
            instances.push(new moveItItem($(this)))
        });
        $('html, body, .wrap').mousewheel(function() {
            var scrollTop = $window.scrollLeft();

            instances.forEach(function(inst) {
                inst.update(scrollTop)
            })
        }, {
            passive: !0
        })
    }
    var moveItItem = function(el) {
        this.el = $(el);
        this.speed = parseInt(this.el.attr('data-scroll-speed'))
    };
    moveItItem.prototype.update = function(scrollTop) {
        this.el.css('transform', 'translateX(' + -(scrollTop / this.speed) + 'px)');
        $('.background-home').addClass("transition-click");
        $('.content-hr hr').addClass("transition-click")
    };
    $(function() {
        $('[data-scroll-speed]').moveIt()
    });



    $(window).on("scroll", function(event) {
        for (var loop = 0; loop < nbPosts + 1; loop++) {
            var width = 300 * loop;
            var topPost = width - 300;
            var divis = 100 / 6;
            var timelapse = divis * loop;
            var timeline = timelapse + divis;
            var loopDate = loop + 1;
            var yPost = $(this).scrollTop();
            if (yPost >= topPost + 607) {
                $(".timeline hr.jaune").css("height", timeline + "%")
                $("#timeline-" + loopDate).css("color", "#ffdc12")
                $("#timeline-" + loopDate).removeClass("colorBasique")
            } else {
                $("#timeline-" + loopDate).addClass("colorBasique")
            }
        }
    });
    $(".wrap").on("scroll", function() {
        if ($("#decennie-6 .content-slideshow").hasClass("invisible")) {
            $("aside.home-liste-news").addClass("anim-aside-visu")
        } else {
            $("aside.home-liste-news").removeClass("anim-aside-visu")
        }
    });
    var heightActu = $("#home .flex-all").height();
    var heightActu1 = $(".flex-all aside.home-liste-news").height();
    var SB = heightActu - heightActu1;
    var paddingActu = SB / 2;
    $(".flex-all aside.home-liste-news").css("padding-top", paddingActu + "px")
});
//})