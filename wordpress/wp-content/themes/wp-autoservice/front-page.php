<?php /* Template Name: Home Page */ get_header(); ?>

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>


<?php //the_title(); ?>
      <?php the_content(); ?>
      <?php edit_post_link(); ?>

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
            </div>
            <div class="service__item">
              <a href="#" class="service__link">
                <div class="service__image" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/service/photo-02.png');"></div>
                <div class="service__title js-equal-height">
                  <span class="service__title-inner">Ремонт тормозной системы</span>
                </div>
              </a>
            </div>
            <div class="service__item">
              <a href="#" class="service__link">
                <div class="service__image" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/service/photo-03.png');"></div>
                <div class="service__title js-equal-height">
                  <span class="service__title-inner">Ремонт двигателя </span>
                </div>
              </a>
            </div>
            <div class="service__item">
              <a href="#" class="service__link">
                <div class="service__image" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/service/photo-04.png');"></div>
                <div class="service__title js-equal-height">
                  <span class="service__title-inner">Ремонт выхлопной системы</span>
                </div>
              </a>
            </div>
            <div class="service__item">
              <a href="#" class="service__link">
                <div class="service__image" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/service/photo-01.png');"></div>
                <div class="service__title js-equal-height">
                  <span class="service__title-inner">Ремонт подвески</span>
                </div>
              </a>
            </div>
            <div class="service__item">
              <a href="#" class="service__link">
                <div class="service__image" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/service/photo-02.png');"></div>
                <div class="service__title js-equal-height">
                  <span class="service__title-inner">Ремонт тормозной системы</span>
                </div>
              </a>
            </div>
            <div class="service__item">
              <a href="#" class="service__link">
                <div class="service__image" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/service/photo-03.png');"></div>
                <div class="service__title js-equal-height">
                  <span class="service__title-inner">Ремонт двигателя </span>
                </div>
              </a>
            </div>
            <div class="service__item">
              <a href="#" class="service__link">
                <div class="service__image" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/service/photo-04.png');"></div>
                <div class="service__title js-equal-height">
                  <span class="service__title-inner">Ремонт выхлопной системы</span>
                </div>
              </a>
            </div>
            <div class="service__item">
              <a href="#" class="service__link">
                <div class="service__image" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/service/photo-01.png');"></div>
                <div class="service__title js-equal-height">
                  <span class="service__title-inner">Ремонт коробки передач</span>
                </div>
              </a>
            </div>
            <div class="service__item">
              <a href="#" class="service__link">
                <div class="service__image" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/service/photo-02.png');"></div>
                <div class="service__title js-equal-height">
                  <span class="service__title-inner">Диагностика и ремонт топливной системы</span>
                </div>
              </a>
            </div>
            <div class="service__item">
              <a href="#" class="service__link">
                <div class="service__image" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/service/photo-03.png');"></div>
                <div class="service__title js-equal-height">
                  <span class="service__title-inner">Ремонт автоэлектрики </span>
                </div>
              </a>
            </div>
            <div class="service__item">
              <a href="#" class="service__link">
                <div class="service__image" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/service/photo-04.png');"></div>
                <div class="service__title js-equal-height">
                  <span class="service__title-inner">Дополнительное оборудование</span>
                </div>
              </a>
            </div>
            <div class="service__item">
              <a href="#" class="service__link">
                <div class="service__image" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/service/photo-01.png');"></div>
                <div class="service__title js-equal-height">
                  <span class="service__title-inner">Ремонт подвески</span>
                </div>
              </a>
            </div>
            <div class="service__item">
              <a href="#" class="service__link">
                <div class="service__image" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/service/photo-02.png');"></div>
                <div class="service__title js-equal-height">
                  <span class="service__title-inner">Ремонт тормозной системы</span>
                </div>
              </a>
            </div>
            <div class="service__item">
              <a href="#" class="service__link">
                <div class="service__image" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/service/photo-03.png');"></div>
                <div class="service__title js-equal-height">
                  <span class="service__title-inner">Ремонт двигателя </span>
                </div>
              </a>
            </div>
            <div class="service__item">
              <a href="#" class="service__link">
                <div class="service__image" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/service/photo-04.png');"></div>
                <div class="service__title js-equal-height">
                  <span class="service__title-inner">Ремонт выхлопной системы</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="about bg-gray">
        <div class="container">
          <div class="about__holder">
            <div class="about__cell">
              <div class="about__inner about__inner--mod js-equal-height">
                <div class="about__title about__title--mod">Как к нам добраться</div>
                <div class="video">
                  <a href="#" class="video__link" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/bg/bg-video.png');" data-src="#popup-video" data-fancybox>
                    <div class="video__arrow">
                      <svg class="icon-video-arrow video__arrow-icon">
                        <use xlink:href="#video-arrow"></use>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="about__cell">
              <div class="about__inner js-equal-height">
                <div class="about__title">Ремонт автомобилей</div>
                <div class="about__subtitle">Ведущих мировых производителей</div>
                <div class="brand-slider brand-slider--mod js-brand-slider-mod is-loading">
                  <div class="brand-slider__item">
                    <a href="#" class="brand-slider__link">
                      <img src="<?php echo get_template_directory_uri(); ?>/pic/brand-slider/photo-01.png" alt="Picture" class="brand-slider__image">
                    </a>
                    <a href="#" class="brand-slider__link">
                      <img src="<?php echo get_template_directory_uri(); ?>/pic/brand-slider/photo-04.png" alt="Picture" class="brand-slider__image">
                    </a>
                  </div>
                  <div class="brand-slider__item">
                    <a href="#" class="brand-slider__link">
                      <img src="<?php echo get_template_directory_uri(); ?>/pic/brand-slider/photo-02.png" alt="Picture" class="brand-slider__image">
                    </a>
                    <a href="#" class="brand-slider__link">
                      <img src="<?php echo get_template_directory_uri(); ?>/pic/brand-slider/photo-05.png" alt="Picture" class="brand-slider__image">
                    </a>
                  </div>
                  <div class="brand-slider__item">
                    <a href="#" class="brand-slider__link">
                      <img src="<?php echo get_template_directory_uri(); ?>/pic/brand-slider/photo-03.png" alt="Picture" class="brand-slider__image">
                    </a>
                    <a href="#" class="brand-slider__link">
                      <img src="<?php echo get_template_directory_uri(); ?>/pic/brand-slider/photo-06.png" alt="Picture" class="brand-slider__image">
                    </a>
                  </div>
                  <div class="brand-slider__item">
                    <a href="#" class="brand-slider__link">
                      <img src="<?php echo get_template_directory_uri(); ?>/pic/brand-slider/photo-01.png" alt="Picture" class="brand-slider__image">
                    </a>
                    <a href="#" class="brand-slider__link">
                      <img src="<?php echo get_template_directory_uri(); ?>/pic/brand-slider/photo-04.png" alt="Picture" class="brand-slider__image">
                    </a>
                  </div>
                  <div class="brand-slider__item">
                    <a href="#" class="brand-slider__link">
                      <img src="<?php echo get_template_directory_uri(); ?>/pic/brand-slider/photo-02.png" alt="Picture" class="brand-slider__image">
                    </a>
                    <a href="#" class="brand-slider__link">
                      <img src="<?php echo get_template_directory_uri(); ?>/pic/brand-slider/photo-05.png" alt="Picture" class="brand-slider__image">
                    </a>
                  </div>
                  <div class="brand-slider__item">
                    <a href="#" class="brand-slider__link">
                      <img src="<?php echo get_template_directory_uri(); ?>/pic/brand-slider/photo-03.png" alt="Picture" class="brand-slider__image">
                    </a>
                    <a href="#" class="brand-slider__link">
                      <img src="<?php echo get_template_directory_uri(); ?>/pic/brand-slider/photo-06.png" alt="Picture" class="brand-slider__image">
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vantages bg-red-dotted">
        <div class="container">
          <div class="container__title container__title--mod white">Почему выбирают</div>
          <div class="container__title container__title--sm white">наш автосервис?</div>
          <div class="vantages__holder">
            <div class="vantages__cell vantages__cell--left">
              <ul class="vantages-list">
                <li class="vantages-list__item">
                  <span class="vantages-list__image js-equal-height">
      <svg class="icon-vantage-01 vantages-list__icon">
        <use xlink:href="#vantage-01"></use>
      </svg>
      <span class="vantages-list__numb">13</span>
                  </span>
                  <span class="vantages-list__content js-equal-height">
      <span class="vantages-list__inner"><span class='vantages-list__bold'>Более 13 лет</span>, наш автосервис оказывает услуги по ремонту и техническому обслуживанию автомобилей</span>
                  </span>
                </li>
                <li class="vantages-list__item">
                  <span class="vantages-list__image js-equal-height">
      <svg class="icon-vantage-02 vantages-list__icon">
        <use xlink:href="#vantage-02"></use>
      </svg>
    </span>
                  <span class="vantages-list__content js-equal-height">
      <span class="vantages-list__inner">Наш автосервис обслуживает как частных лиц, так и корпоративных клиентов. Мы предлагаем <span class='vantages-list__bold'>специальные программы сотрудничества</span> для юридических лиц</span>
                  </span>
                </li>
                <li class="vantages-list__item">
                  <span class="vantages-list__image js-equal-height">
      <svg class="icon-vantage-03 vantages-list__icon">
        <use xlink:href="#vantage-03"></use>
      </svg>
    </span>
                  <span class="vantages-list__content js-equal-height">
      <span class="vantages-list__inner">Наш автосервис один из немногих в Калининграде имеет отдельную профильную <span class='vantages-list__bold'>специализацию по автомобилям класса микроавтобус</span></span>
                  </span>
                </li>
                <li class="vantages-list__item">
                  <span class="vantages-list__image js-equal-height">
      <svg class="icon-vantage-04 vantages-list__icon">
        <use xlink:href="#vantage-04"></use>
      </svg>
    </span>
                  <span class="vantages-list__content js-equal-height">
      <span class="vantages-list__inner"><span class='vantages-list__bold'>Мы предлагаем весь спектр услуг</span> от замены масла в двигателе до ремонта двигателя на оборудовании рекомендованным заводом производителей.</span>
                  </span>
                </li>
                <li class="vantages-list__item">
                  <span class="vantages-list__image js-equal-height">
      <svg class="icon-vantage-05 vantages-list__icon">
        <use xlink:href="#vantage-05"></use>
      </svg>
    </span>
                  <span class="vantages-list__content js-equal-height">
      <span class="vantages-list__inner">Широчайшие <span class='vantages-list__bold'>технические возможности</span>, современное инструментальное и материальное обеспечение и профессональный <span class='vantages-list__bold'>квалифицированный штат специалистов</span></span>
                  </span>
                </li>
              </ul>
            </div>
            <div class="vantages__cell vantages__cell--right">
              <div class="vantages__title">Мы проконсультируем Вас</div>
              <div class="vantages__info">по любым вопросам связанным с Вашим авто</div>
              <div class="vantages__image">
                <img src="<?php echo get_template_directory_uri(); ?>/pic/photo-04.png" alt="Picture" class="vantages__image-picture">
              </div>
              <div class="vantages__position">Дмитрий Петрович</div>
              <div class="vantages__info vantages__info--mod">Старший техник</div>
              <div class="vantages__button">
                <a href="#" class="btn" data-src="#popup-appointment" data-fancybox="">Записаться он-лайн</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slideshow-hold">
        <div class="container">
          <div class="container__title container__title--mod">Фотогалерея</div>
          <div class="container__title container__title--sm">нашего автосервиса</div>
          <div class="slideshow js-slideshow">
            <div class="slideshow__column">
              <div class="slideshow__row">
                <div class="slideshow__cell">
                  <a href="<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-01.png" class="slideshow__link" data-fancybox="1">
                    <div class="slideshow__inner" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-01.png');"></div>
                  </a>
                </div>
                <div class="slideshow__cell">
                  <a href="<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-02.png" class="slideshow__link" data-fancybox="1">
                    <div class="slideshow__inner" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-02.png');"></div>
                  </a>
                </div>
              </div>
              <div class="slideshow__row">
                <a href="<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-03.png" class="slideshow__link" data-fancybox="1">
                  <div class="slideshow__inner" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-03.png');"></div>
                </a>
              </div>
            </div>
            <div class="slideshow__column">
              <a href="<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-04.png" class="slideshow__link" data-fancybox="1">
                <div class="slideshow__inner" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-04.png');"></div>
              </a>
            </div>
            <div class="slideshow__column">
              <div class="slideshow__row">
                <div class="slideshow__cell">
                  <a href="<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-01.png" class="slideshow__link" data-fancybox="1">
                    <div class="slideshow__inner" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-01.png');"></div>
                  </a>
                </div>
                <div class="slideshow__cell">
                  <a href="<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-02.png" class="slideshow__link" data-fancybox="1">
                    <div class="slideshow__inner" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-02.png');"></div>
                  </a>
                </div>
              </div>
              <div class="slideshow__row">
                <a href="<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-03.png" class="slideshow__link" data-fancybox="1">
                  <div class="slideshow__inner" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-03.png');"></div>
                </a>
              </div>
            </div>
            <div class="slideshow__column">
              <a href="<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-04.png" class="slideshow__link" data-fancybox="1">
                <div class="slideshow__inner" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-04.png');"></div>
              </a>
            </div>
            <div class="slideshow__column">
              <div class="slideshow__row">
                <div class="slideshow__cell">
                  <a href="<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-01.png" class="slideshow__link" data-fancybox="1">
                    <div class="slideshow__inner" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-01.png');"></div>
                  </a>
                </div>
                <div class="slideshow__cell">
                  <a href="<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-02.png" class="slideshow__link" data-fancybox="1">
                    <div class="slideshow__inner" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-02.png');"></div>
                  </a>
                </div>
              </div>
              <div class="slideshow__row">
                <a href="<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-03.png" class="slideshow__link" data-fancybox="1">
                  <div class="slideshow__inner" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-03.png');"></div>
                </a>
              </div>
            </div>
            <div class="slideshow__column">
              <a href="<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-04.png" class="slideshow__link" data-fancybox="1">
                <div class="slideshow__inner" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/slideshow/photo-04.png');"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="content-block bg-gray-dotted">
        <div class="container">
          <div class="container__title container__title--mod red">Автоцентр киевский</div>
          <div class="container__title container__title--sm black">Мы работаем для вас</div>
          <div class="holder">
            <div class="holder__wrap">
              <img src="<?php echo get_template_directory_uri(); ?>/pic/photo-01.png" alt="Picture" class="alignleft">
              <p>Каждый автовладелец знает, что для безотказной работы транспортного средства необходимо позаботиться о своевременной профилактике всех технических узлов. Особенно это касается тех <a href="#">автолюбителей</a>, которым часто приходится ездить в Киев и другие большие города. Ведь поломка на дороге мегаполиса может доставить массу проблем. Долговечность работы двигателя, систем и других агрегатов автомобиля зависит от состояния фильтров, качества смазочных материалов и технических жидкостей. В среднем проходить ТО рекомендуется через каждые 10 тыс. км пробега, так как в нашей стране условия эксплуатации автомобиля считаются достаточно тяжелыми. Многие водители, которые не придерживаются этого правила, сталкиваются с ситуацией, когда автомобилю срочно необходим ремонт. Вряд ли в спешке вы сможете найти хороший автосервис.</p>
              <p>Наш автосервис производит ремонт ходовой, ремонт/капремонт двигателя, шиномонтаж, ремонт бамперов. Особое внимание стоит уделить проводке автомобиля, ведь именно она достаточно часто становится причиной пожара. При необходимости вашего "железного коня" осмотрит наш высококвалифицированный автоэлектрик.</p>
            </div>
          </div>
        </div>
      </div>
    </main>




  <?php endwhile; endif; ?>


<?php get_footer(); ?>
