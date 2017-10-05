<?php get_header(); ?>
<?php $cat__ID = get_queried_object()->cat_ID; ?>
<?php $field_term = 'category_' . $cat__ID; ?>

    <main class="content content--mod">
      <div class="services-diagnostic">
        <div class="container">
          <?php easy_breadcrumbs(); ?>
          <h1 class="container__title container__title"><?php if( is_category() ) echo get_queried_object()->name; ?></h1>

          <ul class="nav-block">
            <?php $args = array(
              'post_type'      => 'post',
              'cat'            => $cat__ID,
              'orderby'        => 'name',
              'order'          => 'ASC',
              'posts_per_page' => -1,
            ); ?>
            <?php $query = new WP_Query; ?>
            <?php $nav_posts = $query->query($args); ?>

            <?php foreach( $nav_posts as $my_post ){ ?>
                <li id="post-<?php the_ID(); ?>" <?php post_class('looper nav-block__item nav-block__item--mod'); ?>>
                  <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="nav-block__link js-equal-height">
                    <span class="nav-block__inner"><?php the_title(); ?></span>
                  </a>
                </li><!-- /looper -->
            <?php } ?>
            <?php wp_reset_postdata(); ?>
          </ul>

          <div class="static-content">
            <?php the_field('cat_content', $field_term); ?>
          </div>
        </div>

        <?php if ( get_field('advantages_red', $field_term) ) { ?>
          <?php $baner__ID = $field_term; ?>
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

        <div class="container">
          <div class="price-table-list">
            <div class="container__title container__title--mod">Прайс</div>
            <div class="container__title container__title--sm">наших услуг</div>
            <div class="price-table-list__row">
              <div class="price-table-list__column">
                <div class="price-table" id=" ">
                  <?php $query = new WP_Query; ?>
                  <?php $table_posts = $query->query($args); ?>

                  <?php foreach( $table_posts as $my_post ){ ?>
                    <?php if( have_rows('service_price') ): ?>
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
                    <?php endif; ?>
                  <?php } ?>
                  <?php wp_reset_postdata(); ?>

                </div>
                <div class="price-table-list__info">За полее подробной информацией обращайтеся в нашу компанию.
                  <br>Мы прозведем оценку работ и подберем наиболее подходящие комплектующие.</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>

<?php get_footer(); ?>
