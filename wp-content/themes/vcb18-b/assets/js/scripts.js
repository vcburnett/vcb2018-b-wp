$( document ).ready(function() {

	var browserWindow = $(window);
	var browserH = browserWindow.height();
	var browserW = browserWindow.width();

	var btnBurger = $("#btn-burger");
	var navButton = $("#nav-button");
	var menuWrapper = $("#menu-wrapper");
	var btnMM = $(".btn-mm");

	function updateElements() {

		browserH = browserWindow.height();
		browserW = browserWindow.width();

	}

	// ON RESIZE
	browserWindow.on("resize", function() {
		updateElements();
	}).trigger("resize");

	btnBurger.on("click", function() {
		if ( $(this).hasClass("btn-burger-close") ) {
			$(this).removeClass("btn-burger-close");
			menuWrapper.removeClass("menu-wrapper-on");
			navButton.removeClass("nav-button-transparent");
		} else {
			$(this).addClass("btn-burger-close");
			menuWrapper.addClass("menu-wrapper-on");
			navButton.addClass("nav-button-transparent");
		}
	});
	btnMM.on("click", function() {
		btnBurger.removeClass("btn-burger-close");
		menuWrapper.removeClass("menu-wrapper-on");
	});

	function scrollToAnchor() {

	}

	//Scroll links
	$(".scroll").click( function(event) {

			//get the full url - like mysitecom/index.htm#home
			var full_url = this.href;
			console.log("Full URL: " + full_url);

			//split the url by # and get the anchor target name - home in mysitecom/index.htm#home
			var parts = full_url.split("#");
			var trgt = "#" + parts[1];

			console.log("Taget anchor: " + trgt);

			//get the top offset of the target anchor
			var trgt_offset = $(trgt).offset();
			var trgt_top = trgt_offset.top;
			console.log("trgt_top " + trgt_top);

			//goto that anchor by setting the body scroll top to anchor top
			$('html, body').animate({
			scrollTop:trgt_top},
			750,
			"swing"
		);
		return false;
	});

});