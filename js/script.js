$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
        $(".header_section").addClass("fixed-top")
    } else {
        $(".header_section").removeClass("fixed-top")
    }
});