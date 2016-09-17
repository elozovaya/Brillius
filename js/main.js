$(document).ready(function(){
	$('#carousel').slick({
		infinite: true,
		dots: false,
		fade: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	initMobileNav();
	// initMobileSidebar();
});

function initMobileNav(){
	// Create the dropdown base
	var nav = $("#main-nav");
	$("<select class='nav-select visible-xs' />").appendTo(nav);
	var select = nav.find("select");
	// Populate dropdown with menu items
	nav.find("a").each(function() {
		var el = $(this);
			$("<option />", {
			"value"   : el.attr("href"),
			"text"    : el.text()
		}).appendTo("nav select");//nav-teg
	});

	$("nav select").change(function() {
		window.location = $(this).find("option:selected").val();
	});
}


// function initMobileSidebar(){
// 	// Portfolio, create the dropdown base
// 	var sidebar = $("#portfolio-sidebar");
// 	$("<select class='sidebar-select visible-xs' />").appendTo(sidebar);
// 	var select = sidebar.find("select");
// 	// Populate dropdown with menu items
// 	sidebar.find("a").each(function() {
// 		var el = $(this);
// 			$("<option />", {
// 			"value"   : el.attr("href"),
// 			"text"    : el.text()
// 			}).appendTo(select);
// 	});

// 	select.change(function() {
// 		window.location = $(this).find("option:selected").val();
// 	});
// }


	// Knob
	$(function($) {
		$(".knob").knob({
			change : function (value) {
				  //console.log("change : " + value);
			},
			release : function (value) {
				  //console.log(this.$.attr('value'));
				  console.log("release : " + value);
			},
			cancel : function () {
				console.log("cancel : ", this);
			},
			 /*format : function (value) {
			  return value + '%';
			  },*/
			draw : function () {

				  // "tron" case
				// if(this.$.data('skin') == 'tron') {

				// 	this.cursorExt = 0.3;

				// 	var a = this.arc(this.cv)  // Arc
				// 			  , pa                   // Previous arc
				// 			  , r = 1;

				// 	this.g.lineWidth = this.lineWidth;

				// 	if (this.o.displayPrevious) {
				// 		 pa = this.arc(this.v);
				// 		 this.g.beginPath();
				// 		 this.g.strokeStyle = this.pColor;
				// 		 this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
				// 		 this.g.stroke();
				// 	}

				// 	this.g.beginPath();
				// 	this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
				// 	this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
				// 	this.g.stroke();

				// 	this.g.lineWidth = 7;
				// 	this.g.beginPath();
				// 	this.g.strokeStyle = this.o.fgColor;
				// 	this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
				// 	this.g.stroke();

				// 	return false;
				// }
			}
		});
	});