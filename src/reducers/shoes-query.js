import {
    SHOES_QUERY_APPLY_CATEGORY,
    SHOES_QUERY_APPLY_SEARCH_FILTER,
    SHOES_QUERY_LOAD_NEXT_PAGE
} from '../actions/action-types';

const initialState = {
    search: '',
    categoryId: null,
    page: 0
};

export default function shoesQueryReducer(state = initialState, action) {
    switch (action.type) {
        case SHOES_QUERY_APPLY_CATEGORY:
            const { categoryId } = action.payload;
            return {
                ...state,
                categoryId,
                page: 0
            };
        case SHOES_QUERY_APPLY_SEARCH_FILTER:
            const { search } = action.payload;
            return {
                ...state,
                search,
                page: 0
            };
        case SHOES_QUERY_LOAD_NEXT_PAGE:
            const { page } = state;
            return {
                ...state,
                page: page + 1
            };
        default:
            return state;
    }
}
