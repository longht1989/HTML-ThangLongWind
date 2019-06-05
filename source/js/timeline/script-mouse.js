//Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container) {
$(document).ready(function(){
    var fortnite = $(".intro").width();
    $('body').on('click', '#home .js-scrollToLeft',function () {
      var page = $(this).attr('href');
      var speed = 750;
      if (window.matchMedia("(min-width: 1024px)").matches) {
        $('.background-home').removeClass("transition-click");
        $('.content-hr hr').removeClass("transition-click");
        $('.wrap').animate({
          scrollLeft: $(page).position().left - fortnite - 100
        }, speed);
        var actionClick = $(page).position().left - fortnite - 100
        $('.background-home').css({
          transform: "translateX(-" + actionClick / 12 + "px)",
          transition: "all 0.75s"
        });
        $('.content-hr hr').css({
          transform: "translateX(-" + actionClick / 6 + "px)",
          transition: "all 0.75s"
        });
        $('body').on('click','#timeline-1',function () {
          $('.background-home').css({
            transform: "translateX(0px)",
            transition: "all 0.75s"
          });
          $('.content-hr hr').css({
            transform: "translateX(0px)",
            transition: "all 0.75s"
          })
        })
      } else {
        $('html, body, .wrap').animate({
          scrollTop: $(page).offset().top - 80
        }, speed)
      }
      return !1
    })
    })

//})