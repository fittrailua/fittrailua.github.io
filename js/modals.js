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
        showModal('schemaModal');
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
