function checkHeaderHeight(){
    $("header").css("height", $(window).height() * 1.1);
}

function checkNavItem(e){
 var t = e(window).scrollTop();
        e('.navi a[href*="home"]').addClass("active");
        e('.navi a[href*="about"]').removeClass("active");
        e('.navi a[href*="location"]').removeClass("active");
        e('.navi a[href*="gifts"]').removeClass("active");
        e('.navi a[href*="tableware"]').removeClass("active");
        e('.navi a[href*="gallery"]').removeClass("active");
        e('.navi a[href*="contact"]').removeClass("active");
        if (t >= e("#home").height() + e("#slide").height() - 60) {
            e('.navi a[href*="home"]').removeClass("active");
            e('.navi a[href*="about"]').addClass("active")
        }
        if (t >= e("#home").height() + e("#slide").height() + e("#about").height()) {
            e('.navi a[href*="home"]').removeClass("active");
            e('.navi a[href*="about"]').removeClass("active");
            e('.navi a[href*="location"]').addClass("active")
        }
        if (t >= e("#home").height() + e("#slide").height() + e("#about").height() + e("#location").height()) {
            e('.navi a[href*="home"]').removeClass("active");
            e('.navi a[href*="about"]').removeClass("active");
            e('.navi a[href*="location"]').removeClass("active");
            e('.navi a[href*="tableware"]').addClass("active")
        }
        if (t >= e("#home").height() + e("#slide").height() + e("#about").height() + e("#location").height() + e("#tableware").height()) {
            e('.navi a[href*="home"]').removeClass("active");
            e('.navi a[href*="about"]').removeClass("active");
            e('.navi a[href*="location"]').removeClass("active");
            e('.navi a[href*="tableware"]').removeClass("active");
            e('.navi a[href*="gifts"]').addClass("active")
        }
        if (t >= e("#home").height() + e("#slide").height() + e("#about").height() + e("#location").height() + e("#tableware").height() + e("#gifts").height()) {
            e('.navi a[href*="home"]').removeClass("active");
            e('.navi a[href*="about"]').removeClass("active");
            e('.navi a[href*="location"]').removeClass("active");
            e('.navi a[href*="gifts"]').removeClass("active");
            e('.navi a[href*="tableware"]').removeClass("active");
            e('.navi a[href*="gallery"]').addClass("active")
        }
        if (t >= e("#home").height() + e("#slide").height() + e("#about").height() + e("#location").height() + e("#gifts").height() + e("#tableware").height() + e("#gallery").height()) {
            e('.navi a[href*="home"]').removeClass("active");
            e('.navi a[href*="about"]').removeClass("active");
            e('.navi a[href*="location"]').removeClass("active");
            e('.navi a[href*="gifts"]').removeClass("active");
            e('.navi a[href*="tableware"]').removeClass("active");
            e('.navi a[href*="gallery"]').removeClass("active");
            e('.navi a[href*="contact"]').addClass("active")
        }
}

Pace.on("start", function(){

})

Pace.on("done", function(e) {
    $(".main-content").addClass("customFadeIn2");
    $(".main-content").css("opacity", "1");
    setTimeout(function(){
        $("#home").addClass("customFadeIn1");
        $("#home").css("opacity", "1");
        setTimeout(function(){
            $("#nav").addClass("customFadeIn1");
            $("#nav").css("opacity", "1");
        }, 800);
    }, 1500);

    $(".fittext1").fitText(1, {
        minFontSize: "15px",
        maxFontSize: "30px"
    });
    $(".fittext2").fitText(.4, {
        minFontSize: "30px",
        maxFontSize: "86px"
    });
    $(".fittext3").fitText(.4, {
        minFontSize: "30px",
        maxFontSize: "86px"
    });
    $(".fittext4").fitText(1.5, {
        minFontSize: "15px",
        maxFontSize: "24px"
    });

    setTimeout(function(){
        $.getJSON("img/collage.js", function(data) {
            $(".myFancyCollage").fancyCollage(data);
        });
    },1000);
});

jQuery("html").removeClass("no-js").addClass("js");
if (navigator.appVersion.indexOf("Mac") !== -1) {
    jQuery("html").addClass("osx")
}
jQuery(document).ready(function(e) {
    e("a[data-rel]").each(function() {
        e(this).attr("rel", e(this).data("rel"))
    });
    (function() {
        e(window).load(function() {
            e("a[rel=external]").attr("target", "_blank")
        })
    })();
    e("nav").sticky({
        topSpacing: 0
    });
    e("nav").localScroll({
        duration: 1000,
        offset: {
            top: 0,
            left: 0
        },
        onBefore: function(){
            e.localScrollEvent = true;
        },
        onAfter: function(){
            checkNavItem(e);
            e.localScrollEvent = false;
        }
    });
    e(".select-menu").change(function() {
        e("html, body").animate({
            scrollTop: e(e(this).find("option:selected").val()).offset().top
        }, 1e3, function() {
            window.location.hash = e(this).find("option:selected").val()
        })
    });
    e("<option />", {
        selected: "selected",
        value: "",
        text: "Navigation"
    }).appendTo(".select-menu");
    e(".navi a").each(function() {
        var t = e(this);
        e("<option />", {
            value: t.attr("href"),
            text: t.attr("title")
        }).appendTo(".select-menu")
    });

    e(window).scroll(function() {
        if(e.localScrollEvent){
            return;
        }
        checkNavItem(e);

       
    });
    checkHeaderHeight();
    //$("#my-background").css("background-size", "auto " + ($(window).height() * 1.5).toString() + "px");

    $('.gallery').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled:true,
                preload: [0,2], // read about this option in next Lazy-loading section
                navigateByImgClick: true,
                tPrev: 'Anterior', // title for left button
                tNext: 'Siguiente', // title for right button
                tCounter: '<span class="mfp-counter">%curr% de %total%</span>' // markup of counter
            }
        });
    });

    $('.popup-image').each(function(){
        $(this).magnificPopup({
            type: 'image'
            // other options
        });
    });
});