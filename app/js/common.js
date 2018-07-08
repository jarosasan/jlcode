$(document).ready(function() {
    if ($(window).width() < 576) {
        $('#bar').click(function () {
            $('.resp').toggle('slow');
        });
        $('.nav-link').click(function () {
            $('.resp').hide('slow');
        });
    }
    var $header = $('.top-menu');
    var scroll_class = 'fixed';
    var scrollAtY = 25;

    function deactivateHeader() {
        if (!$header.hasClass(scroll_class)) {
            $header.addClass(scroll_class)
        }
    }

    function activateHeader() {
        if ($header.hasClass(scroll_class)) {
            $header.removeClass(scroll_class)
        }
    }

    if ($(window).width() > 576) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > scrollAtY) {
                deactivateHeader();
            } else {
                activateHeader();
            }
        });
    }
$('a[href^="#"]').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});
