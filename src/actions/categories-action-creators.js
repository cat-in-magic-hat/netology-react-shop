import {
    CATEGORIES_REQUEST,
    CATEGORIES_FAILURE,
    CATEGORIES_SUCCESS,
    SET_ACTIVE_CATEGORY,
} from './action-types';

export const categoriesRequest = () => ({
    type: CATEGORIES_REQUEST,
    payload: {},
});

export const categoriesFailure = error => ({
    type: CATEGORIES_FAILURE,
    payload: { error },
});

export const categoriesSuccess = items => ({
    type: CATEGORIES_SUCCESS,
    payload: { items },
});

export const setActiveCategory = id => ({
    type: SET_ACTIVE_CATEGORY,
    payload: { categoryId: id }
})
