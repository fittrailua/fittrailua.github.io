$(function() {
    $('#sendEmail').on('click', function() {
        ga('send', {
          hitType: 'event',
          eventCategory: 'Links',
          eventAction: 'send-email',
          eventLabel: 'Landing Page'
        });
    });

    $('#supportUs').on('click', function() {
        ga('send', {
          hitType: 'event',
          eventCategory: 'Links',
          eventAction: 'support-us',
          eventLabel: 'Landing Page'
        });
    });

    $('#showBudget').on('click', function() {
        ga('send', {
          hitType: 'event',
          eventCategory: 'Links',
          eventAction: 'show-budget',
          eventLabel: 'Landing Page'
        });
    });

    $('#formSubmit').on('click', function() {
        ga('send', {
          hitType: 'event',
          eventCategory: 'Forms',
          eventAction: 'click-donate-button',
          eventLabel: 'Landing Page'
        });
    });

    $('#showBrochure').on('click', function() {
        ga('send', {
          hitType: 'event',
          eventCategory: 'Links',
          eventAction: 'show-brochure',
          eventLabel: 'Landing Page'
        });
    });

    $('#showSketches').on('click', function() {
        ga('send', {
          hitType: 'event',
          eventCategory: 'Links',
          eventAction: 'show-sketches',
          eventLabel: 'Landing Page'
        });
    });
});
