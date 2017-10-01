<?php
class walker_head_menu extends Walker_Nav_Menu {
    function __construct($css_class_prefix) {
        $this->css_class_prefix = $css_class_prefix;

        // Define menu item names appropriately
        $this->item_css_class_suffixes = array(

            'parent_item'               => ' item--parent',
            'parent_link'               => ' arrow arrow--mod js-acc-trigger',
            'parent_sub_link'           => ' arrow js-acc-sub-trigger',

            'active_item'               => ' item--active',
            'active_sub_item'           => ' dropdown-item--active',
            'parent_of_active_item'     => ' item--parent-active',
            'ancestor_of_active_item'   => ' item--ancestor-active',

            'item'                      => ' nav__item',
            'link'                      => ' nav__text',

            'sub_menu'                  => ' nav__drop js-equal-height js-acc-content js-acc-sub',
            'sub_item'                  => ' nav__drop-item js-acc-sub-item',
            'sub_link'                  => ' nav__drop-link',

            'sub_sub_menu'              => ' nav__sub js-equal-height js-acc-sub-content',
            'sub_sub_item'              => ' nav__sub-item',
            'sub_sub_link'              => ' nav__sub-link arrow',
        );
    }



    // Check for children
    function display_element( $element, &$children_elements, $max_depth, $depth=0, $args, &$output ){

        $id_field = $this->db_fields['id'];

        if ( is_object( $args[0] ) ) {
            $args[0]->has_children = !empty( $children_elements[$element->$id_field] );
        }

        return parent::display_element( $element, $children_elements, $max_depth, $depth, $args, $output );

    }

    function start_lvl(&$output, $depth = 1, $args=array()) {

          $real_depth = $depth + 1;

          $indent = str_repeat("\t", $real_depth);
          $prefix = $this->css_class_prefix;
          $suffix = $this->item_css_class_suffixes;
          if ($real_depth == 1) {
              $classes = array(
                  $prefix . $suffix['sub_menu'],
              );
          } else if ($real_depth == 2) {
              $classes = array(
                  $prefix . $suffix['sub_sub_menu'],
              );
          }
          $class_names = implode( ' ', $classes );
          // Add a ul wrapper to sub nav
          $output .= "\n" . $indent . '<ul class="'. $class_names . ' depth-' . $real_depth . '">' ."\n";

    }

    // Add main/sub classes to li's and links

    function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {

        global $wp_query;

        $indent = ( $depth > 0 ? str_repeat( "    ", $depth ) : '' ); // code indent
        $prefix = $this->css_class_prefix;
        $suffix = $this->item_css_class_suffixes;
        // Item classes
        $item_classes =  array(
            'item_class'            => $depth == 0 ? $prefix . $suffix['item'] : ($depth == 1 ? $prefix . $suffix['sub_item'] : $prefix . $suffix['sub_sub_item']),
            'parent_class'          => $args->has_children ? $parent_class = $prefix . $suffix['parent_item'] : '',
            'active_page_class'     => in_array("current-menu-item",$item->classes) ? ($depth == 0 ? $prefix . $suffix['active_item'] : $prefix . $suffix['active_sub_item']) : '',
            'active_parent_class'   => in_array("current-menu-parent",$item->classes) ? $prefix . $suffix['parent_of_active_item'] : '',
            'active_ancestor_class' => in_array("current-menu-ancestor",$item->classes) ? $prefix . $suffix['ancestor_of_active_item'] : '',
            'user_class'            => $item->classes[0] !== '' ? $prefix . '__item--'. $item->classes[0] : ''
        );
        // convert array to string excluding any empty values
        $class_string = implode("  ", array_filter($item_classes));
        // Add the classes to the wrapping <li>
        if ( $depth == 0 ) {

         $output .= $indent . '<li class="' . $class_string . '"><div class="nav__holder js-acc-item">';
        } else {
          $output .= $indent . '<li class="' . $class_string . '">';
        }

        // Link classes


        if ( array_search('menu-item-has-children', $item->classes) != 0 ) {
            $link_classes = array(
                'item_link'   => $depth == 0 ? $prefix . $suffix['link'] . $suffix['parent_link'] : ($depth == 1 ? $prefix . $suffix['sub_link'] . $suffix['parent_sub_link'] : $prefix . $suffix['sub_sub_link']),
            );
        } else {
            $link_classes = array(
                'item_link'   => $depth == 0 ? $prefix . $suffix['link'] : ($depth == 1 ? $prefix . $suffix['sub_link'] : $prefix . $suffix['sub_sub_link']),
            );
        }



        $link_class_string = implode("  ", array_filter($link_classes));


        $link_class_output = 'class="' . $link_class_string . '"';


        // link attributes
        $attributes  = ! empty($item->attr_title) ? ' title="'  . esc_attr($item->attr_title) .'"' : '';
        $attributes .= ! empty($item->target)     ? ' target="' . esc_attr($item->target    ) .'"' : '';
        $attributes .= ! empty($item->xfn)        ? ' rel="'    . esc_attr($item->xfn       ) .'"' : '';
        $attributes .= ! empty($item->url)        ? ' href="'   . esc_attr($item->url       ) .'"' : '';
        // Creatre link markup
        $item_output = $args->before;



        //Add SPAN if no Permalink
        if( (!empty($item->url)) && (($item->url) != '#') ) {
          $item_output .= '<a' . $attributes . ' ' . $link_class_output . '>';
          $item_output .=     $args->link_before;
          $item_output .=     apply_filters('the_title', $item->title, $item->ID);
          $item_output .=     $args->link_after;
          $item_output .=     $args->after;
          $item_output .= '</a>';


        } else {
          $item_output .= '<span' . ' ' . $link_class_output . '>';
          $item_output .=     $args->link_before;
          $item_output .=     apply_filters('the_title', $item->title, $item->ID);
          $item_output .=     $args->link_after;
          $item_output .=     $args->after;
          $item_output .= '</span>';
        }



        // Filter <li>

        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }

