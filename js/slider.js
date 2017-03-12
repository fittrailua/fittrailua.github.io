$(function() {
    var SLIDE_WIDTH = 400;

    var findSlider = function(event) {
        return $(event.target).closest('.slider');
    }

    var isFirstSlide = function($slider, marginLeft) {
        return marginLeft == 0;
    }

    var isLastSlide = function($slider, marginLeft) {
        return marginLeft == lastSlideMarginLeft($slider);
    }

    var lastSlideMarginLeft = function($slider) {
        var numberOfSlides = $slider.find('.slide').length;
        return -1 * SLIDE_WIDTH * (numberOfSlides - 1);
    }

    $('.slider-prev').on('click', function(event) {
        var $slider = findSlider(event);
        var $slideWindow = $slider.find('.slide-window');

        var marginLeftPx = $slideWindow.css('marginLeft');
        var marginLeft = parseInt(marginLeftPx, 10);

        if (marginLeft % SLIDE_WIDTH != 0)
            return;

        if (isFirstSlide($slider, marginLeft))
            $slideWindow.css({ marginLeft: lastSlideMarginLeft($slider) });
        else
            $slideWindow.css({ marginLeft: marginLeft + SLIDE_WIDTH });
    });

    $('.slider-next').on('click', function(event) {
        var $slider = findSlider(event);
        var $slideWindow = $slider.find('.slide-window');

        var marginLeftPx = $slideWindow.css('marginLeft');
        var marginLeft = parseInt(marginLeftPx, 10);

        if (marginLeft % SLIDE_WIDTH != 0)
            return;

        if (isLastSlide($slider, marginLeft))
            $slideWindow.css({ marginLeft: '0px' });
        else
            $slideWindow.css({ marginLeft: marginLeft - SLIDE_WIDTH + 'px' });
    });
});
