//---------------------------------------//
// Подключаем набор написаных скриптов (requare/developRequare.js)
//---------------------------------------//
// выполняем их после того, как DOM построится
$(document).ready(function() {
  //---------------------------------------//
  // Подключаем скрипты компонентов страниц ( modules )
  //---------------------------------------//
  ;
  (function() {
    function accordionMod() {
      var flag = false;

      function init() {
        if (window.innerWidth <= 767) {
          if (!flag) {
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
              if ($accItem.hasClass('is-open')) {
                open = true;
              }
            })
          }
        } else {
          if (flag) {
            $('.js-acc-mod-item').removeClass('is-open');
            flag = false;
          }
        }
      }
      if ($('.js-acc-mod').length) {
        init();
        $(window).on('resize', init);
      }
    }
    accordionMod();
  }());
  (function() {
    function autoFooter() {
      if ($('.js-footer').length) {
        var wrapper = $('.wrapper'),
          footer = $('.js-footer'),
          footerHeight = footer.outerHeight();
        footer.css('margin-top', -footerHeight);
        wrapper.css('padding-bottom', footerHeight);
      }
    }
    autoFooter();
    $(window).on('resize', function() {
      autoFooter();
    })
  }());;
  (function() {
    var fixHead = (function() {
      if (window.innerWidth < 768) {
        $('.js-header-fixed').removeClass('js-header-fixed');
        $('.header').addClass('js-header-fixed');
      }
      var $header = $('.js-header-fixed'),
        $wrapper = $('.wrapper'),
        headerH = $('.header').outerHeight(),
        elH = $header.outerHeight();
      var app = {
        checkP: function() {
          var cur_p = $(window).scrollTop();
          if (cur_p > headerH) {
            $header.addClass('is-fixed');
            $wrapper.css('paddingTop', elH);
          } else {
            $header.removeClass('is-fixed');
            $wrapper.css('paddingTop', '');
          }
        },
        initHeight: function() {
          if (window.innerWidth >= 768) {
            $header.find('.js-equal-height').css('height', '');
            $header.find('.js-equal-height').matchHeight({
              byRow: true,
              property: 'height',
              target: null,
              remove: false
            });
          } else {
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
          if ($header.length) {
            app.initHeight();
            app.events();
          }
        }
      }
    }())
    fixHead.init();
  }())

  //YMAP
  $(function() {
    if ($('#js-map').length) {
      var myMap,
        myMapBaloon = $('#js-map').data('baloon'), //адрес иконки
        myMapContent = $('#js-map').data('content'); //контент

        //alert(myMapContent);
      jQuery.getScript("http://api-maps.yandex.ru/2.0/?load=package.full&amp;lang=ru-RU", function() {
        function init() {
          myMap = new ymaps.Map("js-map", {
            center: [55.826738, 37.437730],
            zoom: 12
          });
          var myPlacemark = new ymaps.Placemark([55.826738, 37.437730], {
            balloonContent: '<div class="map__content">' + myMapContent + '</div>',
            iconImageHref: myMapBaloon,
          }, {
            hideIconOnBalloonOpen: false,
            iconImageHref: myMapBaloon,
            iconImageSize: [35, 50],
            iconImageOffset: [-25, -10]
          });
          myMap.geoObjects.add(myPlacemark);
          myPlacemark.events;
        }
        ymaps.ready(init);
      });
    };
  });
  (function() {
    function accordion() {
      var flag = false;

      function init() {
        if (window.innerWidth <= 767) {
          if (!flag) {
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
                if ($accItem.hasClass('is-open')) {
                  open = true;
                }
              })
              // 2 level
            $accSubTrigger.on('click', function() {
                var $accSubItemThis = $(this).closest($accSubItem);
                $(this).closest($accSub).find($accSubItem).not($accSubItemThis).removeClass('is-open');
                $(this).closest($accSubItem).toggleClass('is-open');
                if ($accSubItem.hasClass('is-open')) {
                  open = true;
                }
              })
              // click on empty space
            $(document).on('click touchend', function(e) {
              if (open) {
                var isBtn = !!$(e.target).closest('.js-nav-holder').length;
                if (!isBtn) {
                  $('.js-acc-item').removeClass('is-open');
                  $('.js-acc-sub-item').removeClass('is-open');
                  open = false;
                }
              }
            })
          }
        } else {
          if (flag) {
            $('.js-acc-item').removeClass('is-open');
            $('.js-acc-sub-item').removeClass('is-open');
            flag = false;
          }
        }
      }
      if ($('.js-acc').length) {
        init();
        $(window).on('resize', init);
      }
    }
    accordion();
  }());
  (function() {
    function burger() {
      var flag = false;

      function init() {
        if (window.innerWidth <= 767) {
          if (!flag) {
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
          if (flag) {
            $('.js-nav').removeClass('is-active');
            flag = false;
          }
        }
      }
      if ($('.js-nav').length) {
        init();
        $(window).on('resize', init);
      }
    }
    burger();
  }())
  //---------------------------------------//
  // Подключаем основные скрипты ( develop )
  //---------------------------------------//
  ;
  (function($) {
    function select() {
      if ($('.js-select').length) {
        $('.js-select').select2({
          placeholder: "Выбор",
          minimumResultsForSearch: -1
        });
      }
    }
    select();

    function equalHeight() {
      if ($('.js-equal-height').length) {
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
        if (window.innerWidth >= 768) {
          if (!flag) {
            $('.js-flex').flexMenu({
              "linkText": "Ещё.."
            });
            flag = true;
          } else {
            if (flag) {
              $('.js-flex').flexMenu({
                "undo": true
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
          if (!$this.closest('.js-flex').length && $('.flexMenu-viewMore').hasClass('active')) {
            $('.flexMenu-viewMore').removeClass('active');
            $('.flexMenu-popup').hide();
          }
        })
      };
    }
    flexMenu();

    function sliderInit() {
      if ($('.js-slider').length) {
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
          responsive: [{
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          }]
        });
      }
    }
    sliderInit();

    function fancyBox() {
      if ($("a[href$='.png'], a[href$='.jpg'], [data-fancybox]").length) {
        $("a[href$='.png'], a[href$='.jpg'], [data-fancybox]").fancybox({
          infobar: false,
          slideShow: false,
          titleShow: true,
          'titlePosition': 'inside'
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
        if (window.innerWidth >= 768) {
          var headerHeight = $('.js-header-fixed').outerHeight();
          $('body,html').animate({
            scrollTop: topBlock - headerHeight
          }, 1200);
        } else {
          $('body,html').animate({
            scrollTop: topBlock
          }, 1200);
        }
      })
    }
    scrollOnClick();

    function brandSliderInit() {
      if ($('.js-brand-slider').length) {
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
          responsive: [{
            breakpoint: 768,
            settings: {
              slidesToShow: 3
            }
          }]
        });
      }
    }
    brandSliderInit();

    function slideshow() {
      if ($('.js-slideshow').length) {
        $('.js-slideshow').slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          autoplay: true,
          prevArrow: "<div class='slick-arrow slick-prev'><svg class='icon-arrow-right'><use xlink:href='#arrow-right'></use></svg></div>",
          nextArrow: "<div class='slick-arrow slick-next'><svg class='icon-arrow-right'><use xlink:href='#arrow-right'></use></svg></div>",
          responsive: [{
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }]
        });
      }
    }
    slideshow();

    function brandSliderInitMod() {
      if ($('.js-brand-slider-mod').length) {
        $('.js-brand-slider-mod').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
          $('.js-brand-slider-mod').removeClass('is-loading');
        })
        $('.js-brand-slider-mod').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          prevArrow: "<div class='slick-arrow slick-prev'><svg class='icon-arrow-right'><use xlink:href='#arrow-right'></use></svg></div>",
          nextArrow: "<div class='slick-arrow slick-next'><svg class='icon-arrow-right'><use xlink:href='#arrow-right'></use></svg></div>",
          responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 2
            }
          }]
        });
      }
    }
    brandSliderInitMod();

    function introGallery() {
      if ($('.js-intro-gallery').length) {
        var $circleProgress = $('.js-intro-gallery').find('.slick-dots li.slick-active button').addClass('circle-progress');

        function test($obj) {
          $obj.circleProgress({
            value: 1,
            animation: {
              duration: 5000,
              easing: "circleProgressEasing"
            },
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
          responsive: [{
            breakpoint: 768,
            settings: {
              dots: false
            }
          }]
        });
      }
    }
    introGallery();
  }($));
})
