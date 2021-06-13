import { CHANGE_SEARCH_FIELD } from '../actions/action-types';

const initialState = {
    text: ''
};

export default function searchFormReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            const { search } = action.payload;
            return {
                ...state,
                text: search
            };
        default:
            return state;
    }
}
