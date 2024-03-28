(function() {
    "use strict";

    $(window).load(function () {
        $(".btt i").hide();
    });
    // Window Load

    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();

        if (scrolling > 400) {
            $(".btt i").fadeIn(500);
        } else {
            $(".btt i").fadeOut(500);
        }
        
        if (scrolling > 100) {
            $(".main-navbar").addClass("scrolled");
        } else {
            $(".main-navbar").removeClass("scrolled");
        }
    });
    // Window Scroll

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    // Tooltip

    $(".btt i").click(function () {
        $("html, body").animate(
            {
            scrollTop: 0,
            },
            500
        );
    });
    // BackToTop
}(jQuery));