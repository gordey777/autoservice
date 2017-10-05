<?php /* Template Name: Gallery Page */ get_header(); ?>

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>

      <?php //edit_post_link(); ?>

    <main  id="post-<?php the_ID(); ?>" <?php post_class(' content'); ?>>
      <div class="container">
        <?php easy_breadcrumbs(); ?>
        <h1 class="container__title container__title--mod"><?php the_title(); ?></h1>
        <span class="container__title container__title--sm"><?php the_field('subtitle'); ?></span>
        <div class="gallery-holder">
          <?php if( have_rows('galleries') ): ?>

            <?php while ( have_rows('galleries') ) : the_row(); ?>
              <div class="gallery-block">
                <h4><?php the_sub_field('gallery_title'); ?></h4>
                <div class="gallery js-slider is-loading">
                  <?php $single_gallery = get_sub_field('gallery'); ?>
                  <?php if( $single_gallery ): ?>

                     <?php foreach( $single_gallery as $gal_image ): ?>

                        <div class="gallery__item">
                          <a href="<?php echo $gal_image['url']; ?>" class="gallery__link" data-fancybox="1">
                            <img src="<?php echo $gal_image['sizes']['custom-size']; ?>" class="gallery__image">
                          </a>
                        </div>
                    <?php endforeach; ?>
                  <?php endif; ?>
                </div>
              </div>

            <?php endwhile; ?>

          <?php endif; ?>
        </div>
      </div>
    </main>

  <?php endwhile; endif; ?>


<?php get_footer(); ?>
