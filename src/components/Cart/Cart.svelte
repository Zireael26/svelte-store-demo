<script lang="ts">
	import cartItems from '../../store/cart-store';
	import CartItem from './CartItem.svelte';

	// let items: Array<any>;
	// const unsubscribeCartStore = cartItems.subscribe((its) => {
	// console.log(items);
	// items = its;
	// });

	// onDestroy(() => {
	//   unsubscribeCartStore();
	// });
</script>

<section>
	<h1>Cart</h1>
	<ul>
		{#each $cartItems as cartItem (cartItem.id)}
			<CartItem {cartItem} />
		{:else}
			<p>No items in cart yet!</p>
		{/each}
	</ul>
</section>

<style>
	section {
		width: 30rem;
		max-width: 90%;
		margin: 2rem auto;
		border-bottom: 2px solid #ccc;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
