<?php /* Template Name: Contacts Page */ get_header(); ?>

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>

      <?php //edit_post_link(); ?>

    <main  id="post-<?php the_ID(); ?>" <?php post_class(' content content--mod'); ?>>
      <div class="container">
        <?php easy_breadcrumbs(); ?>
        <h1 class="container__title"><?php the_title(); ?></h1>
      </div>
      <div class="contact-block" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/bg/bg-contact.png');">
        <div class="container">
          <div class="contact-block__holder">
            <?php if( have_rows('contacts_adress') ): ?>
              <div class="contact-block__cell contact-block__cell--left">
                <div class="contact-block__inner">
                  <div class="contact-block__box">
                    <div class="contact-block__subtitle">Наш адрес:</div>
                    <ul class="contact-block-list">
                      <?php while ( have_rows('contacts_adress') ) : the_row(); ?>
                        <li class="contact-block-list__item">
                          <span class="contact-block-list__inner"><?php the_sub_field('address'); ?></span>
                        </li>
                      <?php endwhile; ?>
                    </ul>
                  </div>
                  <div class="contact-block__box">
                    <div class="contact-block__subtitle">По вопросам звоните:</div>
                    <ul class="contact-block-list">
                      <?php while ( have_rows('contacts_adress') ) : the_row(); ?>
                        <li class="contact-block-list__item">
                          <a href="tel:<?php the_sub_field('tel'); ?>" class="contact-block-list__inner contact-block-list__inner--link"><?php the_sub_field('tel'); ?></a>
                        </li>
                      <?php  endwhile; ?>
                    </ul>
                  </div>
                  <div class="contact-block__box">
                    <ul class="contact-block-list">
                      <li class="contact-block-list__item">
                        <span class="contact-block-list__inner"><?php the_field('cont_work_time'); ?></span>
                      </li>
                    </ul>
                    <div class="contact-block__subtitle">Без выходных</div>
                  </div>
                </div>
              </div>
            <?php endif; ?>

            <div class="contact-block__cell contact-block__cell--right">
              <?php echo do_shortcode('[contact-form-7 id="36" title="Контактная форма Контакты"]'); ?>
            </div>
          </div>
        </div>
      </div>
    </main>
  <?php endwhile; endif; ?>


<?php get_footer(); ?>
