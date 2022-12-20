<script lang="ts">
	import Button from '../components/ui/Button.svelte';
	import Cart from '../components/cart/Cart.svelte';
	import Products from '../components/products/Products.svelte';

	let showCart = false;
</script>

<Button on:click={() => (showCart = !showCart)}>{showCart ? 'Hide Cart' : 'Show Cart'}</Button>
{#if showCart}
	<Cart />
{/if}
<Products />
