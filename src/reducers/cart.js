import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
} from '../actions/action-types';

const LOCAL_STORAGE_KEY = 'bosa-noga-cart';
function Cart(items) {
    this.items = items || [];
    this.getTotal = () => {
        return this.items.reduce((acc, { amount, price }) => acc + amount * price, 0);
    };
}

const saveToLocalStorage = items => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
}

const loadFromLocalStorage = () => {
    const stored = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

const initialState = new Cart(loadFromLocalStorage());

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const { id, title, size, amount, price } = action.payload;
            const existingItem = state.items.find(({ id: existingId, size: existingSize }) => id === existingId && size === existingSize);
            const updatedItems = !existingItem
                ? [...state.items, { id, title, size, amount, price }]
                : [...state.items.filter(x => x !== existingItem), { 
                    id,
                    title,
                    size,
                    amount: amount + existingItem.amount,
                    price: price + existingItem.price }
                ];
            saveToLocalStorage(updatedItems);            
            return new Cart(updatedItems);
        case REMOVE_FROM_CART:
            const { id: productForRemoving } = action.payload;
            const items = state.items.filter(({ id }) => id !== productForRemoving);
            saveToLocalStorage(items);
            return new Cart(items);
        default:
            return state;
    }
}
