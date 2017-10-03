<?php /* Template Name: Home Page */ get_header(); ?>

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>

    <?php //edit_post_link(); ?>

    <main id="post-<?php the_ID(); ?>" <?php post_class(' index-pg'); ?>>
      <div class="intro bg-gray-dotted">
        <div class="container">
          <div class="intro__holder">

            <?php if( have_rows('main_slider') ): ?>
              <div class="intro__slider">
                <div class="intro-gallery js-intro-gallery is-loading">
                <?php while ( have_rows('main_slider') ) : the_row(); ?>
                  <?php $image = get_sub_field('img'); ?>

                  <div class="intro-gallery__item" <?php if ( !empty($image)) : ?> style="background-image: url('<?php echo $image['url']; ?>');"<?php endif; ?> >
                    <div class="intro-gallery__holder">
                      <div class="intro-gallery__title"><?php the_sub_field('title'); ?></div>
                      <div class="intro-gallery__info"><?php the_sub_field('content'); ?></div>
                    </div>
                  </div>

                <?php  endwhile; ?>
                </div>
              </div>
            <?php endif; ?>

            <?php $baner_image = get_field('baner_img'); ?>
            <?php if ( !empty($baner_image)) : ?>
              <div class="intro__banner">
                <div class="banner">
                  <a href="<?php the_field('baner_link'); ?>" class="banner__link line-hold">
                    <img src="<?php echo $baner_image['url']; ?>" alt="Picture" class="banner__image">
                    <div class="lines">
                      <span class="line line--top"></span>
                      <span class="line line--right"></span>
                      <span class="line line--bottom"></span>
                      <span class="line line--left"></span>
                    </div>
                  </a>
                </div>
              </div>
            <?php endif; ?>

          </div>

          <?php if( have_rows('advantages') ): ?>
           <ul class="advantages">
              <?php while ( have_rows('advantages') ) : the_row(); ?>
              <?php the_sub_field('title'); ?>
              <li class="advantages__item js-equal-height">
                <div class="advantages__top">
                  <span class="advantages__top-inner">
                    <?php if ( get_sub_field('icon_class') ) { ?>
                      <svg class="icon-<?php the_sub_field('icon_class'); ?> advantages__top-icon">
                        <use xlink:href="#<?php the_sub_field('icon_class'); ?>"></use>
                      </svg>
                    <?php } else { ?>
                      <span class="advantages__top-text"><?php the_sub_field('icon-title'); ?></span>
                    <?php } ?>
                  </span>
                </div>
                <div class="advantages__content">
                  <div class="advantages__title"><?php the_sub_field('title'); ?></div>
                  <?php if ( get_sub_field('desc') ) { ?>
                    <div class="advantages__info"><?php the_sub_field('desc'); ?></div>
                  <?php }; ?>
                  <?php if ( get_sub_field('desc_list') ) { ?>
                    <ul class="simple-list simple-list--mod">
                      <?php while ( has_sub_field('desc_list' ) ) : ?>

                        <li class="simple-list__item"><?php the_sub_field('list_item'); ?></li>
                      <?php endwhile; ?>
                    </ul>
                  <?php } ?>
                </div>
              </li>
              <?php  endwhile; ?>
            </ul>
          <?php endif; ?>
        </div>
      </div>


      <div class="service-hold">
        <div class="container">
          <div class="container__title container__title--mod red">Наши услуги</div>
          <div class="container__title container__title--sm black">В вашем распоряжении</div>
          <div class="service-list">

            <div class="service__item">
              <a href="#" class="service__link">
                <div class="service__image" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/service/photo-01.png');"></div>
                <div class="service__title js-equal-height">
                  <span class="service__title-inner">Ремонт подвески Ремонт подвески Ремонт подвески Ремонт подвески Ремонт подвески Ремонт подвески </span>
                </div>
              </a>
            </div><!-- /.service__item -->


          </div>
        </div>
      </div><!-- /.service-hold -->

      <div class="about bg-gray">
        <div class="container">
          <div class="about__holder">
            <div class="about__cell">
              <div class="about__inner about__inner--mod js-equal-height">
                <div class="about__title about__title--mod">Как к нам добраться</div>
                <div class="video">

                  <?php $videoholder = get_field('videoholder'); ?>

                  <a href="#" class="video__link" <?php if ($videoholder) { ?> style="background-image: url( <?php echo $videoholder['url']; ?> );"<?php } ?> data-src="#popup-video" data-fancybox>
                    <div class="video__arrow">
                      <svg class="icon-video-arrow video__arrow-icon">
                        <use xlink:href="#video-arrow"></use>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <?php if (have_rows('brands_slider')) { ?>
              <?php $brands = get_field('brands_slider'); ?>
              <?php if( $brands ): ?>
                <?php
                $i_max = count($brands);
                $n_max = ($i_max / 2) + 1;

                $i = 0;
                $k = 0; ?>

                <div class="about__cell">
                  <div class="about__inner js-equal-height">
                    <div class="about__title">Ремонт автомобилей</div>
                    <div class="about__subtitle">Ведущих мировых производителей</div>
                    <div class="brand-slider brand-slider--mod js-brand-slider-mod is-loading">

                      <?php while ( $k < $n_max ) { ?>

                        <?php if ( $i < $i_max ) { ?>
                          <div class="brand-slider__item">
                            <?php if ($i < $i_max ) { ?>
                              <a href="<?php echo  $brands[$i]['link']; ?>" class="brand-slider__link">
                                <img src="<?php echo  $brands[$i]['img']['url']; ?>" alt="<?php echo  $brands[$i]['title']; ?>" title="<?php echo  $brands[$i]['title']; ?>" class="brand-slider__image">
                              </a>
                              <?php $i++; ?>
                            <?php } ?>

                            <?php if ($i < $i_max ) { ?>
                              <a href="<?php echo  $brands[$i]['link']; ?>" class="brand-slider__link">
                                <img src="<?php echo  $brands[$i]['img']['url']; ?>" alt="<?php echo  $brands[$i]['title']; ?>" title="<?php echo  $brands[$i]['title']; ?>" class="brand-slider__image">
                              </a>
                              <?php $i++; ?>
                            <?php } ?>
                          </div>
                        <?php } ?>
                        <?php $k++; ?>

                      <?php } // end while ?>

                    </div>
                  </div>
                </div>
              <?php endif; ?>
            <?php } // end if have_rows ?>

          </div>
        </div>
      </div>

      <div class="vantages bg-red-dotted">
        <div class="container">
          <div class="container__title container__title--mod white"><?php the_field('why_title'); ?></div>
          <div class="container__title container__title--sm white"><?php the_field('why_subtitle'); ?></div>

          <div class="vantages__holder">
            <?php if( have_rows('why_advantages') ): ?>
              <div class="vantages__cell vantages__cell--left">
                <ul class="vantages-list">
                  <?php while ( have_rows('why_advantages') ) : the_row(); ?>
                    <li class="vantages-list__item">
                      <span class="vantages-list__image js-equal-height">
                        <svg class="icon-<?php the_sub_field('icon_id'); ?> vantages-list__icon">
                          <use xlink:href="#<?php the_sub_field('icon_id'); ?>"></use>
                        </svg>
                        <?php if ( get_sub_field('icon_value') ) { ?>
                          <span class="vantages-list__numb"><?php the_sub_field('icon_value'); ?></span>
                        <?php } ?>
                      </span>
                      <span class="vantages-list__content js-equal-height">
                        <span class="vantages-list__inner">
                          <?php the_sub_field('adv_content'); ?>
                        </span>
                      </span>
                    </li>
                  <?php  endwhile; ?>
                </ul>
              </div>
            <?php endif; ?>


            <div class="vantages__cell vantages__cell--right">
              <div class="vantages__title"><?php the_field('consalt_title'); ?></div>
              <div class="vantages__info"><?php the_field('consalt_subtitle'); ?></div>
              <div class="vantages__image">
                <?php $consultFoto = get_field('consult_foto'); ?>
                <?php if ($consultFoto) { ?>
                  <img src="<?php echo $consultFoto['url']; ?>" alt="<?php the_field('consalt_title'); ?>, <?php the_field('consalt_subtitle'); ?>" class="vantages__image-picture">
                <?php } ?>
              </div>
              <div class="vantages__position"><?php the_field('consult_name'); ?></div>
              <div class="vantages__info vantages__info--mod"><?php the_field('consult_work'); ?></div>
              <div class="vantages__button">
                <a href="#" class="btn" data-src="#popup-appointment" data-fancybox="">Записаться он-лайн</a>
              </div>
            </div>

          </div>

        </div>
      </div>

      <?php $homeGallery = get_field('home_gallery'); ?>

      <?php if( $homeGallery ):
        $i_max = count($homeGallery);
        $n_max = ($i_max / 4) + 1;
        $i = 0;
        $k = 0; ?>

        <div class="slideshow-hold">
          <div class="container">
            <div class="container__title container__title--mod"><?php the_field('gallery_title'); ?></div>
            <div class="container__title container__title--sm"><?php the_field('gallery_subtitle'); ?></div>
            <div class="slideshow js-slideshow">
              <?php while ( $k < $n_max ) { ?>
                  <?php if ( $i < $i_max ) { ?>

                    <div class="slideshow__column">
                      <div class="slideshow__row">

                        <?php if ($i < $i_max ) { ?>
                          <div class="slideshow__cell">
                            <a href="<?php echo  $homeGallery[$i]['url']; ?>" class="slideshow__link" data-fancybox="1">
                              <div class="slideshow__inner" style="background-image: url('<?php echo $homeGallery[$i]['sizes']['medium']; ?>');"></div>
                            </a>
                          </div>
                          <?php $i++; ?>
                        <?php } ?>
                        <?php if ($i < $i_max ) { ?>
                          <div class="slideshow__cell">
                            <a href="<?php echo  $homeGallery[$i]['url']; ?>" class="slideshow__link" data-fancybox="1">
                              <div class="slideshow__inner" style="background-image: url('<?php echo $homeGallery[$i]['sizes']['medium']; ?>');"></div>
                            </a>
                          </div>
                          <?php $i++; ?>
                        <?php } ?>

                      </div>
                        <?php if ($i < $i_max ) { ?>
                          <div class="slideshow__row">
                            <a href="<?php echo  $homeGallery[$i]['url']; ?>" class="slideshow__link" data-fancybox="1">
                              <div class="slideshow__inner" style="background-image: url('<?php echo $homeGallery[$i]['sizes']['medium']; ?>');"></div>
                            </a>
                          </div>
                          <?php $i++; ?>
                        <?php } ?>
                    </div>

                    <?php if ($i < $i_max ) { ?>
                      <div class="slideshow__column">
                        <a href="<?php echo  $homeGallery[$i]['url']; ?>" class="slideshow__link" data-fancybox="1">
                          <div class="slideshow__inner" style="background-image: url('<?php echo $homeGallery[$i]['sizes']['medium']; ?>');"></div>
                        </a>
                      </div>
                      <?php $i++; ?>
                    <?php } ?>

                  <?php } ?>
                  <?php $k++; ?>
              <?php } ?>

            </div>
          </div>
        </div>
      <?php endif; ?>



      <div class="content-block bg-gray-dotted">
        <div class="container">
          <div class="container__title container__title--mod red"><?php bloginfo( 'name' ); ?></div>
          <div class="container__title container__title--sm black"><?php echo get_bloginfo('description', 'display'); ?></div>
          <div class="holder">
            <div class="holder__wrap">
              <?php the_content(); ?>
            </div>
          </div>
        </div>
      </div>
    </main>




  <?php endwhile; endif; ?>


<?php get_footer(); ?>
