;(function() { 
	function autoFooter() {
		if($('.js-footer').length) {
			var wrapper = $('.wrapper'),
				  footer = $('.js-footer'),
			 		footerHeight = footer.outerHeight();
			footer.css('margin-top',-footerHeight);
			wrapper.css('padding-bottom',footerHeight);
		}
	}
	autoFooter();
	$(window).on('resize',function() {
		autoFooter();
	})
}());