import {
    BESTSELLERS_REQUEST,
    BESTSELLERS_FAILURE,
    BESTSELLERS_SUCCESS,
} from './action-types';

export const bestsellersRequest = () => ({
    type: BESTSELLERS_REQUEST,
    payload: {},
});

export const bestsellersFailure = error => ({
    type: BESTSELLERS_FAILURE,
    payload: { error },
});

export const bestsellersSuccess = items => ({
    type: BESTSELLERS_SUCCESS,
    payload: { items },
});
