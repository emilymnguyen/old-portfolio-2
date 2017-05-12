function changePage(button) {
    var label = $(button).text();
    var target;
    // Get div corresponding to button
    if (label == "About Me") {
        target = $("#about");
    }
    else if (label == "Work") {
        target = $("#work");
    }
    else if (label == "Resume") {
        // Link resume
        return;
    }
    else if (label == "Contact") {
        target = $("#contact");
    }
    // Return if target page is already active
    if ($(target).hasClass("active")) {
        return;
    }
    // Otherwise, switch page
    $("#content > .active").hide();
    $("#content > .active").removeClass("active");
    $(target).addClass("active");
    $("#content > .active").show();
    // Update active nav button
    $("#nav .active").removeClass("active");
    $(button).addClass("active");
    return;
}

function expandWork(button) {
    $('body').addClass('no-scroll');
    $('#work-expand').css('display', "block");
}

function closeWork() {
    $('body').removeClass('no-scroll');
    $('#work-expand').css('display', "none");
}
var main = function () {
    /* Load/destroy skrollr */
    // initialize skrollr if the window width is large enough
    if ($(window).height() < 350) {
        skrollr.init({
            forceHeight: false
        });
    }
    // disable skrollr if the window is resized below 768px wide
    $(window).on('resize', function () {
        if ($(window).height() <= 350) {
            skrollr.init().destroy(); // skrollr.init() returns the singleton created above
        }
    });
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
            $('#scroll-button-wrapper').css('position', 'absolute');
            $('#scroll-button-wrapper').css('margin-top', '2000px');
            $('#logo-wrapper').css('position', 'absolute');
            $('#logo-wrapper').css('margin-top', '2000px');
        }
        else {
            $('#intro svg').css('margin-top', '0px');
            $('#intro svg').css('position', 'fixed');
            $('#scroll-button-wrapper').css('margin-top', '0px');
            $('#scroll-button-wrapper').css('position', 'fixed');
            $('#logo-wrapper').css('position', 'fixed');
            $('#logo-wrapper').css('margin-top', '0px');
        }
    });
    /* Intro scroll */
    $('.scroll-button').click(function () {
        // Scroll to end of intro if height < 1800
        if ($(window).scrollTop() < 1800) {
            $('html, body').animate({
                scrollTop: 1800
            }, 2000);
            return false;
        }
        // Otherwise, scroll to about me
        else {
            $('html, body').animate({
                scrollTop: $("#nav").offset().top + -40
            }, 1600);
            return false;
        }
    });
    /* Nav */
    $('#nav span').click(function () {
        changePage(this);
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
    /* Work open/close buttons */
    $('#work .open').click(function () {
        expandWork(this);
    });
    $('#work-expand .close p').click(function () {
        closeWork();
    });
};
$(document).ready(main);