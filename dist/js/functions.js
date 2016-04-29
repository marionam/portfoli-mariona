var defaultButtonClass;

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
    initProjectCategoryButtons();
    // Init Projects list Section
    initProjectListSection();
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

function initProjectCategoryButtons() {
    $(".menu-projects li a").click(function(e){
        var catId = Number($(this).data("id"));
        $(".projects-list li").hide();
        $(".projects-list .project-detail").hide();
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

    $(".projects-list li button").click(function(e) {
        try {
            var liParent = $(this).parent().parent().parent();
            var projectId = liParent.data("id");
            $(".projects-list .project-detail .title").text(
                $(this).parent().find("h1").text()
            );
            $(".projects-list .project-detail .description").html(
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
            _.each(projects[projectId].images, function(image) {
                console.log(image);
                var img = $('<img src="" />');
                img.attr("src", image);
                if( isMain ) {
                    var mainImg = $('<img src="" />');
                    mainImg.attr("src", image);
                    $(".projects-list .project-detail .main").append(mainImg);
                }
                $(".projects-list .project-detail .gallery").append(img);

                isMain = false;
            });
            $("section.projects .wrapper").css("height", 1600);
            $(".projects-list .project-detail").show();
        } catch(e) {
            alert(e);
        }
        return false;
    });
}
