<?php

namespace VueWooCart;

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

use VueWooCart\Singleton;

/**
 * Class 
 * @package VueWooCart\Classes
 * @author  Yarin Ayash
 */
class Init
{

    use Singleton;

    /**
     * Init constructor.
     */
    private function __construct()
    {
        add_action('wp_enqueue_scripts', [$this, 'init_scripts']);
        add_action('wp_footer', [$this, 'init_frontend']);


        remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30);
        add_action('woocommerce_single_product_summary', [$this, 'woocommerce_template_single_add_to_cart']);
    }

    public function init_scripts()
    {
        wp_enqueue_script(
            'vue',
            VUE_WOOCART_URI . '/frontend/build/vue.global.js',
            [],
            time(), // Change this to null for production
            true
        );
        wp_enqueue_script(
            'vue-store',
            VUE_WOOCART_URI . '/frontend/build/index.js',
            [],
            null, // Change this to null for production
            true
        );
        wp_localize_script('vue-store', 'storeApi', array(
            'nonce' => wp_create_nonce('wc_store_api'),
            'max_cart_items' => 6,
            'ajax_url' => admin_url("admin-ajax.php"),
            'get_cart' => site_url() . '/wp-json/wc/store/cart',
            'get_products' => site_url() . '/wp-json/wc/store/products',
            'pageID' => get_the_ID()
        ));
    }

    public function init_frontend()
    {
        if ('' === locate_template(VUE_WOOCART_PATH . '/frontend/cart.php', true, false))
            include(VUE_WOOCART_PATH . '/frontend/cart.php');
        if ('' === locate_template(VUE_WOOCART_PATH . '/frontend/products-list.php', true, false))
            include(VUE_WOOCART_PATH . '/frontend/products-list.php');
    }

    public function woocommerce_template_single_add_to_cart()
    {
        echo '<button data-product-item="' . get_the_ID() . '">Add to cart</button>';
    }
}
