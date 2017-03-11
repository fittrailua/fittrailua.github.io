$('#donationForm').one('submit', function(event) {
    var $form = $('#donationForm');
    var $feedback = $('#donationFormFeedback');
    var $name = $('#name');
    var $email = $('#email');
    var $amount = $('#amount');

    var nameGoogleID = "entry.1535784345";
    var emailGoogleID = "entry.815196922";
    var amountGoogleID = "entry.238879755";

    var submitURL = (
        'https://docs.google.com/forms/d/e/1FAIpQLSfhxbhsTJLBrujNWb_fi8GWVm_rTppNr4nGTams5XNmTOw2Tg/formResponse?' +
        nameGoogleID + "=" + encodeURIComponent($name.val()) + "&" +
        emailGoogleID + "=" + encodeURIComponent($email.val()) + "&" +
        amountGoogleID + "=" + encodeURIComponent($amount.val()) +
        '&submit=Submit'
    );
    $form.attr('action', submitURL);
    $form.trigger('reset');
    $feedback.text('Дякуємо!');
});

