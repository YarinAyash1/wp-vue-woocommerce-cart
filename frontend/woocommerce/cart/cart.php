<?php

/**
 * Cart Page
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/cart.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.8.0
 */

defined('ABSPATH') || exit;
do_action('woocommerce_before_cart'); ?>
<?php // woocommerce_mini_cart(); 
?>
<div id="cart-page">
	<table v-if="cart.items.length" ref="cart-page" class="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellspacing="0">
		<thead>
			<tr>
				<th class="product-remove">&nbsp;</th>
				<th class="product-thumbnail">&nbsp;</th>
				<th class="product-name">Product</th>
				<th class="product-price">Price</th>
				<th class="product-quantity">Quantity</th>
				<th class="product-subtotal">Subtotal</th>
			</tr>
		</thead>
		<tbody>

			<tr class="woocommerce-cart-form__cart-item cart_item" v-for="item in cart.items" :key="item.id">

				<td class="product-remove">
					<a class="remove" aria-label="Remove this item" @click="removeFromCart(item.key)">×</a>
				</td>

				<td class="product-thumbnail">
					<a :href="item.permalink" v-if="item.images.length">
						<img width="300" height="300" :src="item.images[0].src" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" :alt="item.images[0].alt" :srcset="item.images[0].srcset">
					</a>
				</td>

				<td class="product-name">
					<a :href="item.permalink">{{item.name}}</a>
				</td>

				<td class="product-price">
					<span class="woocommerce-Price-amount amount">
						<bdi>
							<span class="woocommerce-Price-currencySymbol">{{item.prices.currency_symbol}}</span>
							{{item.prices.price}}
						</bdi>
					</span>
				</td>

				<td class="product-quantity" data-title="Quantity">
					<div class="quantity">
						<label class="screen-reader-text" for="quantity_60f8a9bb20cc4">
							{{item.name}}
						</label>
						<input type="number" @change="updateToCart(item.key, $event.target.value)" class="input-text qty text" step="1" min="0" :max="item.quantity_limit" :value="item.quantity" title="Qty" size="4" placeholder="" inputmode="numeric">
					</div>
				</td>

				<td class="product-subtotal" data-title="Subtotal">
					<span class="woocommerce-Price-amount amount">
						<bdi><span class="woocommerce-Price-currencySymbol">{{item.totals.currency_symbol}}</span>{{item.totals.line_subtotal}}</bdi></span>
				</td>
			</tr>


			<tr>
				<td colspan="6" class="actions">

					<div class="coupon">
						<label for="coupon_code">Coupon:</label> <input type="text" name="coupon_code" class="input-text" id="coupon_code" value="" placeholder="Coupon code"> <button type="submit" class="button" name="apply_coupon" value="Apply coupon">Apply coupon</button>
					</div>

					<button type="submit" class="button" name="update_cart" value="Update cart" disabled="" aria-disabled="true">Update cart</button>


					<input type="hidden" id="woocommerce-cart-nonce" name="woocommerce-cart-nonce" value="8a542adce2"><input type="hidden" name="_wp_http_referer" value="/cart/">
				</td>
			</tr>

		</tbody>
	</table>
	<p class="cart-empty woocommerce-info" v-else>Your cart is currently empty.</p>
</div>

<?php do_action('woocommerce_after_cart'); ?>
<style>
	[v-cloak] {
		display: block;
		padding: 50px 0;
	}

	@keyframes spinner {
		to {
			transform: rotate(360deg);
		}
	}

	[v-cloak]:before {
		content: "";
		box-sizing: border-box;
		position: absolute;
		top: 50%;
		left: 50%;
		width: 20px;
		height: 20px;
		margin-top: -10px;
		margin-left: -10px;
		border-radius: 50%;
		border: 2px solid #ccc;
		border-top-color: #333;
		animation: spinner 0.6s linear infinite;
		text-indent: 100%;
		white-space: nowrap;
		overflow: hidden;
	}

	[v-cloak]>* {
		display: none;
	}
</style>