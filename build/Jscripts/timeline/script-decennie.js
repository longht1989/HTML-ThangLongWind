//Barba.Dispatcher.on('transitionCompleted', function(currentStatus) {

$(document).ready(function() {

    /*========== Transition de page ==========*/
    $('body').on('click', '#decennie .nav .date-nav', function() {

        var date_base = $(this).text();
        var date = date_base - 10;

        setTimeout(function() {
            $(".back-trans").addClass("trans-en-cours");

            setInterval(function() {
                if (date < date_base) {
                    date++;
                    $(".back-trans .filtre-black .next-decennie-transition").text(date);
                }
            }, 200);

        }, 750);
    });


    /*========== Position du texte sur la sidebar ==========*/
    var heightText = $("#decennie h1.aside-for-pc").height();
    $(".content-aside").css("top", "calc(37vh + " + heightText + "px)");
    $(".solo-hr").css("top", "calc(36.5vh + " + heightText + "px)");


    /*========== Scroll différent ==========*/
    $.fn.moveIt = function() {
        var $window = $('.wrap');
        var instances = [];

        $(this).each(function() {
            instances.push(new moveItItem($(this)));
        });

        $('html, body, .wrap').mousewheel(function() {
            var scrollTop = $window.scrollLeft();
            instances.forEach(function(inst) {
                inst.update(scrollTop);
            });
        }, { passive: true });
    }
    var moveItItem = function(el) {
        this.el = $(el);
        this.speed = parseInt(this.el.attr('data-scroll-speed'));
    };
    moveItItem.prototype.update = function(scrollTop) {
        this.el.css('transform', 'translateX(' + -(scrollTop / this.speed) + 'px)');
        $('.background-home').addClass("transition-click");
        $('.content-hr hr').addClass("transition-click");
    };
    // Initialization
    $(function() {
        $('[data-scroll-speed]').moveIt();
    });


    /*========== Transition de disparition des blocs ==========*/
    var nbPosts = $(".content-decennie article").length;
    if (window.matchMedia("(min-width: 1024px)").matches) {
        var divis = 100 / nbPosts;
        $(".timeline-decennie hr.jaune").css("width", divis + "%");
    } else {
        var divis = 100 / nbPosts;
        $(".timeline-decennie hr.jaune").css("height", divis + "%");
    }
    $(".wrap").scroll(function(event) {
        // Boucle autant de fois qu'il y a de blocs
        for (var loop = 0; loop < nbPosts + 1; loop++) {

            $(".content-decennie article").removeClass("animation-" + loop + "")
            $(".content-decennie article").addClass("after-anim")

            // Annimation bande post
            if (window.matchMedia("(max-width: 2560px)").matches) {
                var width = 258 * loop;
                var topPost = width - 258;
            }
            if (window.matchMedia("(max-width: 1600px)").matches) {
                var width = 215 * loop;
                var topPost = width - 215;
            }
            if (window.matchMedia("(max-width: 1440px)").matches) {
                var width = 195 * loop;
                var topPost = width - 195;
            }
            if (window.matchMedia("(max-width: 1366px)").matches) {
                var width = 182 * loop;
                var topPost = width - 182;
            }
            if (window.matchMedia("(max-width: 1280px)").matches) {
                var width = 173 * loop;
                var topPost = width - 173;
            }

            // Timeline   
            var timelapse = divis * loop;
            var timeline = timelapse + divis;

            var yPost = $(this).scrollLeft();

            if (yPost >= topPost + 1) {
                $(".content-decennie article#evenement-" + loop + "").addClass("invisible")


                $(".timeline-decennie hr.jaune").css("width", timeline + "%")
                $("#timeline-" + loop + "").css("color", "#ffdc12");
            } else {
                $(".content-decennie article#evenement-" + loop + "").removeClass("invisible");

                $("#timeline-" + loop + "").css("color", "#2a2a29");
            }
        }
    });


    /*========== Hover decennie enleve l'annim ==========*/
    $('.content-decennie article').hover(function() {
        for (var loop = 0; loop < nbPosts + 1; loop++) {
            $(".content-decennie article#evenement-" + loop + "").removeClass("animation-" + loop + "")
            $(".content-decennie article#evenement-" + loop + "").addClass("after-anim")
        }
    })


})






//});