;(function() {
	var fixHead = (function() {
		if(	window.innerWidth < 768 ) {
			$('.js-header-fixed').removeClass('js-header-fixed');
			$('.header').addClass('js-header-fixed');
		}
		var $header =  $('.js-header-fixed'),
				$wrapper = $('.wrapper'),
				headerH = $('.header').outerHeight(),
				elH = $header.outerHeight();

		var app = {
			checkP: function() {
				

				var cur_p = $(window).scrollTop();

				if(cur_p > headerH) {
					$header.addClass('is-fixed');
					$wrapper.css('paddingTop', elH);
				}else {
					$header.removeClass('is-fixed');
					$wrapper.css('paddingTop', '');
				}
				
			},
			initHeight: function() {
				if(window.innerWidth >= 768) {
					$header.find('.js-equal-height').css('height', '');
					$header.find('.js-equal-height').matchHeight({
						byRow: true,
				    property: 'height',
				    target: null,
				    remove: false
					});
				}else {
					$header.find('.js-equal-height').css('height', '');
				}
			},
			events: function() {
				var thet = this;
				var timer;
				$(window).on('scroll', function() {
					thet.checkP();
					clearTimeout(timer);
					timer = setTimeout(function() {
						thet.initHeight();
					}, 100)
				})
			}
		}

		return {
			init: function() {
				if($header.length) {
					app.initHeight();
					app.events();
				}
			}
		}

	}()) 

	fixHead.init();
	

}())