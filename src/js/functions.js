var _lastCompleted = true;
var _toggleMenuDone = true;
var defaultButtonClass;
var defaultProjectsSectionHeight;
var currentImage = 1;
var fromMenu = false;
var activeHash;

$(document).ready(function(){
    // Init resize Intro Section
    resizeIntroSection();
    // Init Scroll Event for Menu Button
    initScrollMenuButton();
    // Init main menu
    initMainMenu();
    // Init Projects category button
    defaultProjectsSectionHeight = $("section.projects .wrapper").outerHeight(true);
    initProjectCategoryButtons();
    // Init Projects list Section
    initProjectListSection();
    // Inin onHover social footer icons
    initOnHoverSocialFooterIcons();
    // Init contact form
    initContactForm();
    // Init menu click event
    initMenuClickEvent();
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
        )
            $("nav.main-menu button").attr("class", defaultButtonClass + " " + $(section).attr("class")+"-button");
    });
    if( $("nav.main-menu button").parent().find("ul").css("display") == "block" ) {
        if( !fromMenu )
            toggleMenu($("nav.main-menu button"));
        fromMenu = false;
    }
}

function hideDetailProject() {
    $(".projects-list article").css("visibility", "");
    $(".projects-list .project-detail").hide();
    $("section.projects .wrapper").height(defaultProjectsSectionHeight);
}

function initProjectCategoryButtons() {
    $(".menu-projects li a").click(function(e){
        var catId = Number($(this).data("id"));
        $(".projects-list li").hide();
        hideDetailProject();
        var matchedProjects = _.filter(projects, function(project){
            if( _.contains(project.categories,catId) )
                return project;
        });
        var liProjectsToInsert = [];
        _.each(matchedProjects, function(project){
            liProjectsToInsert.unshift($(".projects-list li[data-id="+project.id+"]").detach());
        });
        _.each(liProjectsToInsert, function(liProject) {
            $(".projects-list ul").prepend(liProject);
            liProject.show();
        });
        return false;
    });
}

function initProjectListSection() {
    $(".projects-list li").mouseenter(function(e) {
        $(this).addClass("selected");
    }).mouseleave(function(e){
        $(this).removeClass("selected");
    });

    function initProjectImageGallery() {
        $(".project-detail .gallery img").click(function() {
            var src = $(this).attr("src");
            $(".project-detail .main img").attr("src", src);
        });
    }

    function initProjectImageMobileGallery() {
        function _moveLeft() {
            if( _lastCompleted && currentImage < $(".projects-list .project-detail .main img").length ) {
                _lastCompleted = false;
                var mainLeft = $(".projects-list .project-detail .main").position().left;
                var moveTo = mainLeft - $(window).width();
                $(".projects-list .project-detail .main").animate(
                    {
                        left: moveTo
                    },
                    {
                        duration: 400,
                        easing: "swing",
                        complete: function() {
                            currentImage++;
                            _lastCompleted = true;
                        }
                    }
                );
            }
        }
        function _moveRight() {
            if( _lastCompleted && currentImage > 1 ) {
                _lastCompleted = false;
                var mainLeft = $(".projects-list .project-detail .main").position().left;
                var moveTo = mainLeft + $(window).width();
                $(".projects-list .project-detail .main").animate(
                    {
                        left: moveTo
                    },
                    {
                        duration: 400,
                        easing: "swing",
                        complete: function() {
                            currentImage--;
                            _lastCompleted = true;
                        }
                    }
                );
            }
        }
        $(document).on('swipeleft', function(e) {
            if( _lastCompleted )
                _moveLeft();
        });
        $(document).on('swiperight', function(e) {
            if( _lastCompleted )
                _moveRight();
        });
    }

    $(".projects-list li button").click(function(e) {
        try {
            /*if(!$('div.opa-overlay').html()) {
                var $opaOverlay = $('<div class="opa-overlay" />');
                $('section.projects').append($opaOverlay);
            } else {
                var $opaOverlay = $('div.opa-overlay');
            }*/
            defaultProjectsSectionHeight = $("section.projects .wrapper").outerHeight(true);
            var liParent = $(this).parent().parent().parent();
            var projectId = liParent.data("id");
            $(".projects-list .project-detail .title").text(
                $(this).parent().find("h1").text()
            );
            var categoriesHtml = [];
            categoriesHtml.push('<p class="categories">');
            var projectCategories = projects[projectId].categories;
            _.each(projectCategories, function(category){
                if( category != categories.ALL )
                    categoriesHtml.push('<span>'+$(".menu-projects li a[data-id='"+category+"']").text()+'</span>');
            });
            categoriesHtml.push('</p>');
            $(".projects-list .project-detail .description").html(
                categoriesHtml.join("")
                +
                projects[projectId].description
            );

            currentImage = 1;
            $(".project-detail .main").css("left", 0);

            $(".projects-list .project-detail .main").html("");
            $(".projects-list .project-detail .gallery").html("");

            // Mobile
            if( $(window).width() < 768 ) {
                $(this).parent().parent().css("visibility", "hidden");
                var newTop = liParent.position().top;
                $(".projects-list .project-detail").css("top", newTop);
                $(".projects-list .project-detail").css("left", 0);

                var images = projects[projectId].images;
                _.each(images, function(image, i) {
                    var img = $('<img src="" />');
                    img.attr("src", image);
                    img.css("width",$(window).width());
                    $(".projects-list .project-detail .main").append(img);
                    if( images.length-1 == i )
                        img.addClass("last");
                });
                var menuProjectsTop = $(".menu-projects").position().top;
                var imageHeight = (625/*original height*/ / 488/*original width*/) * $(window).width();
                $(".projects-list .project-detail .project-content").css("top", imageHeight);
                $(".projects-list .project-detail").show();
                var detailHeight = $(".projects-list .project-detail .project-content").height();
                var _newHeight = 150 + menuProjectsTop + newTop + imageHeight + detailHeight;
                if( _newHeight > defaultProjectsSectionHeight )
                    $("section.projects .wrapper").css("height", _newHeight);
                initProjectImageMobileGallery();
            }
            // Desktop
            else {
                var newTop = liParent.position().top + liParent.height();
                var newLeft = liParent.parent().position().left;
                $(".projects-list .project-detail").css("top", newTop + 40);
                $(".projects-list .project-detail").css("left", newLeft);

                // Images gallery
                var isMain = true;
                var images = projects[projectId].images;
                _.each(images, function(image, i) {
                    var img = $('<img src="" />');
                    img.attr("src", image);
                    if( isMain ) {
                        var mainImg = $('<img src="" />');
                        mainImg.attr("src", image);
                        $(".projects-list .project-detail .main").append(mainImg);
                    }
                    if( images.length-1 == i )
                        img.addClass("last");
                    $(".projects-list .project-detail .gallery").append(img);
                    isMain = false;
                });
                var menuProjectsTop = $(".menu-projects").position().top;
                var detailHeight = $(".projects-list .project-detail").height();
                var _newHeight = 150 + menuProjectsTop + newTop + detailHeight;
                if( _newHeight > defaultProjectsSectionHeight )
                    $("section.projects .wrapper").css("height", _newHeight);
                $(".projects-list .project-detail").show();
                initProjectImageGallery();
                $('html,body').stop().animate({
                    scrollTop: $("#project-detail-box").offset().top - 290
                }, 400, function() {
                    // Animation complete.
                });
            }
        } catch(e) {}
        return false;
    });

    $(".projects-list .project-detail .project-content a.close").click(function(){
        hideDetailProject();
        return false;
    });
}

