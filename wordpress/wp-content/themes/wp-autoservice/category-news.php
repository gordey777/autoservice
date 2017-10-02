<?php get_header(); ?>
<?php $cat__ID = get_queried_object()->cat_ID; ?>

    <main class="content">
      <div class="container">
        <?php easy_breadcrumbs(); ?>
        <h1 class="container__title"><?php if( is_category() ) echo get_queried_object()->name; ?></h1>
        <div class="news-list">

        <?php if (have_posts()): while (have_posts()) : the_post(); ?>
          <div id="post-<?php the_ID(); ?>" <?php post_class('looper news__item'); ?>>
            <a href="<?php the_permalink(); ?>" class="news__link" title="<?php the_title(); ?>">
              <div class="news__date date"><?php the_time('j F Y'); ?></div>
              <div class="news__image">
                <span class="news__image-inner"
                                <?php if ( has_post_thumbnail()) { ?>
                                  style="background-image: url('<?php echo the_post_thumbnail_url('medium'); ?>');"
                                <?php } else { ?>
                                  style="background-image: url('<?php echo catchFirstImage(); ?>');"
                                <?php } ?> >
              </span>
              </div>
              <div class="news__content js-equal-height">
                <div class="news__title"><?php the_title(); ?></div>
                <div class="news__info"><?php wpeExcerpt('wpeExcerpt10'); ?></div>
              </div>
            </a>

          </div><!-- /looper -->
        <?php endwhile; endif; ?>


        </div>
        <?php get_template_part('pagination'); ?>
      </div>
    </main>


<?php get_footer(); ?>
