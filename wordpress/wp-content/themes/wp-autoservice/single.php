<?php get_header(); ?>

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>

    <main  id="post-<?php the_ID(); ?>" <?php post_class(' content'); ?>>
      <div class="container">
        <?php easy_breadcrumbs(); ?>
        <div class="static-content">
          <h1 class="section__title"><?php the_title(); ?></h1><?php edit_post_link(); ?>
          <?php the_content(); ?>
        </div>
      </div>

      <?php $page_type = get_field('page_type'); ?>
      <?php if ($page_type ) : ?>

        <?php if ( get_field('advantages_red') ) { ?>
          <?php $baner__ID = get_the_ID(); ?>

        <?php } else { ?>

          <?php $baner__ID = 37; ?>

        <?php } ?>

        <?php if( have_rows('advantages_red', $baner__ID) ): ?>

          <div class="benefits bg-red-dotted">
            <div class="container">
              <div class="container__title container__title--mod white container__title--xs">Почему автовладельцы доверяют</div>
              <div class="container__title container__title--sm white">нашему автосервису?</div>

              <ul class="benefits-list">
                <?php while ( have_rows('advantages_red', $baner__ID) ) : the_row(); ?>
                  <li class="benefits-list__item">
                    <span class="benefits-list__top">
                      <span class="benefits-list__top-inner">
                        <?php if ( get_sub_field('icon_class') ) { ?>
                          <svg class="icon-<?php the_sub_field('icon_class'); ?> benefits-list__icon">
                            <use xlink:href="#<?php the_sub_field('icon_class'); ?>"></use>
                          </svg>
                        <?php } else { ?>
                          <span class="benefits-list__text"><?php the_sub_field('icon-title'); ?></span>
                        <?php } ?>
                      </span>
                    </span>
                    <div class="benefits-list__content js-equal-height">
                      <div class="benefits-list__info"><?php the_sub_field('desc'); ?></div>
                    </div>
                  </li>
                <?php endwhile; ?>
              </ul>
            </div>
          </div>
        <?php endif; ?>

        <?php if( have_rows('service_price') ): ?>

          <div class="container">
            <div class="price-table-list">
              <div class="container__title container__title--mod">Прайс</div>
              <div class="container__title container__title--sm">наших услуг</div>
              <div class="price-table-list__row">
                <div class="price-table-list__column">
                  <div class="price-table" id=" ">
                    <?php while ( have_rows('service_price') ) : the_row(); ?>

                      <div class="price-table__row">
                        <div class="price-table__cell price-table__cell--left">
                          <span class="price-table__inner"><?php the_sub_field('title'); ?></span>
                        </div>
                        <div class="price-table__cell price-table__cell--right">
                          <span class="price-table__inner"><?php the_sub_field('before_price'); ?> <span class="price-table__price"><?php the_sub_field('sub_price'); ?></span></span>
                        </div>
                      </div>
                    <?php  endwhile; ?>

                  </div>
                  <div class="price-table-list__info">За полее подробной информацией обращайтеся в нашу компанию.
                    <br>Мы прозведем оценку работ и подберем наиболее подходящие комплектующие.</div>
                </div>
              </div>
            </div>
          </div>
        <?php endif; ?>

      <?php endif; ?>
    </main>

  <?php  endwhile;  endif; ?>

<?php get_footer(); ?>
