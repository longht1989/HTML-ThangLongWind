//Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {

$(document).ready(function() {

    // Au chargement d'une page deccenie ca ouvre la sidebar
    if (window.matchMedia("(min-width: 1024px)").matches) {
        setTimeout(function() {
            $("#decennie aside").addClass("open-aside")
            $("#decennie .content-background").addClass("for-aside-bg")
            $("#decennie .content-decennie").addClass("for-aside")
            $(".solo-hr").addClass("hr-none")
            $("#decennie aside .button-aside img").addClass("transform-croix")

            // Affiche la navigation
            $("#decennie aside .nav").addClass("block-nav")
            $("#decennie aside .content-aside a.first-button-dece, #decennie aside .content-aside a.second-button-dece").addClass("inline-block-nav")
            setTimeout(function() {
                $("#decennie aside .nav").addClass("visible-nav")
            }, 500);
            setTimeout(function() {
                $("#decennie aside .content-aside p").addClass("visible-nav")
            }, 700);
            setTimeout(function() {
                $("#decennie aside .content-aside hr.hr-aside").addClass("visible-nav")
            }, 900);
            setTimeout(function() {
                $("#decennie aside .content-aside a.first-button-dece, #decennie aside .content-aside a.second-button-dece").addClass("visible-nav")
            }, 1100);
            $(".content-decennie .flex-all .auto .flex").addClass("reduct-marge")
        }, 500);
    }

    /*========== Animation ancre ==========*/
    var fortnite = $(".fake").width();
    $('body').on('click', '#decennie .js-scrollToLeft', function() {

        // Récupere la vitesse du scroll
        var dataSpeed = $("#decennie .laptop-background .background-home").attr("data-scroll-speed");

        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        if (window.matchMedia("(min-width: 1024px)").matches) {
            $('.background-home').removeClass("transition-click");
            $('.content-hr hr').removeClass("transition-click");

            $('.wrap').animate({
                scrollLeft: $(page).position().left - fortnite + 120
            }, speed);

            var actionClick = $(page).position().left - fortnite + 120

            $('.background-home').css({
                transform: "translateX(-" + actionClick / dataSpeed + "px)",
                transition: "all 0.75s"
            });

            $('.content-hr hr').css({
                transform: "translateX(-" + actionClick / 6 + "px)",
                transition: "all 0.75s"
            });

            // Si clique sur le premier
            $("body").on('click', '#timeline-1', function() {
                $('.background-home').css({
                    transform: "translateX(0px)",
                    transition: "all 0.75s"
                });

                $('.content-hr hr').css({
                    transform: "translateX(0px)",
                    transition: "all 0.75s"
                });
            })

        } else {
            $('html, body, .wrap').animate({
                scrollTop: $(page).offset().top - 80
            }, speed);
        }
        return false;
    });


    /*========== Open aside ==========*/
    $("body").on("click", "#decennie aside", function() {
        if (window.matchMedia("(min-width: 1024px)").matches) {
            if ($("#decennie aside").hasClass("open-aside")) {
                $("#decennie aside").removeClass("open-aside")
                $("#decennie .content-background").removeClass("for-aside-bg")
                $("#decennie .content-decennie").removeClass("for-aside")
                $(".solo-hr").removeClass("hr-none")
                $("#decennie aside .button-aside img").removeClass("transform-croix")

                // Cache la navigation
                $("#decennie aside .nav, #decennie aside .content-aside a.first-button-dece, #decennie aside .content-aside a.second-button-dece").removeClass("visible-nav")
                $("#decennie aside .content-aside p").removeClass("visible-nav")
                $("#decennie aside .content-aside hr.hr-aside").removeClass("visible-nav")

                setTimeout(function() {
                    $("#decennie aside .nav").removeClass("block-nav")
                    $("#decennie aside .content-aside a.first-button-dece, #decennie aside .content-aside a.second-button-dece").removeClass("inline-block-nav")
                }, 500);

            } else {
                $("#decennie aside").addClass("open-aside")
                $("#decennie .content-background").addClass("for-aside-bg")
                $("#decennie .content-decennie").addClass("for-aside")
                $(".solo-hr").addClass("hr-none")
                $("#decennie aside .button-aside img").addClass("transform-croix")

                // Affiche la navigation
                $("#decennie aside .nav").addClass("block-nav")
                $("#decennie aside .content-aside a.first-button-dece, #decennie aside .content-aside a.second-button-dece").addClass("inline-block-nav")
                setTimeout(function() {
                    $("#decennie aside .nav").addClass("visible-nav")
                }, 500);
                setTimeout(function() {
                    $("#decennie aside .content-aside p").addClass("visible-nav")
                }, 700);
                setTimeout(function() {
                    $("#decennie aside .content-aside hr.hr-aside").addClass("visible-nav")
                }, 900);
                setTimeout(function() {
                    $("#decennie aside .content-aside a.first-button-dece, #decennie aside .content-aside a.second-button-dece").addClass("visible-nav")
                }, 1100);

            }
        }
    })
    /*========== Ajuste la marge si aside ouverte ==========*/
    $("body").on("click", "#decennie aside", function() {
        if ($(".content-decennie").hasClass("for-aside")) {
            $(".content-decennie .flex-all .auto .flex").addClass("reduct-marge")
        } else {
            $(".content-decennie .flex-all .auto .flex").removeClass("reduct-marge")
        }
    });
    /*========== Timeline tablette et smartphone ==========*/
    var nbPosts = $(".content-decennie article").length;
    if (window.matchMedia("(min-width: 1024px)").matches) {
        var divis = 100 / nbPosts;
        $(".timeline-decennie hr.jaune").css("width", divis + "%");
    } else {
        var divis = 100 / nbPosts;
        $(".timeline-decennie hr.jaune").css("height", divis + "%");
    }

    if (window.matchMedia("(max-width: 1023px)").matches) {
        var heightFlex = $(".content-decennie").height();
        var moyenHeight = heightFlex / nbPosts;
        var totalMoyHeight = moyenHeight + 200;
        var totalMoyHeightFinal = totalMoyHeight / 2;
    }
    if (window.matchMedia("(max-width: 700px)").matches) {
        var heightFlex = $(".content-decennie").height();
        var moyenHeight = heightFlex / nbPosts;
        var totalMoyHeight = moyenHeight + 15;
        var totalMoyHeightFinal = totalMoyHeight;
    }

    $(window).scroll(function(event) {

        // Boucle autant de fois qu'il y a de blocs
        for (var loop = 0; loop < nbPosts + 1; loop++) {

            // Annimation bande post
            var width = totalMoyHeightFinal * loop;
            var topPost = width - totalMoyHeightFinal;

            // Timeline
            var timelapse = divis * loop;
            var timeline = timelapse + divis;
            var loopDate = loop + 1;

            var yPost = $(this).scrollTop();

            if (yPost >= topPost + 634) {
                $(".timeline-decennie hr.jaune").css("height", timeline + "%")
                $("#timeline-" + loopDate).css("color", "#ffdc12")
            } else {

                $("#timeline-" + loopDate).css("color", "#2a2a29")
            }

        }

    });
});
//})