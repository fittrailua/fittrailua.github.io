$(function() {
    $('#sendEmail').on('click', function() {
        ga('send', {
          hitType: 'event',
          eventCategory: 'Links',
          eventAction: 'send-email'
        });
    });

    $('#showBudget').on('click', function() {
        ga('send', {
          hitType: 'event',
          eventCategory: 'Links',
          eventAction: 'show-budget'
        });
    });

    $('#formSubmit').on('click', function() {
        ga('send', {
          hitType: 'event',
          eventCategory: 'Forms',
          eventAction: 'click-donate-button'
        });
    });

    $('#showBrochure').on('click', function() {
        ga('send', {
          hitType: 'event',
          eventCategory: 'Links',
          eventAction: 'show-brochure'
        });
    });

    $('#showSketches').on('click', function() {
        ga('send', {
          hitType: 'event',
          eventCategory: 'Links',
          eventAction: 'show-sketches'
        });
    });
});
