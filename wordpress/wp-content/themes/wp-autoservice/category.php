
  <?php $cat__ID = get_queried_object()->cat_ID; ?>
  <?php $field_term = 'category_' . $cat__ID; ?>
  <?php $cat_type = get_field('category_type', $field_term); ?>

  <?php
  if ($cat_type['value'] === 'news') {
echo $cat_type['value'];
    include('category-news.php');

  } elseif ($cat_type['value'] === 'services') {

    include('category-services.php');

  } elseif ($cat_type['value'] === 'subservices') {
echo $cat_type['value'];
    include('category-subservices.php');

  } else {
  ?>
  <?php get_header(); ?>
  <main class="content">
    <div class="container">
      <?php easy_breadcrumbs(); ?>
      <h1 class="container__title"><?php if( is_category() ) echo get_queried_object()->name; ?></h1>
      <div class="service-list">
        <?php get_template_part('loop'); ?>

      </div>
      <?php get_template_part('pagination'); ?>
    </div>
  </main>
  <?php get_footer(); ?>
  <?php } ?>



