/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {

	// fade in the entire nav bar
	$("#navban").fadeIn(1500, "linear", function () {
		$("#navlinks").fadeIn();
	});

	// attach click events to nav images
	$("#navlinks img").click(function () {

		var duration = 400;
		
		$("#navbg").animate({
			height: "150px"
		}, duration, "linear");
		
		// animate the nav bar up
		$("#nav").animate({
				top: "85px",
			},
			duration, "linear",
			function () {
				$("#copy").fadeIn();
				$.get("/raw.html", function(data) {
					$("#supercontent").html(data);
					$("#supercontent").fadeIn(1000);
				});
			});
	});
});