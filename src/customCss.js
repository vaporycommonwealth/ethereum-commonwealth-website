import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min'

export function hideScrollTop() {
    $('#scrollTop').hide();
}

export function smoothScroll() {

    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
                &&
                window.location.hostname === this.hostname
            ) {

                $('.navbar-collapse').collapse('hide');

                // Figure out element to scroll to
                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        const $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                        ;
                    });
                }
            }
        });
}


export function shrinkNavbarShowScrollTopButton() {

    $(window).scroll(function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");

            $('#scrollTop').show();

        } else {
            $("#mainNav").removeClass("navbar-shrink");
            $('#scrollTop').hide();
        }
    });

}
