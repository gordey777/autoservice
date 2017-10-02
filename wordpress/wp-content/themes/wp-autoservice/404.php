<?php get_header(); ?>

    <main class="content content--mod">
      <div class="container">
        <ul class="breadcrumbs">
          <li class="breadcrumbs__item arrow">
            <a href="#" class="breadcrumbs__inner">Главная</a>
          </li>
          <li class="breadcrumbs__item">
            <span class="breadcrumbs__inner breadcrumbs__inner--last">Контакты</span>
          </li>
        </ul>
        <div class="not-found">
          <h1 class="not-found__title">4<span class="not-found__title-inner">0</span>4</h1>
          <div class="not-found__image">
            <svg class="icon-not-found">
              <use xlink:href="#not-found"></use>
            </svg>
          </div>
          <div class="not-found__subtitle"><?php _e( 'Page not found', 'wpeasy' ); ?></div>
          <div class="not-found__button">
            <a href="<?php echo home_url(); ?>" class="not-found__link">
              <span class="not-found__link-image">
                  <svg class="icon-arrows">
                    <use xlink:href="#arrows"></use>
                  </svg>
                </span>
              <span class="not-found__link-text">Вернуться на главную</span>
            </a>
          </div>
        </div>
      </div>
    </main>



<?php get_footer(); ?>
