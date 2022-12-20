import type { Product } from 'src/schemas/product';
import { writable } from 'svelte/store';

const items: Array<Product> = [
	{
		id: 'p1',
		title: 'Gaming Mouse',
		price: 29.99,
		description: 'A large mouse with a high DPI sensor'
	},
	{
		id: 'p2',
		title: 'Harry Potter 3',
		price: 9.99,
		description: 'Harry Potter and the Prisoner of Azkaban'
	},
	{
		id: 'p3',
		title: 'Used plastic bottle',
		price: 0.99,
		description: 'Got this for free'
	},
	{
		id: 'p4',
		title: 'Half-dried plant',
		price: 2.99,
		description: "Don't ask"
	}
];
const products = writable(items);

export default products;
