var main = function () {
    /* Intro scroll */
    $('#scroll').click(function () {
        $('html, body').animate({
            scrollTop: 2000
        }, 2000);
        return false;
    });
    $('#title').click(function () {
        $('html, body').animate({
            scrollTop: 2000
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