/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {

	// fade in the entire nav bar
	$("#navban").fadeIn(1500, "linear", function () {
		$("#navlinks").fadeIn();
	});

	// attach click events to nav images
	$("#navlinks img").click(function () {
		
		var page = $(this).attr("page")+"_raw.html";
		var duration = 400;
		
		$("#navbg").animate({
			height: "150px",
			width: "900px"
		}, duration, "swing");
		
		// animate the nav bar up
		$("#nav").animate({
				top: "85px",
			},
			duration, "swing",
			function () {
				$("#copy").fadeIn();
				$.get(page, function(data) {
					
					
					$("#supercontent").html(data);
					$("#supercontent").fadeIn(1000);
					$("#supercontent").fadeOut(1000);
				});
			});
	});
});