$(document).ready(function() {

	/**
	 * Declare 'use strict' to the more restrictive code and a bit safer,
	 * sparing future problems
	 */
	"use strict";


/*---------------------------------------------------------------- One Page Navigation ----------------------------*/
	$('header .nav').onePageNav({
	filter: ':not(.external)',
	scrollThreshold: 0.25,
	scrollOffset: 0,
	});



/*---------------------------------------------------------------- Fixed menu ----------------------------*/
	$('header').scrollToFixed();


/*--------------------------------------------------------------------------- Tooltip-------------------------------*/
	$('.tooltips').tooltip();

/*------------------------------------------------------------------------------ GMaps ----------------------------*/
	if (typeof GMaps === "function") {
		var map;
		map = new GMaps({
			div: '#map',
			lat: 41.8902624,
			lng: 12.4923096
		});

		map.addMarker({
			lat: 41.8902624,
			lng: 12.4923096,
			title: 'Contanct',
			infoWindow: {
				content: '15rd Avenue, New York,<br /> 156408, US<br /> <br /> Email: info@company.com <br /> Web: company.com'
			}
		});
	}

/*----------------------------------------------------- contact Form -------------------------*/
	$("#contact").submit(function() {
		var elem = $(this);
		var urlTarget = $(this).attr("action");
		$.ajax({
			type : "POST",
			url : urlTarget,
			dataType : "html",
			data : $(this).serialize(),
			beforeSend : function() {
				elem.prepend("<div class='loading alert'>" + "<a class='close' data-dismiss='alert'>×</a>" + "Loading" + "</div>");
				//elem.find(".loading").show();
			},
			success : function(response) {
				elem.prepend(response);
				//elem.find(".response").html(response);
				elem.find(".loading").hide();
				elem.find("input[type='text'],input[type='email'],textarea").val("");
			}
		});
		return false;
	});


/*------------------------------------------------------------------------------ Animation ----------------------------*/
	jQuery('.animate').waypoint(function() {
	     var animation = jQuery(this).attr("data-animate");
	     jQuery(this).addClass(animation);
	     jQuery(this).addClass('animated');
	}, { offset: '80%' });



});

