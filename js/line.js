$(function() {
    var path = document.getElementById("path");
    var length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    function updatePath() {
        var offset = document.body.scrollTop + document.documentElement.scrollTop;
        var scrollPercent;
        var slowDownOffset = 800;
        if (offset < slowDownOffset) {
            var k = 800 + (1500 - 800) * offset / slowDownOffset;
            scrollPercent = offset / k;
        } else
            scrollPercent = offset / 1500;

        var draw = length * scrollPercent;
        path.style.strokeDashoffset = length - draw;
    }

    window.addEventListener("scroll", updatePath);
});
