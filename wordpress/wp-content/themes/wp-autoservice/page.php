<?php get_header(); ?>

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>

    <main  id="post-<?php the_ID(); ?>" <?php post_class(' content'); ?>>
      <div class="container">
        <?php easy_breadcrumbs(); ?>
        <div class="static-content">

            <h1 class="section__title"><?php the_title(); ?></h1><?php edit_post_link(); ?>

                <?php the_content(); ?>

        </div><!-- /.static-content -->
      </div>

    </main>

  <?php  endwhile;  endif; ?>

<?php get_footer(); ?>
