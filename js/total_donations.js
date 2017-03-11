$(function() {
  var number = 0;
  var total = 0;

  var addToTotalDonations = function (amount) {
    number += 1;
    total += parseInt(amount, 10);

    firebase.database().ref().set({
      numberOfDonators: number,
      totalDonations: total
    });
    updateUI();
  }

  var updateUI = function () {
    $('#numberOfDonators').text(number);
    $('#totalDonations').text(total);
  }

  firebase.database().ref().on('value', function(node) {
    data = node.val();
    number = parseInt(data.numberOfDonators, 10) || 0;
    total = parseInt(data.totalDonations, 10) || 0;
    updateUI();
  });

  window.totalDonations = {
    add: addToTotalDonations
  }
});
