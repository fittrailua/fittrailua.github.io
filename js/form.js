$('#donationForm').one('submit', function(event) {
    var $form = $('#donationForm');
    var $feedback = $('#donationFormFeedback');
    var $name = $('#name');
    var $email = $('#email');
    var $amount = $('#amount');
    var $otherContact = $('#otherContact');

    var name = $name.val();
    var email = $email.val();
    var amount = $amount.val();
    var otherContact = $otherContact.val();

    var nameGoogleID = "entry.1535784345";
    var emailGoogleID = "entry.815196922";
    var amountGoogleID = "entry.238879755";
    var otherContactGoogleID = "entry.1805461598";

    var submitURL = (
        'https://docs.google.com/forms/d/e/1FAIpQLSfhxbhsTJLBrujNWb_fi8GWVm_rTppNr4nGTams5XNmTOw2Tg/formResponse?' +
        nameGoogleID + "=" + encodeURIComponent(name) + "&" +
        emailGoogleID + "=" + encodeURIComponent(email) + "&" +
        amountGoogleID + "=" + encodeURIComponent(amount) + "&" +
        otherContactGoogleID + "=" + encodeURIComponent(otherContact) +
        '&submit=Submit'
    );
    $form.attr('action', submitURL);
    $form.hide();
    $feedback.addClass('show');

    setTimeout(function() {
        window.totalDonations.add(amount);
    }, 0);
});

