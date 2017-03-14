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
            var k = 700 + (1590 - 700) * offset / slowDownOffset;
            scrollPercent = offset / k;
        } else
            scrollPercent = offset / 1590;

        scrollPercent = Math.min(scrollPercent, 1);

        var draw = Math.max(200, length * scrollPercent);
        path.style.strokeDashoffset = length - draw;
    }

    updatePath();
    window.addEventListener("scroll", updatePath);
});
