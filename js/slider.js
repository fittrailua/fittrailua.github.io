$(function() {
    var currentSlide = 0;

    var findSlider = function(event) {
        return $(event.target).closest('.slider');
    }

    var isFirstSlide = function() {
        return currentSlide == 0;
    }

    var isLastSlide = function($slider) {
        return currentSlide == lastSlide($slider);
    }

    var lastSlide = function($slider) {
        return $slider.find('.slide').length - 1;
    }

    var slideWidth = function($slider) {
        return $slider.width();
    }

    $('.slider-prev').on('click', function(event) {
        var $slider = findSlider(event);
        var $slideWindow = $slider.find('.slide-window');

        if (isFirstSlide())
            currentSlide = lastSlide($slider);
        else
            currentSlide -= 1;

        $slideWindow.css({ marginLeft: -1 * currentSlide * slideWidth($slider) });

        ga('send', {
          hitType: 'event',
          eventCategory: 'Slider',
          eventAction: 'slider-prev',
          eventLabel: 'Landing Page'
        });
    });

    $('.slider-next').on('click', function(event) {
        var $slider = findSlider(event);
        var $slideWindow = $slider.find('.slide-window');

        if (isLastSlide($slider))
            currentSlide = 0;
        else
            currentSlide += 1;

        $slideWindow.css({ marginLeft: -1 * currentSlide * slideWidth($slider) });

        ga('send', {
          hitType: 'event',
          eventCategory: 'Slider',
          eventAction: 'slider-next',
          eventLabel: 'Landing Page'
        });
    });
});
