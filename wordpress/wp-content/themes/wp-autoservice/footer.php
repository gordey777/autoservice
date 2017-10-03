    <div class="map">
      <div class="map__holder" id="js-map" data-baloon="pic/location.png" data-content="адресок"></div>
      <div class="container">
        <div class="map__box">
          <div class="map__title container__subtitle">Как до нас добраться</div>
          <img src="<?php echo get_template_directory_uri(); ?>/pic/photo-02.png" alt="Picture" class="map__image">
          <div class="map__button">
            <a href="#" class="btn" data-src="#popup-appointment" data-fancybox>Записаться он-лайн</a>
          </div>
        </div>
      </div>
    </div>


        <div class="brand-slider-holder">
          <div class="container">
            <div class="brand-slider-title container__subtitle">Ремонт автомобилей</div>
            <div class="brand-slider-subtitle">всех ведущих мировых производителей с 1997 года</div>
            <div class="brand-slider js-brand-slider is-loading">
              <div class="brand-slider__item">
                <a href="#" class="brand-slider__link">
                  <img src="pic/brand-slider/photo-01.png" alt="Picture" class="brand-slider__image">
                </a>
              </div>
              <div class="brand-slider__item">
                <a href="#" class="brand-slider__link">
                  <img src="<?php echo get_template_directory_uri(); ?>/pic/brand-slider/photo-02.png" alt="Picture" class="brand-slider__image">
                </a>
              </div>
              <div class="brand-slider__item">
                <a href="#" class="brand-slider__link">
                  <img src="<?php echo get_template_directory_uri(); ?>/pic/brand-slider/photo-03.png" alt="Picture" class="brand-slider__image">
                </a>
              </div>
              <div class="brand-slider__item">
                <a href="#" class="brand-slider__link">
                  <img src="<?php echo get_template_directory_uri(); ?>/pic/brand-slider/photo-04.png" alt="Picture" class="brand-slider__image">
                </a>
              </div>
              <div class="brand-slider__item">
                <a href="#" class="brand-slider__link">
                  <img src="<?php echo get_template_directory_uri(); ?>/pic/brand-slider/photo-05.png" alt="Picture" class="brand-slider__image">
                </a>
              </div>
              <div class="brand-slider__item">
                <a href="#" class="brand-slider__link">
                  <img src="<?php echo get_template_directory_uri(); ?>/pic/brand-slider/photo-06.png" alt="Picture" class="brand-slider__image">
                </a>
              </div>
              <div class="brand-slider__item">
                <a href="#" class="brand-slider__link">
                  <img src="<?php echo get_template_directory_uri(); ?>/pic/brand-slider/photo-01.png" alt="Picture" class="brand-slider__image">
                </a>
              </div>
              <div class="brand-slider__item">
                <a href="#" class="brand-slider__link">
                  <img src="<?php echo get_template_directory_uri(); ?>/pic/brand-slider/photo-02.png" alt="Picture" class="brand-slider__image">
                </a>
              </div>
            </div>
          </div>
        </div>


  </div><!-- wrapper -->

  <footer class="footer js-footer">
    <div class="footer__wrapper" style="background-image: url('<?php echo get_template_directory_uri(); ?>/pic/bg/bg-footer.png');">
      <div class="footer__center">
        <div class="container">
          <div class="footer__cell footer__cell--left js-acc-mod">
            <div class="footer__box js-acc-mod-item">
              <div class="footer__title container__subtitle js-acc-mod-trigger arrow">Услуги</div>
              <div class="footer__list js-acc-mod-content">
                <?php wpeFootServNav(); ?>
              </div>
            </div>
            <div class="footer__box js-acc-mod-item">
              <div class="footer__title container__subtitle js-acc-mod-trigger arrow">Об автосервисе</div>
              <div class="footer__list js-acc-mod-content">
                <?php wpeFootNav(); ?>
              </div>
            </div>
          </div>
          <div class="footer__cell footer__cell--right">
            <div class="footer__box footer__box--left">
              <ul class="loc-list">
                <li class="loc-list__item">
                  <span class="loc-list__image">
                  <svg class="icon-loc loc-list__icon">
                    <use xlink:href="#loc"></use>
                  </svg>
                </span>
                  <span class="loc-list__content">
                  <span class="loc-list__content-inner"><?php the_field('addres', 37); ?></span>
                  </span>
                </li>
                <li class="loc-list__item">
                  <span class="loc-list__image">
                  <svg class="icon-tel loc-list__icon">
                    <use xlink:href="#tel"></use>
                  </svg>
                </span>
                  <span class="loc-list__content">
                  <a href="tel:<?php the_field('phone', 37); ?>" class="loc-list__content-inner loc-list__content-inner--link"><?php the_field('phone', 37); ?></a>
                </span>
                </li>
                <li class="loc-list__item">
                  <span class="loc-list__image">
                  <svg class="icon-clock loc-list__icon">
                    <use xlink:href="#clock"></use>
                  </svg>
                </span>
                  <span class="loc-list__content">
                  <span class="loc-list__content-inner"><?php the_field('working_hours', 37); ?></span>
                  </span>
                </li>
              </ul>
            </div>
            <div class="footer__box footer__box--right">
              <div class="footer__logo">
                <a href="" class="logo logo--lg">
                  <svg class="icon-logo logo__icon">
                    <use xlink:href="#logo"></use>
                  </svg>
                  <span class="logo__text"><?php bloginfo( 'name' ); ?></span>
                </a>
              </div>
              <div class="footer__button">
                <a href="#" class="btn btn--sm" data-src="#popup-appointment" data-fancybox>Записаться на ремонт</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="container">
          <div class="footer__copy"><?php the_field('copyright', 37); ?></div>
          <div class="footer__site">
            <a href="#" class="footer__site-link">Мультисайт</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- POPUP -->
  <!-- POPUP APPOINTMENT-->
  <div class="popup" id="popup-appointment">
    <div class="popup-holder">
      <div class="popup-appointment">
        <div class="popup__title container__subtitle">Запишитесь на осмотр</div>
        <div class="popup__info">Мы свяжемся с Вами в ближайше время!
          <br>График работы без выходных и праздничных дней с 09:00 - 21:00</div>
        <form action="#" class="popup__form">
          <div class="input-hold input-row">
            <input type="text" class="input input-hold__input" placeholder="Ваше имя">
            <span class="input-hold__image">
            <svg class="icon-user input-hold__icon">
              <use xlink:href="#user"></use>
            </svg>
          </span>
          </div>
          <div class="input-hold input-row">
            <input type="tel" class="input input-hold__input" placeholder="Ваш телефон">
            <span class="input-hold__image">
            <svg class="icon-phone input-hold__icon">
              <use xlink:href="#phone"></use>
            </svg>
          </span>
          </div>
          <div class="input-hold input-row">
            <textarea name="text" id="text" placeholder="Ваше сообщение"></textarea>
            <span class="input-hold__image">
            <svg class="icon-message input-hold__icon">
              <use xlink:href="#message"></use>
            </svg>
          </span>
          </div>
          <div class="popup__submit">
            <button type="submit" class="btn">Отправить заявку</button>
          </div>
          <ul class="checkboxes-list">
            <li class="checkboxes-list__item checkboxes-list__item--mod">
              <label class="checkbox">
                <input type="checkbox" class="checkbox__check" checked="">
                <span class="checkbox__icon"></span>
                <span class="checkbox__inner">
                <span class="checkbox__text">Нажимая "Отправить", я принимаю условия обработки персональных данных</span>
                </span>
              </label>
            </li>
            <li class="checkboxes-list__item checkboxes-list__item--mod">
              <label class="checkbox">
                <input type="checkbox" class="checkbox__check" checked="">
                <span class="checkbox__icon"></span>
                <span class="checkbox__inner">
                <span class="checkbox__text">Я ознакомлен с <a href="#" class="btn-border">Политикой конфиденциальности</a></span>
                </span>
              </label>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </div>
  <!-- POPUP APPOINTMENT END -->
  <!-- POPUP PICK-->
  <div class="popup" id="popup-pick">
    <div class="popup-holder">
      <div class="popup-appointment">
        <div class="popup__title container__subtitle">Мы оперативно подберем</div>
        <div class="popup__info">нужные запчасти для Вашего авто</div>
        <form action="#" class="popup__form">
          <div class="input-row">
            <input type="text" class="input" placeholder="Ваше имя">
          </div>
          <div class="input-row">
            <input type="tel" class="input" placeholder="Ваш телефон">
          </div>
          <div class="input-row">
            <input type="text" class="input" placeholder="Марка автомобиля">
          </div>
          <div class="input-row">
            <input type="text" class="input" placeholder="VIN">
          </div>
          <div class="input-row">
            <input type="text" class="input" placeholder="Год выпуска">
          </div>
          <div class="input-row">
            <input type="text" class="input" placeholder="VIN">
          </div>
          <div class="input-row">
            <input type="text" class="input" placeholder="Объем">
          </div>
          <div class="input-row">
            <input type="text" class="input" placeholder="Мощность и Л.С.">
          </div>
          <div class="input-row">
            <textarea name="text" id="text" placeholder="Ваш вопрос"></textarea>
          </div>
          <div class="popup__submit">
            <button type="submit" class="btn">Отправить заявку</button>
          </div>
          <ul class="checkboxes-list">
            <li class="checkboxes-list__item checkboxes-list__item--mod">
              <label class="checkbox">
                <input type="checkbox" class="checkbox__check">
                <span class="checkbox__icon"></span>
                <span class="checkbox__inner">
                <span class="checkbox__text">Нажимая "Отправить", я принимаю условия обработки персональных данных</span>
                </span>
              </label>
            </li>
            <li class="checkboxes-list__item checkboxes-list__item--mod">
              <label class="checkbox">
                <input type="checkbox" class="checkbox__check" checked="">
                <span class="checkbox__icon"></span>
                <span class="checkbox__inner">
                <span class="checkbox__text">Я ознакомлен с <a href="#" class="btn-border">Политикой конфиденциальности</a></span>
                </span>
              </label>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </div>
  <!-- POPUP PICK END -->
  <!-- POPUP VIDEO-->
  <?php $videomap = get_field('videomap', 37); ?>
  <?php if ( !empty($videomap)) : ?>
    <div class="popup" id="popup-video">
      <div class="popup-holder">
        <div class="popup-video">
          <iframe class="popup-video__video" src="https://www.youtube.com/embed/<?php echo $videomap['vid']; ?>" frameborder="0" allowfullscreen width="854" height="480"></iframe>
        </div>
      </div>
    </div>
  <?php endif; ?>

  <!-- POPUP VIDEO END -->
  <!-- POPUP END -->
  <?php wp_footer(); ?>
  <script src="<?php echo get_template_directory_uri(); ?>/js/vendor.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/main.js"></script>

</body>





