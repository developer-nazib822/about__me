// typed js
var typed = new Typed('.type', {
    strings: ['Web Developer', 'Beginner', 'Student'],
    typeSpeed: 25,
    backSpeed: 25,
    loop: true,
});
// header js
$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
});

$(function() {
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        scrollDistance: 300, // Distance from top/bottom before showing element (px)
        scrollFrom: 'top', // 'top' or 'bottom'
        scrollSpeed: 300, // Speed back to top (ms)
        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
        animation: 'fade', // Fade, slide, none
        animationSpeed: 200, // Animation speed (ms)
        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false, // Set a custom target element for scrolling to. Can be element or number
        scrollTitle: false, // Set a custom <a> title if required.
        scrollImg: false, // Set true to use image
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647 // Z-Index for the overlay
    });
});


$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('#scrollUp').addClass('d-block');
    } else {
        $('#scrollUp').removeClass('d-block');
    }
});