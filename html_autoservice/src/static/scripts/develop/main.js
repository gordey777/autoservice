;(function($) { 
	function select() {
		if($('.js-select').length) {
			$('.js-select').select2({
				placeholder: "Выбор",
				minimumResultsForSearch: -1
			});
		}
	}
	select();

	function equalHeight() {
		if($('.js-equal-height').length) { 
			$('.js-equal-height').matchHeight({
				byRow: true,
		    property: 'height',
		    target: null,
		    remove: false
			});
		}
	}
	equalHeight();

	function flexMenu() {
		var flag = false;
			function init() { 
				if(window.innerWidth>=768) {
					if (!flag) {
						$('.js-flex').flexMenu({
							"linkText": "Ещё.."
						});
						flag = true;
					} else {  if (flag) {
						$('.js-flex').flexMenu({
							"undo":  true
						})
							flag = false;
						}
				};
			}
		}
		if ($('.js-flex').length) {
			init();
			$(window).on('resize', init);
			$(window).on('click', function(e) {
				var $this = $(e.target);
				if(!$this.closest('.js-flex').length && $('.flexMenu-viewMore').hasClass('active')) {
					$('.flexMenu-viewMore').removeClass('active');
					$('.flexMenu-popup').hide();
				}
			})
		};
	}
	flexMenu();

	function sliderInit() {
		if($('.js-slider').length) {
			$('.js-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
				$('.js-slider').removeClass('is-loading');
			})
			$('.js-slider').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: false,
				arrows: true,
				autoplay: true,
				prevArrow: "<div class='slick-arrow slick-prev'><svg class='icon-arrow-right'><use xlink:href='#arrow-right'></use></svg></div>",
				nextArrow: "<div class='slick-arrow slick-next'><svg class='icon-arrow-right'><use xlink:href='#arrow-right'></use></svg></div>",
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2
						}
					}
				]
			});
		}
	}
	sliderInit();

	function fancyBox() {
		if ($("a[href$='.png'], a[href$='.jpg'], [data-fancybox]").length){
				$("a[href$='.png'], a[href$='.jpg'], [data-fancybox]").fancybox({
					infobar : false,
					slideShow  : false,
					titleShow : true,
					'titlePosition'     : 'inside'

			});
		};
		$("[data-fancybox]").fancybox({
			autoFocus: false
	});
		
	}
	fancyBox();

	function scrollOnClick() {
		$('.js-link').on('click', function(event) {
				event.preventDefault();
				var id = $(this).attr('href'),
						topBlock = $(id).offset().top;
						
				if(window.innerWidth >= 768) {
					var headerHeight = $('.js-header-fixed').outerHeight();

					$('body,html').animate({scrollTop: topBlock-headerHeight}, 1200);
				} else {
					$('body,html').animate({scrollTop: topBlock}, 1200);
				}
		})
	}
	scrollOnClick();

	function brandSliderInit() {
		if($('.js-brand-slider').length) {
			$('.js-brand-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
				$('.js-brand-slider').removeClass('is-loading');
			})
			$('.js-brand-slider').slick({
				slidesToShow: 6,
				slidesToScroll: 1,
				dots: false,
				arrows: true,
				autoplay: true,
				prevArrow: "<div class='slick-arrow slick-prev'><svg class='icon-arrow-right'><use xlink:href='#arrow-right'></use></svg></div>",
				nextArrow: "<div class='slick-arrow slick-next'><svg class='icon-arrow-right'><use xlink:href='#arrow-right'></use></svg></div>",
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3
						}
					}
				]
			});
		}
	}
	brandSliderInit();

	function slideshow() {
		if($('.js-slideshow').length) {
			$('.js-slideshow').slick({
				slidesToShow: 2,
				slidesToScroll: 1,
				dots: false,
				arrows: true,
				autoplay: true,
				prevArrow: "<div class='slick-arrow slick-prev'><svg class='icon-arrow-right'><use xlink:href='#arrow-right'></use></svg></div>",
				nextArrow: "<div class='slick-arrow slick-next'><svg class='icon-arrow-right'><use xlink:href='#arrow-right'></use></svg></div>",
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
		}
	}
	slideshow();

	function brandSliderInitMod() {
		if($('.js-brand-slider-mod').length) {
			$('.js-brand-slider-mod').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
				$('.js-brand-slider-mod').removeClass('is-loading');
			})
			$('.js-brand-slider-mod').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				prevArrow: "<div class='slick-arrow slick-prev'><svg class='icon-arrow-right'><use xlink:href='#arrow-right'></use></svg></div>",
				nextArrow: "<div class='slick-arrow slick-next'><svg class='icon-arrow-right'><use xlink:href='#arrow-right'></use></svg></div>",
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 2
						}
					}
				]
			});
		}
	}
	brandSliderInitMod();

	function introGallery() {
		if($('.js-intro-gallery').length) {
				var $circleProgress = $('.js-intro-gallery').find('.slick-dots li.slick-active button').addClass('circle-progress');
				function test($obj) {
					$obj.circleProgress({
				    value: 1,
				    animation:{ duration: 5000, easing: "circleProgressEasing" },
				    startAngle: 1.5 * Math.PI,
				    size: 37,
				    thickness: 1,
				    lineCap: "round",
				    emptyFill: 'rgba(0,0,0,0)',
				    fill: {
	            color: '#fff'
	          }
					})
				}
			$('.js-intro-gallery').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
				var dots = $('.js-intro-gallery').find('.slick-dots li button');
				$('.js-intro-gallery').removeClass('is-loading');
				test(dots);
			})
			$('.js-intro-gallery').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				autoplay: true,
				autoplaySpeed: 5000,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							dots: false
						}
					}
				]
			});
		}
	}
	introGallery();
	
}($));
	
