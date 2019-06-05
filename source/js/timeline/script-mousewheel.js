//Barba.Dispatcher.on('transitionCompleted', function(currentStatus) {

$(document).ready(function(){
  


  if (window.matchMedia("(min-width: 1024px)").matches) {
    // Scroll horizontal
    // Detecte si sur mac ou pc afin d'optimiser le scroll
    var OSName="Unknown OS";
    if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
    else if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";

    //console.log('Your OS is: '+OSName);

    // Windows
    if(OSName == "Windows"){
      $('html, body, .wrap').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 50);
        e.preventDefault();
      });

    // MacOS
    } else {
      $('html, body, .wrap').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta / 2);
        e.preventDefault();
      });
    }
  }
})
//});