<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>

  <link href="http://www.google-analytics.com/" rel="dns-prefetch"><!-- dns prefetch -->

  <!-- @if NODE_ENV='production' -->
  <link rel="shortcut icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/pic/favicon.png" />

  <!-- @endif -->
  <!--[if lt IE 9]>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
  <!-- css + javascript -->
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <div style="height: 0; width: 0; position: absolute;overflow: hidden;" id="svg-sprite-container">
  </div>
  <!-- wrapper -->
  <div class="wrapper">
    <header class="header">
      <div class="header__top js-header-fixed">
        <div class="container">
          <div class="header__content">
            <div class="header__logo">


              <?php if ( !is_front_page() && !is_home() ){ ?>
                <a href="<?php echo home_url(); ?>" class="logo" title="<?php bloginfo( 'name' ); ?>">
              <?php } else { ?>
                <span class="logo">
              <?php } ?>

                <svg class="icon-logo <?php the_field('logo', 37); ?>__icon">
                  <use xlink:href="#<?php the_field('logo', 37); ?>"></use>
                </svg>
                <span class="logo__text"><?php bloginfo( 'name' ); ?></span>
              <?php if ( !is_front_page() && !is_home() ){ ?>
                </a>
              <?php } else { ?>
                </span>
              <?php } ?>
            </div>
            <div class="header__cell header__cell--menu js-equal-height">
              <?php wpeHeadSlickNav(); ?>
            </div>
            <div class="header__cell header__cell--contact js-equal-height">
              <div class="contact-item">
                <span class="contact-item__image">
                  <svg class="icon-loc">
                    <use xlink:href="#loc"></use>
                  </svg>
                </span>
                <span class="contact-item__content"><?php the_field('addres', 37); ?></span>
              </div>
            </div>
            <div class="header__cell header__cell--time js-equal-height">
              <div class="contact-item">
                <span class="contact-item__image">
                  <svg class="icon-clock">
                    <use xlink:href="#clock"></use>
                  </svg>
                </span>
                <span class="contact-item__content">
                  <?php the_field('working_hours', 37); ?>
                </span>
              </div>
            </div>
            <div class="header__cell header__cell--tel js-equal-height">
              <div class="contact-item">
                <span class="contact-item__image">
                  <svg class="icon-tel">
                    <use xlink:href="#tel"></use>
                  </svg>
                </span>
                <span class="contact-item__content">
              <a href="tel:<?php echo preg_replace('/[^0-9]/', '', get_field('phone', 37)); ?>" class="contact-item__link"><?php the_field('phone', 37); ?></a>
            </span>
              </div>
            </div>
          </div>
          <div class="header__button">
            <a href="#" data-src="#popup-appointment" class="btn btn--image" data-fancybox>
              <span class="btn__image">
                <svg class="icon-pencil">
                  <use xlink:href="#pencil"></use>
                </svg>
              </span>
              <span class="btn__text">Записаться на ремонт</span>
            </a>
          </div>
        </div>
      </div>
      <div class="header__bottom">
        <div class="container">
          <div class="header__content">
            <div class="header__nav">

              <div class="nav-mob js-nav">
                <div class="nav-mob__trigger js-nav-trigger">
                  <span class="nav-mob__trigger-inner"></span>
                </div>
                <div class="nav-mob__holder js-nav-holder">
                  <div class="nav-mob__inner">
                    <?php wpeHeadNav(); ?>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="header__button">
            <a href="#" class="btn btn--image btn--border" data-src="#popup-pick" data-fancybox>
              <span class="btn__image">
                <svg class="icon-car">
                  <use xlink:href="#car"></use>
                </svg>
              </span>
              <span class="btn__text">Подобрать автозапчасть</span>
            </a>
          </div>
        </div>
      </div>
    </header>
