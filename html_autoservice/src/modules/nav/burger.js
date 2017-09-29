;(function() {
	function burger() {
		var flag = false;

		function init() {
			if(window.innerWidth <=767) {
				if(!flag) {
					var $nav = $('.js-nav'),
							$holder = $('.js-nav-holder'),
							$trigger = $('.js-nav-trigger');
					$trigger.on('click', function() {
						$(this).closest($nav).toggleClass('is-active');
						$(this).closest('html').toggleClass('is-locked');
						
						flag = true;
					});
				}
			} else {
					if(flag) {
						$('.js-nav').removeClass('is-active');
						flag = false;
					}
			}
		}
		if($('.js-nav').length) {
			init();
			$(window).on('resize', init);
		}
	}
	burger();
}())