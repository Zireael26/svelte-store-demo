<script lang="ts">
	import products from '../../store/product-store';
	import Product from '../Products/Product.svelte';
</script>

<section>
	<h1>Products</h1>
	{#each $products as product (product.id)}
		<Product {product} />
	{/each}
</section>

<style>
	section {
		width: 30rem;
		max-width: 90%;
		margin: 2rem auto;
	}
</style>
