function showModal(modalId) {
    $('#' + modalId + ' .modal').show();
    $('body').css({ overflow: 'hidden' });
}

function hideModals() {
    $('.modal').hide();
    $('body').css({ overflow: 'auto' });
}

$(function() {
    $('#schemaImage').on('click', function() {
        if ($(window).width() > 667) {
            showModal('schemaModal');
        }
    });

    $('.modal').on('click', function(event) {
        if ($(event.target).is('.modal')) {
            hideModals();
        }
    });

    $('.modal-close').on('click', function() {
        hideModals();
    });
});
