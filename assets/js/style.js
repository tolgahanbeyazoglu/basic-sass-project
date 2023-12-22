$(document).ready(function () {

    //JQUERY CODE RENDER

});


//BONUS SVG PATH RENDER

var obj = document.querySelectorAll("img.svg");
$.each(obj, function () {
    var $img = jQuery(this);
    var imgID = $img.attr("id");
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    jQuery.get(
        imgURL,
        function (data) {
            var $svg = jQuery(data).find("svg");
            if (typeof imgID !== "undefined") {
                $svg = $svg.attr("id", imgID);
            }
            if (typeof imgClass !== "undefined") {
                $svg = $svg.attr("class", imgClass + " replaced-svg");
            }
            $svg = $svg.removeAttr("xmlns:a");
            if (
                !$svg.attr("viewBox") &&
                $svg.attr("height") &&
                $svg.attr("width")
            ) {
                $svg.attr(
                    "viewBox",
                    "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
                );
            }
            $img.replaceWith($svg);
        },
        "xml"
    );
});