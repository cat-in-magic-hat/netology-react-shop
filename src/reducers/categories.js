import {
    CATEGORIES_REQUEST,
    CATEGORIES_FAILURE,
    CATEGORIES_SUCCESS,
    SET_ACTIVE_CATEGORY
} from '../actions/action-types';
import { ALL_CATEGORIES_ID } from '../constants';

const ALL_CATEGORIES = {
    id: ALL_CATEGORIES_ID,
    title: 'Все'
}

const initialState = {
    items: [],
    loading: false,
    error: null,
    selected: ALL_CATEGORIES.id
};

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case CATEGORIES_FAILURE:
            const { error } = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };
        case CATEGORIES_SUCCESS:
            const { items } = action.payload;
            return {
                ...state,
                items: [ALL_CATEGORIES, ...items],
                loading: false,
                error: null,
            };
        case SET_ACTIVE_CATEGORY:
            const { categoryId } = action.payload;
            return {
                ...state,
                selected: categoryId
            };
        default:
            return state;
    }
}
