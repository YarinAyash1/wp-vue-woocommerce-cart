<?php

/**
 * Plugin Name: Vue Woocommerce Cart
 * Plugin URI: https://yarinayash.co.il
 * Description: Vue Woocommerce Cart
 * Version: 1.0.0
 * Author: Yarin Ayash
 * Text Domain: vue-woocommerce-cart
 *
 * @package vue-woocommerce-cart
 */

use VueWooCart\Init;

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}
define('VUE_WOOCART_URI', plugin_dir_url(__FILE__));
define('VUE_WOOCART_PATH', plugin_dir_path(__FILE__));

/**
 * Check if WooCommerce is active
 **/
if (in_array(
    'woocommerce/woocommerce.php',
    apply_filters('active_plugins', get_option('active_plugins'))
)) {
    require_once  __DIR__ . '/classes/autoloader.php';

    Init::get_instance();
}
