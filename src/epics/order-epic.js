import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import { CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from '../actions/action-types';
import { orderFailed, orderSuccess } from '../actions/order-action-creators';
import { clearCart } from '../actions/cart-action-creators';
import { ORDER_URL } from './settings';

const orderRequestHeaders = {
    'Content-Type': 'application/json'
};

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