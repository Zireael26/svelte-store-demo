import type { CartItem } from 'src/schemas/cart-item';
import { writable } from 'svelte/store';

const items: CartItem[] = [];
const cart = writable(items);

export default cart;
