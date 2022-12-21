<script lang="ts">
	import type { CartItem } from '../../schemas/cart-item';
	import products from '../../store/product-store';
	import cart from '../../store/cart-store';
	
	import Button from '../ui/Button.svelte';

	export let cartItem: CartItem;

	let showDescription = false;
	let description = "Not Avaiable!";

	function displayDescription() {
		const unsubscribe = products.subscribe((items) => {
			const product = items.find((item) => item.id === cartItem.id);
			if (product) {
				description = product.description;
			}
		});
		showDescription = !showDescription;
		unsubscribe();
	}

	function removeFromCart() {
		cart.remove(cartItem.id);
	}
</script>

<li>
	<div class="item-header">
		<h1>{cartItem.title}</h1>
		Quantity: {cartItem.quantity}
	</div>
	<h2>{cartItem.price}</h2>
	<Button mode="outline" on:click={displayDescription}>
		{showDescription ? 'Hide Description' : 'Show Description'}
	</Button>
	<Button on:click={removeFromCart}>{cartItem.quantity > 1 ? 'Reduce Quantity' : 'Remove from Cart'}</Button>
	{#if showDescription}
		<p>{description}</p>
	{/if}
</li>

<style>
	li {
		margin: 1rem 0;
		border-radius: 5px;
		background: white;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		padding: 1rem;
	}

	h1,
	h2 {
		font-size: 1rem;
		margin: 0;
	}

	h2 {
		color: #494949;
		margin-bottom: 1rem;
	}
	.item-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
