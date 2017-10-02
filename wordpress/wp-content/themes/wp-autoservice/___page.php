<?php get_header(); ?>

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>

    <main  id="post-<?php the_ID(); ?>" <?php post_class(' content'); ?>>
      <div class="container">
        <?php easy_breadcrumbs(); ?>
        <div class="static-content">

            <h1 class="section__title"><?php the_title(); ?></h1><?php edit_post_link(); ?>
            <div class="holder">
              <div class="holder__wrap">
                <?php the_content(); ?>
              </div>
            </div>


          <?php $pageGallery = '';//get_field('page_gallery'); ?>
          <?php if( $pageGallery ): ?>
          </div><!-- /.static-content -->

              <div class="holder">
                <h4><?php the_field('page_gallery_title'); ?></h4>
                <div class="gallery">
                  <div class="gallery js-slider is-loading">

                    <?php foreach( $pageGallery as $image ): ?>

                        <div class="gallery__item">
                          <a href="<?php echo $image['url']; ?>" class="gallery__link" data-fancybox="1">
                            <img src="<?php echo $image['sizes']['medium']; ?>" alt="Picture" class="gallery__image">
                          </a>
                        </div>

                    <?php endforeach; ?>
                  </div>
                </div>
              </div>
        <div class="static-content">
          <?php endif; ?>

        </div><!-- /.static-content -->
      </div>

    </main>

  <?php  endwhile;  endif; ?>

<?php get_footer(); ?>
