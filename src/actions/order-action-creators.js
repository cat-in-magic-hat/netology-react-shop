import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAILED
} from './action-types';

export const createOrder = (phone, address) => ({
    type: CREATE_ORDER_REQUEST,
    payload: { phone, address },
});

export const orderSuccess = (result) => ({
    type: CREATE_ORDER_SUCCESS,
    payload: { result },
});

export const orderFailed = (error) => ({
    type: CREATE_ORDER_FAILED,
    payload: { error },
});