$(function() {
    var path = document.getElementById("path");
    var length = path.getTotalLength();

    path.style.strokeDashoffset = length;

    function updatePath() {
      var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      var draw = length * scrollpercent;
      path.style.strokeDashoffset = length - draw;
    }

    window.addEventListener("scroll", updatePath);
});
