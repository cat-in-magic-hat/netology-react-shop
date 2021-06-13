import {
    FETCH_SHOES_DETAILS_REQUEST,
    FETCH_SHOES_DETAILS_FAILURE,
    FETCH_SHOES_DETAILS_SUCCESS,
} from '../actions/action-types';

const initialState = {
    item: {},
    loading: false,
    error: null,
};

export default function shoesDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SHOES_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_SHOES_DETAILS_SUCCESS:
            const { product } = action.payload;
            return {
                item: { ...product },
                loading: false,
                error: null
            };
        case FETCH_SHOES_DETAILS_FAILURE:
            const { error } = action.payload;
            return {
                ...state,
                loading: false,
                error
            };
        default:
            return state;
    }
}
