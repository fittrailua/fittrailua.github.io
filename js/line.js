$(function() {
    // var path = document.getElementById("path");
    // var dashOffset = parseInt($("#path").css("stroke-dashoffset"), 10);

    // $(window).scroll(function() {
    //     var percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);
    //     var offsetUnit = (percentageComplete * (dashOffset / 100));
    //     $("#path").css("stroke-dashoffset", dashOffset - offsetUnit);
    // });



    var path = document.getElementById("path");
    var length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    function updatePath() {
        var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

        var draw = length * scrollpercent;
        path.style.strokeDashoffset = length - draw;
    }

    window.addEventListener("scroll", updatePath);
});
