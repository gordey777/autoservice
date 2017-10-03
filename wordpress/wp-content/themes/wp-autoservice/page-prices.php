<?php /* Template Name: Prices Page */ get_header(); ?>

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>


<main  id="post-<?php the_ID(); ?>" <?php post_class(' content content--mod'); ?>>
      <div class="prices">
        <div class="container">
          <?php easy_breadcrumbs(); ?>
          <h1 class="container__title container__title--mod"><?php the_title(); ?></h1><?php edit_post_link(); ?>
          <span class="container__title container__title--sm">на наши услуги</span>

          <ul class="nav-block">
      <?php
      $cat__ids = get_field('price_categories');

      $cat__ids_string = implode(", ", $cat__ids);;



      $child_args = array(
        'include' => $cat__ids_string,
        'hide_empty' => 0,

        ); ?>
        <?php $child_categories = get_categories($child_args); ?>

<?php foreach($child_categories as $category) : ?>

            <li class="nav-block__item">
              <a href="#link-<?php echo $category->term_id; ?>" class="nav-block__link js-link nav-block__link--active"><?php echo $category->name; ?></a>
            </li>
<?php endforeach; ?>

          </ul>
          <?php the_content(); ?>
        </div>
        <div class="contact-block contact-block--mod" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/bg/bg-contact.png');">
          <div class="container">
            <div class="contact-block__wrapper">
              <div class="contact-block__telephone">
                <span class="contact-block__telephone-inner">Запишитесь по телефону </span>
                <a href="<?php the_field('phone', 37); ?>" class="contact-block__telephone-inner contact-block__telephone-inner--link"><?php the_field('phone', 37); ?></a>
                <span class="contact-block__telephone-inner contact-block__telephone-inner--yellow"> или </span>
                <span class="contact-block__telephone-inner"> оставьте он-лайн заявку</span>
              </div>
              <div class="contact-block__button">
                <a href="#" class="btn" data-src="#popup-appointment" data-fancybox>Записаться он-лайн</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="price-table-list">
          <div class="price-table-list__row">




<?php $i_max = count($child_categories); ?>
<?php $i = 0; ?>
<?php foreach($child_categories as $category) : ?>


<?php if($i == 0 ) { ?>
  <div class="price-table-list__column">
<?php } ?>

<?php if( ( $i == ($i_max / 2)  ) || ( ($i > ( ($i_max / 2) - 1)) && $i < ( $i_max / 2 ) ) ) { ?>

  </div>
  <div class="price-table-list__column">
<?php } ?>


              <div class="price-table" id="link-<?php echo $category->term_id; ?>">
                <div class="price-table__head"><?php echo $category->name; ?></div>

                  <?php $tab_args = array(
                                'post_type'      => 'post',
                                'cat'            => $category->term_id,
                                'orderby'        => 'name',
                                'order'          => 'ASC',
                                'posts_per_page' => -1,
                              ); ?>

                  <?php $query = new WP_Query; ?>
                  <?php $table_posts = $query->query($tab_args); ?>

                  <?php foreach( $table_posts as $post ){ ?>
                                    <?php if( have_rows('service_price', get_the_ID()) ): ?>
                                      <?php while ( have_rows('service_price', get_the_ID()) ) : the_row(); ?>
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


<?php if($i == $i_max ) { ?>
  </div>
<?php } ?><?php $i++; ?>


<?php endforeach; ?>


          </div>
        </div>
        <p class="prices__info prices__info--mod">За более подробной информацией обращайтеся в нашу компанию. Мы прозведем оценку работ и подберем наиболее подходящие комплектующие.</p>
      </div>
    </main>















  <?php  endwhile;  endif; ?>

<?php get_footer(); ?>
