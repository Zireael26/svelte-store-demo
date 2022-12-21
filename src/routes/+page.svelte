<script lang="ts">
	import Button from '../lib/ui/Button.svelte';
	import Cart from '../lib/cart/Cart.svelte';
	import Products from '../lib/products/Products.svelte';

	let showCart = false;
</script>

<Button on:click={() => (showCart = !showCart)}>{showCart ? 'Hide Cart' : 'Show Cart'}</Button>
{#if showCart}
	<Cart />
{/if}
<Products />
