<?php if (have_posts()): while (have_posts()) : the_post(); ?>
  <div id="post-<?php the_ID(); ?>" <?php post_class('looper service__item'); ?>>

    <a  href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="service__link">
      <div class="service__image"
                        <?php if ( has_post_thumbnail()) { ?>
                          style="background-image: url('<?php echo the_post_thumbnail_url('medium'); ?>');"
                        <?php } else { ?>
                          style="background-image: url('<?php echo catchFirstImage(); ?>');"
                        <?php } ?> ></div>
      <div class="service__title js-equal-height">
        <span class="service__title-inner"><?php the_title(); ?></span>
      </div>
    </a>
  </div><!-- /looper -->
<?php endwhile; endif; ?>
