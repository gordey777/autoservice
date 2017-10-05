  <?php $map = true; ?>
  <?php $brands = true; ?>

  <?php
  if(is_category()) {

      $cat__ID = get_queried_object()->cat_ID;
      $field_term = 'category_' . $cat__ID;
      $cat_type = get_field('category_type', $field_term);

      if (($cat_type['value'] === 'news') ) {

          $map = false;
          $brands = false;

      }
  }
  if (is_singular('post')) {
      $page_type = get_field('page_type');

      if (!$page_type ) {

            $map = false;
            $brands = false;
      }
  }

  if (is_singular('page')) {

      if (!is_page_template( 'page-prices.php' )) {

            $brands = false;
      }
  }
  ?>

    <?php if ( $map ) : ?>
    <div class="map">
      <div class="map__holder" id="js-map" data-baloon="<?php the_field('map_baloone', 37);?>" data-content="<?php the_field('map_content',37);?>"></div>
      <div class="container">
        <div class="map__box">
          <div class="map__title container__subtitle">Как до нас добраться</div>
          <?php $map_img = get_field('reg_img', 37);?>
          <img src="<?php echo $map_img['sizes']['medium'];?>" class="map__image">
          <div class="map__button">
            <a href="#" class="btn" data-src="#popup-appointment" data-fancybox>Записаться он-лайн</a>
          </div>
        </div>
      </div>
    </div>
    <?php endif // end if have_rows ?>

    <?php if ( !is_front_page() && !is_home() && $brands && have_rows('brands_slider', 37) ) : ?>
      <div class="brand-slider-holder">
        <div class="container">
          <div class="brand-slider-title container__subtitle">Ремонт автомобилей</div>
          <div class="brand-slider-subtitle">всех ведущих мировых производителей с 1997 года</div>
          <div class="brand-slider js-brand-slider is-loading">
            <?php while ( have_rows('brands_slider', 37) ) : the_row(); ?>
              <?php $image = get_sub_field('img'); ?>
              <?php if ( !empty($image)) : ?>
                <div class="brand-slider__item">
                  <a href="<?php the_sub_field('link'); ?>" class="brand-slider__link">
                    <img src="<?php echo $image['url']; ?>" alt="Picture" class="brand-slider__image">
                  </a>
                </div>
              <?php endif; ?>
            <?php endwhile; ?>
          </div>
        </div>
      </div>
    <?php endif // end if have_rows ?>

  </div><!-- wrapper -->

  <footer class="footer js-footer">
    <div class="footer__wrapper" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/bg/bg-footer.png');">
      <div class="footer__center">
        <div class="container">
          <div class="footer__cell footer__cell--left js-acc-mod">
            <div class="footer__box js-acc-mod-item">
              <div class="footer__title container__subtitle js-acc-mod-trigger arrow">Услуги</div>
              <div class="footer__list js-acc-mod-content">
                <?php wpeFootServNav(); ?>
              </div>
            </div>
            <div class="footer__box js-acc-mod-item">
              <div class="footer__title container__subtitle js-acc-mod-trigger arrow">Об автосервисе</div>
              <div class="footer__list js-acc-mod-content">
                <?php wpeFootNav(); ?>
              </div>
            </div>
          </div>
          <div class="footer__cell footer__cell--right">
            <div class="footer__box footer__box--left">
              <ul class="loc-list">
                <li class="loc-list__item">
                  <span class="loc-list__image">
                  <svg class="icon-loc loc-list__icon">
                    <use xlink:href="#loc"></use>
                  </svg>
                </span>
                  <span class="loc-list__content">
                  <span class="loc-list__content-inner"><?php the_field('addres', 37); ?></span>
                  </span>
                </li>
                <li class="loc-list__item">
                  <span class="loc-list__image">
                  <svg class="icon-tel loc-list__icon">
                    <use xlink:href="#tel"></use>
                  </svg>
                </span>
                  <span class="loc-list__content">
                  <a href="tel:<?php echo preg_replace('/[^0-9]/', '', get_field('phone', 37)); ?>" class="loc-list__content-inner loc-list__content-inner--link"><?php the_field('phone', 37); ?></a>
                </span>
                </li>
                <li class="loc-list__item">
                  <span class="loc-list__image">
                  <svg class="icon-clock loc-list__icon">
                    <use xlink:href="#clock"></use>
                  </svg>
                </span>
                  <span class="loc-list__content">
                  <span class="loc-list__content-inner"><?php the_field('working_hours', 37); ?></span>
                  </span>
                </li>
              </ul>
            </div>
            <div class="footer__box footer__box--right">
              <div class="footer__logo">
                <a href="" class="logo logo--lg">
                  <svg class="icon-logo <?php the_field('logo', 37); ?>__icon">
                    <use xlink:href="#<?php the_field('logo', 37); ?>"></use>
                  </svg>
                  <span class="logo__text"><?php bloginfo( 'name' ); ?></span>
                </a>
              </div>
              <div class="footer__button">
                <a href="#" class="btn btn--sm" data-src="#popup-appointment" data-fancybox>Записаться на ремонт</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="container">
          <div class="footer__copy"><?php the_field('copyright', 37); ?></div>
          <div class="footer__site">
            <a href="#" class="footer__site-link">Мультисайт</a>
          </div>
        </div>
      </div>
    </div>
  </footer>


  <!-- POPUP -->
  <!-- POPUP APPOINTMENT-->
  <div class="popup" id="popup-appointment">
    <div class="popup-holder">
      <div class="popup-appointment">
        <?php echo do_shortcode('[contact-form-7 id="395" title="Онлайн запись PopUp"]'); ?>


      </div>
    </div>
  </div>
  <!-- POPUP APPOINTMENT END -->
  <!-- POPUP PICK-->
  <div class="popup" id="popup-pick">
    <div class="popup-holder">
      <div class="popup-appointment">
        <?php echo do_shortcode('[contact-form-7 id="366" title="Подбор запчасти PopUP"]'); ?>
      </div>
    </div>
  </div>
  <!-- POPUP PICK END -->


  <!-- POPUP VIDEO-->
  <?php $videomap = get_field('videomap', 37); ?>
  <?php if ( !empty($videomap)) : ?>
    <div class="popup" id="popup-video">
      <div class="popup-holder">
        <div class="popup-video">
          <iframe class="popup-video__video" src="https://www.youtube.com/embed/<?php echo $videomap['vid']; ?>" frameborder="0" allowfullscreen width="854" height="480"></iframe>
        </div>
      </div>
    </div>
  <?php endif; ?>

  <!-- POPUP VIDEO END -->
  <!-- POPUP END -->
  <?php wp_footer(); ?>


</body>





