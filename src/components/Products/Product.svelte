<script lang="ts">
	import type { CartItem } from '../../schemas/cartItem';
	import type { Product } from '../../schemas/product';

	import cartItems from '../../store/cart-store';
	import Button from '../UI/Button.svelte';

	export let product: Product;

	function addToCart() {
		const newCartItem: CartItem = {
			id: product.id,
			title: product.title,
			price: product.price,
			quantity: 1
		} as CartItem;

		const existingCartItemIndex = $cartItems.findIndex((item) => item.id === newCartItem.id);
		if (existingCartItemIndex !== -1) {
			$cartItems[existingCartItemIndex].quantity++;
		} else {
			cartItems.update((items) => {
				return [...items, newCartItem];
			});
		}
	}
</script>

<div class="product">
	<div>
		<h1>{product.title}</h1>
		<h2>{product.price}</h2>
		<p>{product.description}</p>
	</div>
	<div>
		<Button on:click={addToCart}>Add to Cart</Button>
	</div>
</div>

<style>
	.product {
		background: white;
		border-radius: 5px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		margin: 1rem 0;
	}

	h1 {
		font-size: 1.25rem;
		font-family: 'Roboto Slab', serif;
		margin: 0;
	}

	h2 {
		font-size: 1rem;
		margin: 0;
		color: #494949;
	}

	p {
		margin: 0;
	}
</style>
