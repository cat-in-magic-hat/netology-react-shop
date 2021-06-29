import {
    SHOW_POPUP,
    HIDE_POPUP
} from '../actions/action-types';

const initialState = {
    text: null,
    title: null,
    isOpened: false
};

export default function popupReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_POPUP:
            const { text, title } = action.payload;
            return { text, title, isOpened: true };
        case HIDE_POPUP:
            return { isOpened: false };
        default:
            return state;
    }
}
