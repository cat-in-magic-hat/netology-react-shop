import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_FAILED,
    CREATE_ORDER_SUCCESS
} from '../actions/action-types';

const initialState = {
    result: null,
    loading: false,
    error: null
};

export default function orderReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return { ...state, error: null, loading: true };
        case CREATE_ORDER_FAILED:
            const { error } = action.payload;
            return { ...state, error, loading: false };
        case CREATE_ORDER_SUCCESS:
            const { result } = action.payload;
            return { loading: false, error: null, result };
        default:
            return state;
    }
}
