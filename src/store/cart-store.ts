import type { CartItem } from 'src/schemas/cart-item';
import { writable } from 'svelte/store';

function createCart() {
    // const cart = writable([] as CartItem[]);
    const cart = writable([] as CartItem[], () => {
        // This function is called when the store is first subscribed to
        // console.log('Cart store subscribed to for the first time');

        // This function is called when the store is unsubscribed by the last subscriber
        return () => {
            // console.log('Cart store unsubscribed by the last subscriber');
        };
    });

    return {
        subscribe: cart.subscribe,
        add: (item: CartItem) => {
            cart.update(
                (items) => {
                    const existingItemIndex = items.findIndex((i) => i.id === item.id);
                    if (existingItemIndex !== -1) {
                        items[existingItemIndex].quantity += 1;
                    } else {
                        items.push(item);
                    }
                    return [...items];
                }
            );
        },
        remove: (id: string) => {
            cart.update(
                (items) => {
                    const existingItemIndex = items.findIndex((i) => i.id === id);
                    if (existingItemIndex !== -1) {
                        if (items[existingItemIndex].quantity === 1) {
                            items.splice(existingItemIndex, 1);
                        } else {
                            items[existingItemIndex].quantity -= 1;
                        }
                    }
                    return [...items];
                }
            );
        },
        clear: () => cart.set([]),
    };
}

export default createCart();