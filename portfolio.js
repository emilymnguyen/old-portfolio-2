var main = function () {
    /* Intro scroll */
    $('#scroll').click(function () {
        $('html, body').animate({
            scrollTop: 1400
        }, 2000);
    });
    $('#title').click(function () {
        $('html, body').animate({
            scrollTop: 1400
        }, 2000);
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
        if (filter == "all") $('#work .item').show();
        // Filter: UI/UX
        else if (filter == "UI/UX") {
            $('.gd').hide();
            $('.ux').show();
        }
        // Filter: graphic design
        else if (filter == "graphic design") {
            $('.ux').hide();
            $('.gd').show();
        }
    });
};
$(document).ready(main);