function initOnHoverSocialFooterIcons() {
    $(".contact .social a img").mouseenter(function() {
        var regex = /(.*)(-hover)(.*)/gi;
        var regex2 = /(.+)\.(.+)/gi;
        if( regex.exec($(this).attr("src")) )
            $(this).attr("src",RegExp.$1 + RegExp.$2);
        else if( regex2.exec($(this).attr("src")) )
            $(this).attr("src",RegExp.$1 + "-hover." + RegExp.$2);
    })
    .mouseleave(function() {
        var regex = /(.+)-hover\.(.+)/gi;
        if( regex.exec($(this).attr("src")) )
            $(this).attr("src",RegExp.$1 + "." + RegExp.$2);
    });
}

function initContactForm() {
    $('#contact_form').ajaxForm({
        success: function(data) {
            $(".contact .wrapper h1, .contact .wrapper form").hide();
            $(".contact .wrapper").append('<h2>Gracias!<br />En breve contactaré contigo<br /> para iniciar esta aventura.</h2>');
        }
    });
}

function toggleMenu($this) {
    var $ul = $this.parent().find("ul");
    console.log("toggle menu");
    if( $ul.css("display") == "block" ) {
        $(".intro-wrapper").addClass("closed");
        $(".main-menu .menu-button img").attr("src","img/burger-menu.png");
        if( _toggleMenuDone ) {
            _toggleMenuDone = false;
            $ul.animate({right: "-250%"}, 300, function(){
                $(this).css("display","none");
                _toggleMenuDone = true;
            });
        }
    } else {
        $(".intro-wrapper").removeClass("closed");
        $(".main-menu .menu-button img").attr("src","img/cross.png");
        if( _toggleMenuDone ) {
            _toggleMenuDone = false;
            $ul.css("display","block");
            $ul.animate({right: "0"}, 300, function(){
                _toggleMenuDone = true;
            });
        }
    }
//    $ul.toggle();
}

function initMainMenu() {
    $("nav.main-menu button").click(function(){
        toggleMenu($(this));
    });
    $("nav.main-menu ul li a").click(function() {
        fromMenu = true;
    });
}

function initMenuClickEvent() {
    $('.main-menu ul li a, .text-intro a').click(function(e) {
        var link = (this);
        var option = String($(this).attr("href")).replace("#","");
        e.preventDefault();
        try {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Menu',
                eventAction: 'click',
                eventLabel: option
            });
        } catch(e) {}
        goToSection(link);
    });
}

function goToSection(link) {
    if (location.pathname.replace(/^\//,'') == link.pathname.replace(/^\//,'') && location.hostname == link.hostname) {
        var topOffset = 0;
        if( activeHash != link.hash ) {
            activeHash = link.hash;
            var target = $(link.hash);
            target = target.length ? target : $('[name=' + link.hash.slice(1) +']');
            if (target.length) {
                $('html,body').stop().animate({
                    scrollTop: target.offset().top - topOffset
                }, 1000, function() {
                    // Animation complete.
                    activeHash = "";
                });
                return false;
            }
        }
    }
}
