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

    </main>


  <?php  endwhile;  endif; ?>

<?php get_footer(); ?>
