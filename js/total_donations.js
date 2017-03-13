$(function() {
  var number = 0;
  var total = 0;

  var addToTotalDonations = function(amount) {
    number += 1;
    total += parseInt(amount, 10);

    firebase.database().ref().set({
      numberOfDonators: number,
      totalDonations: total
    });
    updateUI();
  }

  var humanize = function(number) {
    var rest = number % 10;
    if (number >= 10 && number <= 20)
      return number + ' людей'
    else if (rest == 1)
      return number + ' людина'
    else if (rest == 2 || rest == 3 || rest == 4)
      return number + ' людини'
    else
      return number + ' людей'
  }

  var updateUI = function() {
    $('#numberOfDonators').text(humanize(number));
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
