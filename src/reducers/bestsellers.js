import {
    BESTSELLERS_REQUEST,
    BESTSELLERS_FAILURE,
    BESTSELLERS_SUCCESS,
} from '../actions/action-types';

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function bestsellersReducer(state = initialState, action) {
    switch (action.type) {
        case BESTSELLERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case BESTSELLERS_FAILURE:
            const { error } = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };
        case BESTSELLERS_SUCCESS:
            const { items } = action.payload;
            return {
                ...state,
                items,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
}
