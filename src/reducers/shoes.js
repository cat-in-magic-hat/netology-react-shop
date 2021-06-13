import {
    SEARCH_SHOES_REQUEST,
    SEARCH_SHOES_FAILURE,
    SEARCH_SHOES_SUCCESS,
} from '../actions/action-types';

const initialState = {
    items: [],
    loading: false,
    error: null,
    hasMore: false
};

export default function shoesReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_SHOES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case SEARCH_SHOES_FAILURE:
            const { error } = action.payload;
            return {
                ...state,
                loading: false,
                hasMore: false,
                error,
            };
        case SEARCH_SHOES_SUCCESS:
            const { items, hasMore, appendToPrevious } = action.payload;
            return {
                ...state,
                items: appendToPrevious ? [...state.items, ...items] : [...items],
                loading: false,
                error: null,
                hasMore
            };
        default:
            return state;
    }
}
