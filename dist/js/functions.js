var defaultButtonClass;
var defaultProjectsSectionHeight;

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
            var newTop = liParent.position().top + liParent.height();
            var newLeft = liParent.parent().position().left;
            $(".projects-list .project-detail").css("top", newTop + 40);
            $(".projects-list .project-detail").css("left", newLeft);
            // Images gallery
            var isMain = true;
            $(".projects-list .project-detail .main").html("");
            $(".projects-list .project-detail .gallery").html("");
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
            var menuProjectsTop = $(".menu-projects").position().top
            var detailHeight = $(".projects-list .project-detail").height();
            console.log(detailHeight);
            console.log(newTop + detailHeight);
            $("section.projects .wrapper").css("height", 150 + menuProjectsTop + newTop + detailHeight);
            $(".projects-list .project-detail").show();

            initProjectImageGallery();
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
