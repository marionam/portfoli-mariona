/*-----------------------------------------------------------------------------


@author:        Marc Pérez Castells
@contact:       info@welvisolutions.com
@organization:  Welvi Solutions
@since:         April 2016
-----------------------------------------------------------------------------*/

var defaultButtonClass;

$(document).ready(function(){
   resizeIntroSection();
   initScrollMenuButton();
   $("nav.main-menu button").click(function(){
       $(this).parent().find("ul").toggle();
   });
});

window.onresize = function(e) {
    resizeIntroSection();
}

function resizeIntroSection() {
    vpw = $(window).width();
    vph = $(window).height();
    $("section.intro").css({"height": vph+'px'});
}

function initScrollMenuButton() {
    defaultButtonClass = $("nav.main-menu button").attr("class");
    $(window).on('scroll.parallax', _.throttle(parallaxScroll, 30));
    parallaxScroll();
}

function parallaxScroll() {
    var scrollPosition = window.pageYOffset + 35;
    _.map($("body").children("section"), function(section){
        if(
            scrollPosition > $(section).offset().top
            &&
            scrollPosition < ($(section).height()+$(section).offset().top)
        ) {
            //console.log("Entering section " + $(section).attr("class"));
            $("nav.main-menu button").attr("class", defaultButtonClass + " " + $(section).attr("class")+"-button");
        }
    });
}
