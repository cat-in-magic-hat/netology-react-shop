import {
    SHOW_POPUP,
    HIDE_POPUP
} from './action-types';

export const showPopup = ({ text, title }) => ({
    type: SHOW_POPUP,
    payload: { text, title },
});

export const hidePopup = () => ({
    type: HIDE_POPUP,
    payload: {},
});
