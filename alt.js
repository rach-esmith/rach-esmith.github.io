/*jslint browser: true*/
/*global $, jQuery, alert*/

var opened = false;

// just fade in a page
function fadePage(pageName) {
    var page = pageName + "_raw.html";

    $.get(page, function (data) {

        $("#supercontent").html(data);
        $("#supercontent").hide().fadeIn(1000);
    });
}

// pull up curtain and/or clicked another link load a new page
function changePage(pageName) {
    var duration = 400;

    if (!opened) {

        $("#navbg").animate({
            height: "150px"
        }, duration, "swing");

        opened = true;

        // animate the nav bar up
        $("#nav").animate({
                top: "85px",
            },
            duration, "swing",
            function () {
                // when done animating up, fade page in
                $("#me").fadeIn(500);
                fadePage(pageName);
            });
    } else {
        // fade out old page
        $("#supercontent").fadeOut(500, function () {
            // fade in new page when old page is done fading out
            fadePage(pageName);
        });
    }
}

$(document).ready(function () {

    // fade in the entire nav bar
    $("#navban").fadeIn(1500, "linear", function () {
        $("#navlinks").fadeIn();
    });

    // attach click events to nav images to load new pages
    $("#navlinks img").click(function () {
        changePage($(this).attr("page"));
    });

    // attach/detach fixed class based on scroll
    $(window).bind('scroll', function () {
        var navHeight = 99; // $("#navlinks").getBoundingClientRect().top;

        if ($(window).scrollTop() > navHeight) {
            $("#navlinks").addClass('fixed');
            $("#me").fadeOut();
        } else {
            $("#navlinks").removeClass('fixed');
            $("#me").fadeIn();
        }
    });
});