    function end_el( &$output, $item, $depth = 0, $args = array() ) {

      if ( $depth == 0 ) {

        $output .= "</div></li>\n";
      }
      else {
        $output .= "</li>\n";
      }
    }

}




class walker_footer_menu extends Walker_Nav_Menu {
    function __construct($css_class_prefix) {
        $this->css_class_prefix = $css_class_prefix;

        // Define menu item names appropriately
        $this->item_css_class_suffixes = array(

            'parent_item'               => 'simple-list__item--parent',
            'active_item'               => 'simple-list__item--active',
            'active_sub_item'           => 'simple-list__dropdown-item--active',
            'parent_of_active_item'     => 'simple-list__item--parent-active',
            'ancestor_of_active_item'   => 'simple-list__item--ancestor-active',

            'item'                      => 'simple-list__item',
            'link'                      => 'simple-list__link',


            'sub_menu'                  => 'simple-list__dropdown',
            'sub_item'                  => 'simple-listsimple-list__dropdown-item',
            'sub_link'                  => 'simple-list__dropdown-link'
        );
    }
    // Check for children
    function display_element( $element, &$children_elements, $max_depth, $depth=0, $args, &$output ){

        $id_field = $this->db_fields['id'];

        if ( is_object( $args[0] ) ) {
            $args[0]->has_children = !empty( $children_elements[$element->$id_field] );
        }

        return parent::display_element( $element, $children_elements, $max_depth, $depth, $args, $output );

    }

    function start_lvl(&$output, $depth = 1, $args=array()) {

        $real_depth = $depth + 1;

        $indent = str_repeat("\t", $real_depth);
        $prefix = $this->css_class_prefix;
        $suffix = $this->item_css_class_suffixes;
        $classes = array(
            $prefix . $suffix['sub_menu'],
        );
        $class_names = implode( ' ', $classes );
        // Add a ul wrapper to sub nav
        $output .= "\n" . $indent . '<ul class="'. $class_names .'">' ."\n";
    }



    // Add main/sub classes to li's and links

    function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {

        global $wp_query;

        $indent = ( $depth > 0 ? str_repeat( "    ", $depth ) : '' ); // code indent
        $prefix = $this->css_class_prefix;
        $suffix = $this->item_css_class_suffixes;
        // Item classes
        $item_classes =  array(
            'item_class'            => $depth == 0 ? $prefix . $suffix['item'] : $prefix . $suffix['sub_item'],
            'parent_class'          => $args->has_children ? $parent_class = $prefix . $suffix['parent_item'] : '',
            'active_page_class'     => in_array("current-menu-item",$item->classes) ? ($depth == 0 ? $prefix . $suffix['active_item'] : $prefix . $suffix['active_sub_item']) : '',
            'active_parent_class'   => in_array("current-menu-parent",$item->classes) ? $prefix . $suffix['parent_of_active_item'] : '',
            'active_ancestor_class' => in_array("current-menu-ancestor",$item->classes) ? $prefix . $suffix['ancestor_of_active_item'] : '',
            'user_class'            => $item->classes[0] !== '' ? $prefix . '__item--'. $item->classes[0] : ''
        );
        // convert array to string excluding any empty values
        $class_string = implode("  ", array_filter($item_classes));
        // Add the classes to the wrapping <li>
        $output .= $indent . '<li class="' . $class_string . '">';
        // Link classes
        $link_classes = array(
            'item_link'             => $depth == 0 ? $prefix . $suffix['link'] : $prefix . $suffix['sub_link'],
        );
        $link_class_string = implode("  ", array_filter($link_classes));
        $link_class_output = 'class="' . $link_class_string . '"';
        // link attributes
        $attributes  = ! empty($item->attr_title) ? ' title="'  . esc_attr($item->attr_title) .'"' : '';
        $attributes .= ! empty($item->target)     ? ' target="' . esc_attr($item->target    ) .'"' : '';
        $attributes .= ! empty($item->xfn)        ? ' rel="'    . esc_attr($item->xfn       ) .'"' : '';
        $attributes .= ! empty($item->url)        ? ' href="'   . esc_attr($item->url       ) .'"' : '';
        // Creatre link markup

        $item_output .= '<a' . $attributes . ' ' . $link_class_output . '>';
        $item_output .=     $args->link_before;
        $item_output .=     apply_filters('the_title', $item->title, $item->ID);
        $item_output .=     $args->link_after;
        $item_output .=     $args->after;
        $item_output .= '</a>';


        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }
}
