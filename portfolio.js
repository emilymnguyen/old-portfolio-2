var main = function () {
    $('#title').click(function () {
        $('html, body').animate({
            scrollTop: 1400
        }, 2000);
    });
};
$(document).ready(main);