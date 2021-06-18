import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from './action-types';

export const addToCart = (id, title, size, price, amount) => ({
    type: ADD_TO_CART,
    payload: { id, title, size, price, amount },
});

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: { id },
});
