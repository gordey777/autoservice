;(function() {
	function accordion() {
		var flag = false;

		function init() {
			if(window.innerWidth <=767) {
				if(!flag) {
					var open = false,
							$acc = $('.js-acc'),
							$accItem = $('.js-acc-item'),
							$accTrigger = $('.js-acc-trigger'),
							$accContent = $('.js-acc-content'),

							$accSub = $('.js-acc-sub'),
							$accSubItem = $('.js-acc-sub-item'),
							$accSubTrigger = $('.js-acc-sub-trigger'),
							$accSubContent = $('.js-acc-sub-content');
					// 1 level		
					$accTrigger.on('click', function() {
						var $accItemThis = $(this).closest($accItem);
						$(this).closest($acc).find($accItem).not($accItemThis).removeClass('is-open');
						$(this).closest($accItem).toggleClass('is-open');
							if($accItem.hasClass('is-open')) {
								open = true;
							}
					})
					// 2 level
					$accSubTrigger.on('click', function() {
						var $accSubItemThis = $(this).closest($accSubItem);
						$(this).closest($accSub).find($accSubItem).not($accSubItemThis).removeClass('is-open');
						$(this).closest($accSubItem).toggleClass('is-open');
							if($accSubItem.hasClass('is-open')) {
								open = true;
							}
					})
					// click on empty space
					$(document).on('click touchend', function(e) {
						if(open) {
								var isBtn = !!$(e.target).closest('.js-nav-holder').length;
								if(!isBtn) {

									$('.js-acc-item').removeClass('is-open');
									$('.js-acc-sub-item').removeClass('is-open');
									open = false;
								}
						}
				})
				}
			} else {
					if(flag) {
						$('.js-acc-item').removeClass('is-open');
						$('.js-acc-sub-item').removeClass('is-open');
						flag = false;
					}
			}
		}
		if($('.js-acc').length) {
			init();
			$(window).on('resize', init);
		}
	}
	accordion();
}())