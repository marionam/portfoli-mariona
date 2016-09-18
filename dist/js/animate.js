/*-----------------------------------------------------------------------------


@author:        Marc Pérez Castells
@contact:       info@welvisolutions.com
@organization:  Welvi Solutions
@since:         September 2016
-----------------------------------------------------------------------------*/

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            var self = $(this);
            setTimeout(function(){self.animateCss(animationName);},25);
        });
    }
});
$('.intro img.avatar').animateCss('avatarMove');
$('.services img.llaut').animateCss('llautMove');
