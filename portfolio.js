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
    //  $('#work-expand').css('display', "block");
    $('#work-expand').fadeIn(200);
}

function closeWork() {
    $('body').removeClass('no-scroll');
    $('#work-expand').fadeOut(200, "swing", function () {
        // Show to reset scroll then hide again
        $('#work-expand').css("visibility", "hidden");
        $('#work-expand').css("display", "block");
        $('#work-expand .overlay').scrollTop(0);
        $('#work-expand').css("display", "none");
        $('#work-expand').css("visibility", "visible");
    });
}

function updateOddEven(label) {
    if (label == "all") {
        var item = "#work .item";
    }
    else if (label == "ux") {
        var item = "#work .ux";
    }
    else if (label == "gd") {
        var item = "#work .gd";
    }
    var count = 0;
    $(item).each(function () {
        $(this).removeClass('odd even');
        if (count % 2 == 0) $(this).addClass('odd');
        else $(this).addClass('even');
        count++;
    });
}
var main = function () {
    // $('body').toggleClass('light-off');
    $('#toggle').toggleClass('on');
    $('.logo').click(function () {
        $('body').toggleClass('light-off');
        $('#toggle').toggleClass('on');
    });
    $('#toggle').click(function () {
        $('body').toggleClass('light-off');
        $(this).toggleClass('on');
    });
    /* Intro scroll */
    $('.scroll-button').click(function () {
        // Scroll to about me
        $('html, body').animate({
            scrollTop: $("#nav").offset().top + -40
        }, 1600);
        return false;
    });
    /* Nav */
    $('#nav span').click(function () {
        changePage(this);
    });
    /* Footer link */
    $('.footer p').click(function () {
        // Shake if contact page is already active
        if ($('#contact').hasClass('active')) {
            $('h1:contains("Contact")').effect("shake", {
                times: 2
                , distance: 10
            }, 400);
        }
        // Otherwise, change to contact page
        else changePage($('#nav span:contains("Contact")'));
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
        if (filter == "all") {
            updateOddEven("all");
            //  $('#work .item').slideDown();
            $('#work .item').show();
        }
        // Filter: UI/UX
        else if (filter == "UI/UX") {
            updateOddEven("ux");
            //    $('.gd').slideUp();
            //  $('.ux').slideDown();
            $('.gd').hide();
            $('.ux').show();
        }
        // Filter: graphic design
        else if (filter == "graphic design") {
            updateOddEven("gd");
            //  $('.ux').slideUp();
            //    $('.gd').slideDown();
            $('.ux').hide();
            $('.gd').show();
        }
    });
    /* Work open/close buttons 
    $('#work .open').click(function () {
        expandWork(this);
        var link = $(this).find('.link').text();
        $("#work-expand").load(link);
    });
    $('#work .img-container').click(function () {
        var link = $(this).closest('.item').find('.link').text();
        $("#work-expand").load(link);
        expandWork(this);
    });
    $('#work-expand .close p').click(function () {
        closeWork();
    }); */
};
$(document).ready(main);