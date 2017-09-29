;(function() {
	function accordionMod() {
		var flag = false;

		function init() {
			if(window.innerWidth <=767) {
				if(!flag) {
					var open = false,
							$acc = $('.js-acc-mod'),
							$accItem = $('.js-acc-mod-item'),
							$accTrigger = $('.js-acc-mod-trigger'),
							$accContent = $('.js-acc-mod-content');
					// 1 level		
					$accTrigger.on('click', function() {
						var $accItemThis = $(this).closest($accItem);
						$(this).closest($acc).find($accItem).not($accItemThis).removeClass('is-open');
						$(this).closest($accItem).toggleClass('is-open');
							if($accItem.hasClass('is-open')) {
								open = true;
							}
					})
				}
			} else {
					if(flag) {
						$('.js-acc-mod-item').removeClass('is-open');
						
						flag = false;
					}
			}
		}
		if($('.js-acc-mod').length) {
			init();
			$(window).on('resize', init);
		}
	}
	accordionMod();
}())