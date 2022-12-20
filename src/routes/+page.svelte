<script lang="ts">
	import Button from '../components/UI/Button.svelte';
	import Cart from '../components/Cart/Cart.svelte';
	import Products from '../components/Products/Products.svelte';

	let showCart = false;
</script>

<Button on:click={() => (showCart = !showCart)}>{showCart ? 'Hide Cart' : 'Show Cart'}</Button>
{#if showCart}
	<Cart />
{/if}
<Products />
