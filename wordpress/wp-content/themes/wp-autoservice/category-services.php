<?php get_header(); ?>
<?php $cat__ID = get_queried_object()->cat_ID; ?>

    <main class="content">
      <div class="container">
        <?php easy_breadcrumbs(); ?>
        <h1 class="container__title"><?php if( is_category() ) echo get_queried_object()->name; ?></h1>
        <div class="service-list">

          <?php $child_args = array(
            'child_of' => $cat__ID,
            'post_per_page' => -1,
            ); ?>
          <?php $child_categories = get_categories($child_args); ?>

          <?php foreach($child_categories as $category) : ?>

            <div id="cat-<?php echo $category->term_id; ?>" class="looper service__item">

              <a  href="<?php echo get_category_link( $category->term_id ); ?>" title="<?php echo $category->name; ?>" class="service__link">
                <div class="service__image"
                                  <?php if ( has_post_thumbnail()) { ?>
                                    style="background-image: url('<?php echo the_post_thumbnail_url('medium'); ?>');"
                                  <?php } else { ?>
                                    style="background-image: url('<?php echo catchFirstImage(); ?>');"
                                  <?php } ?> ></div>
                <div class="service__title js-equal-height">
                  <span class="service__title-inner"><?php echo $category->name; ?></span>
                </div>
              </a>
            </div><!-- /looper -->

          <?php endforeach; ?>

        </div>
        <?php //get_template_part('pagination'); ?>
      </div>
    </main>

<?php get_footer(); ?>
