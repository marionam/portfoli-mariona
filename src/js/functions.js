var _lastCompleted = true;
var defaultButtonClass;
var defaultProjectsSectionHeight;
var currentImage = 1;

$(document).ready(function(){
    // Init resize Intro Section
    resizeIntroSection();
    // Init Scroll Event for Menu Button
    initScrollMenuButton();
    // Init main menu
    $("nav.main-menu button").click(function(){
        $(this).parent().find("ul").toggle();
    });
    // Init Projects category button
    defaultProjectsSectionHeight = $("section.projects .wrapper").outerHeight() + 150;
    initProjectCategoryButtons();
    // Init Projects list Section
    initProjectListSection();
    // Inin onHover social footer icons
    initOnHoverSocialFooterIcons();
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
                $("section.projects .wrapper").css("height", 150 + menuProjectsTop + newTop + imageHeight + detailHeight);
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
                $("section.projects .wrapper").css("height", 150 + menuProjectsTop + newTop + detailHeight);
                $(".projects-list .project-detail").show();

                initProjectImageGallery();
            }
        } catch(e) {
            alert(e);
        }
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
