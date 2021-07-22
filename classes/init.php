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

        add_filter('woocommerce_locate_template', [$this, 'woocommerce_replace_templates'], 10, 3);
        add_filter('tinvwl_wc_cart_fragments_refresh', '__return_false');
    }

    public function init_scripts()
    {
        wp_enqueue_script(
            'vue',
            VUE_WOOCART_URI . '/frontend/vue.global.js',
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

        wp_dequeue_script('wc-cart-fragments');
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

    /**
     * Filter the cart template path to use cart.php in this plugin instead of the one in WooCommerce.
     *
     * @param string $template      Default template file path.
     * @param string $template_name Template file slug.
     * @param string $template_path Template file name.
     *
     * @return string The new Template file path.
     */
    public function woocommerce_replace_templates($template, $template_name, $template_path)
    {

        if ('cart.php' === basename($template) || 'cart-empty.php' === basename($template)) {
            $template = VUE_WOOCART_PATH . '/frontend/woocommerce/cart/cart.php';
        }
        if ('mini-cart.php' === basename($template)) {
            $template = VUE_WOOCART_PATH . '/frontend/woocommerce/cart/mini-cart.php';
        }

        return $template;
    }
}
