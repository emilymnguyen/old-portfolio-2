var main = function () {
    /* Un-fix intro on load */
    if ($(window).scrollTop() > 2000) {
        $('#intro svg').css('position', '');
        $('#intro svg').css('margin-top', '2000px');
    }
    else {
        $('#intro svg').css('margin-top', '0px');
        $('#intro svg').css('position', 'fixed');
    }
    /* Un-fix intro on scroll */
    $(window).scroll(function () {
        if ($(window).scrollTop() > 2000) {
            $('#intro svg').css('position', 'relative');
            $('#intro svg').css('margin-top', '2000px');
            $('#title').css('position', 'relative');
            $('#title').css('margin-top', '2000px');
        }
        else {
            $('#intro svg').css('margin-top', '0px');
            $('#intro svg').css('position', 'fixed');
            $('#title').css('margin-top', '0px');
            $('#title').css('position', 'fixed');
        }
    });
    /* Intro scroll */
    $('#scroll svg').click(function () {
        $('html, body').animate({
            scrollTop: 1800
        }, 2000);
        return false;
    });
    /* Nav */
    $('#nav a').click(function () {
        var i = $(this).index();
        if (i == 0) {
            $('html, body').animate({
                scrollTop: 1800
            }, 1000);
            return false;
        }
        if (i == 1) {
            $('html, body').animate({
                scrollTop: $("#about").offset().top + -80
            }, 1000);
            return false;
        }
        else if (i == 2) {
            $('html, body').animate({
                scrollTop: $("#work").offset().top + -80
            }, 1000);
            return false;
        }
        else if (i == 4) {
            $('html, body').animate({
                scrollTop: $("#contact").offset().top + -80
            }, 1000);
            return false;
        }
    });
    /* Work filters */
    $('#filters p').click(function () {
        // Return if active filter is selected
        if ($(this).hasClass('active')) return;
        // Switch active class 
        $('#filters .active').removeClass('active');
        $(this).addClass('active');
        // Get new active filter label
        var filter = $('#filters .active').text();
        // Filter: all
        if (filter == "all") $('#work .item').slideDown();
        // Filter: UI/UX
        else if (filter == "UI/UX") {
            $('.gd').slideUp();
            $('.ux').slideDown();
        }
        // Filter: graphic design
        else if (filter == "graphic design") {
            $('.ux').slideUp();
            $('.gd').slideDown();
        }
    });
};
$(document).ready(main);