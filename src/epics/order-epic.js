import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { map, filter, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import { CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILED } from '../actions/action-types';
import { orderFailed, orderSuccess } from '../actions/order-action-creators';
import { clearCart } from '../actions/cart-action-creators';
import { showPopup } from '../actions/popup-action-creators';
import { ORDER_URL } from './settings';

const orderRequestHeaders = {
    'Content-Type': 'application/json'
};

const actionsTriggeredPopup = [
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAILED
];

const successPopupSettings = {    
    title: 'Спасибо!',
    text: 'Ваша заявка отправлена. Оператор свяжется с Вами по телефону'
};

const errorPopupSettings = {
    title: 'Ошибка!',
    text: 'Возникла непредведенная ошибка. Попробуйте повторить запрос позже.'
}

const getPopupSettingsByType = (type) => {
    switch (type) {
        case CREATE_ORDER_SUCCESS: return successPopupSettings;
        case CREATE_ORDER_FAILED: return errorPopupSettings;
        default: return null;
    }
}

export const orderEpic = (action$, state$) => action$.pipe(
    ofType(CREATE_ORDER_REQUEST),
    map(({ payload }) => payload),
    withLatestFrom(state$.pipe(map(x => x.cart))),
    map(([{ phone, address }, { items }]) => ({
        owner: { phone, address },
        items: items.map(({ id, price, amount }) => ({ id, price, count: amount }))
    })),
    switchMap(requestBody => ajax.post(ORDER_URL, requestBody, orderRequestHeaders).pipe(
        map(result => orderSuccess(result)),
        catchError(err => of(orderFailed(err))),
    )),
);

export const clearCartEpic = action$ => action$.pipe(
    ofType(CREATE_ORDER_SUCCESS),
    map(() => clearCart())
);

export const showPopupEpic = action$ => action$.pipe(
    filter(({ type }) => actionsTriggeredPopup.includes(type)),
    map(({ type }) => getPopupSettingsByType(type)),
    filter(x => !!x),
    map(showPopup)
);