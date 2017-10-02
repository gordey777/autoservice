<?php get_header(); ?>
<?php $cat__ID = get_queried_object()->cat_ID; ?>
          <?php $field_term = 'category_' . $cat__ID; ?>

    <main class="content content--mod">
      <div class="services-diagnostic">
        <div class="container">
          <?php easy_breadcrumbs(); ?>
          <h1 class="container__title container__title"><?php if( is_category() ) echo get_queried_object()->name; ?></h1>



          <ul class="nav-block">
            <?php $args = array(
              'post_type'      => 'post',
              'cat'            => $cat__ID,
              'orderby'        => 'name',
              'order'          => 'ASC',
              'posts_per_page' => -1,
            ); ?>
            <?php $query = new WP_Query; ?>
            <?php $nav_posts = $query->query($args); ?>

            <?php foreach( $nav_posts as $my_post ){ ?>
                <li id="post-<?php the_ID(); ?>" <?php post_class('looper nav-block__item nav-block__item--mod'); ?>>
                  <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="nav-block__link js-equal-height">
                    <span class="nav-block__inner"><?php the_title(); ?></span>
                  </a>
                </li><!-- /looper -->
            <?php } ?>
            <?php wp_reset_postdata(); ?>

          </ul>

          <div class="static-content">
            <p>Каждый автовладелец знает, что для безотказной работы транспортного средства необходимо позаботиться о своевременной профилактике всех технических узлов. Особенно это касается тех автолюбителей, которым часто приходится ездить в Киев и другие большие города. Ведь поломка на дороге мегаполиса может доставить массу проблем. Долговечность работы двигателя, систем и других агрегатов автомобиля зависит от состояния фильтров, качества смазочных материалов и технических жидкостей. В среднем проходить ТО рекомендуется через каждые 10 тыс. км пробега, так как в нашей стране условия эксплуатации автомобиля считаются достаточно тяжелыми. Многие водители, которые не придерживаются этого правила, сталкиваются с ситуацией, когда автомобилю срочно необходим ремонт. Вряд ли в спешке вы сможете найти хороший автосервис.</p>
            <p>Наш автосервис производит ремонт ходовой, ремонт/капремонт двигателя, шиномонтаж, ремонт бамперов. Особое внимание стоит уделить проводке автомобиля, ведь именно она достаточно часто становится причиной пожара. При необходимости вашего "железного коня" осмотрит наш высококвалифицированный автоэлектрик.</p>
          </div>
        </div>
        <div class="contact-block contact-block--mod" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/bg/bg-contact.png');">
          <div class="container">
            <div class="contact-block__wrapper">
              <div class="contact-block__telephone">
                <span class="contact-block__telephone-inner">Запишитесь по телефону </span>
                <a href="tel:+74012999999" class="contact-block__telephone-inner contact-block__telephone-inner--link">+ 7 (4012) 999 999 </a>
                <span class="contact-block__telephone-inner contact-block__telephone-inner--yellow"> или </span>
                <span class="contact-block__telephone-inner"> оставьте он-лайн заявку</span>
              </div>
              <div class="contact-block__button">
                <a href="#" class="btn" data-src="#popup-appointment" data-fancybox>Записаться он-лайн</a>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="holder static-content prices__holder">
            <div class="holder__wrap">
                <?php the_field('cat_content', $field_term); ?>
            </div>
          </div>
        </div>


        <div class="benefits bg-red-dotted">
          <div class="container">
            <div class="container__title container__title--mod white container__title--xs">Почему автовладельцы доверяют</div>
            <div class="container__title container__title--sm white">нашему автосервису?</div>
            <ul class="benefits-list">
              <li class="benefits-list__item">
                <span class="benefits-list__top">
    <span class="benefits-list__top-inner">

        <svg class="icon-car-arrow benefits-list__icon">
          <use xlink:href="#car-arrow"></use>
        </svg>


    </span>
                </span>
                <div class="benefits-list__content js-equal-height">
                  <div class="benefits-list__info">Охраняемая парковка для транспорта клиентов</div>
                </div>
              </li>
              <li class="benefits-list__item">
                <span class="benefits-list__top">
    <span class="benefits-list__top-inner">


        <span class="benefits-list__text ">1 год</span>
                </span>
                </span>
                <div class="benefits-list__content js-equal-height">
                  <div class="benefits-list__info">12 месяцев гарантии на все работы</div>
                </div>
              </li>
              <li class="benefits-list__item">
                <span class="benefits-list__top">
    <span class="benefits-list__top-inner">


        <span class="benefits-list__text benefits-list__text--sm">7 / 365</span>
                </span>
                </span>
                <div class="benefits-list__content js-equal-height">
                  <div class="benefits-list__info">Работаем 7 дней в неделю 365 дней в году</div>
                </div>
              </li>
              <li class="benefits-list__item">
                <span class="benefits-list__top">
    <span class="benefits-list__top-inner">

        <svg class="icon-air-filter benefits-list__icon">
          <use xlink:href="#air-filter"></use>
        </svg>


    </span>
                </span>
                <div class="benefits-list__content js-equal-height">
                  <div class="benefits-list__info">Собственный склад автозапчастей и автомасел</div>
                </div>
              </li>
            </ul>
          </div>
        </div>


        <div class="container">
          <div class="price-table-list">
            <div class="container__title container__title--mod">Прайс</div>
            <div class="container__title container__title--sm">наших услуг</div>
            <div class="price-table-list__row">
              <div class="price-table-list__column">
                <div class="price-table" id=" ">
<?php $query = new WP_Query; ?>
<?php $table_posts = $query->query($args); ?>

<?php foreach( $table_posts as $my_post ){ ?>


                  <?php if( have_rows('service_price') ): ?>
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
                  <?php endif; ?>
<?php } ?>
<?php wp_reset_postdata(); ?>

                </div>
                <div class="price-table-list__info">За полее подробной информацией обращайтеся в нашу компанию.
                  <br>Мы прозведем оценку работ и подберем наиболее подходящие комплектующие.</div>
              </div>
            </div>
          </div>
        </div>
        </div>


      </main>




<?php get_footer(); ?>
