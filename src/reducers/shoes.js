import {
    FETCH_SHOES_REQUEST,
    FETCH_SHOES_FAILURE,
    FETCH_SHOES_SUCCESS,
} from '../actions/action-types';

const initialState = {
    items: [],
    loading: false,
    error: null,
    hasMore: false
};

export default function shoesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SHOES_REQUEST:
            const { append } = action.payload;
            return {
                ...state,
                items: append ? state.items : [],
                loading: true,
                error: null
            };
        case FETCH_SHOES_FAILURE:
            const { error } = action.payload;
            return {
                ...state,
                loading: false,
                hasMore: false,
                error,
            };
        case FETCH_SHOES_SUCCESS:
            const { items, hasMore } = action.payload;
            return {
                ...state,
                items: [...state.items, ...items],
                loading: false,
                error: null,
                hasMore
            };
        default:
            return state;
    }
}
