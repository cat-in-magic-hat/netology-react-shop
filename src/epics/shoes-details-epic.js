import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { map, retry, switchMap, catchError } from 'rxjs/operators';
import { FETCH_SHOES_DETAILS_REQUEST } from '../actions/action-types';
import { fetchShoesDetailsSuccess, fetchShoesDetailsFailure } from '../actions/action-creators';
import { DEAFULT_RETRY_AMOUNT, PRODUCTS_LIST_URL } from './settings';

export const shoesDetailsEpic = action$ => action$.pipe(
    ofType(FETCH_SHOES_DETAILS_REQUEST),
    map(({ payload: { id }}) => id),
    switchMap(id => ajax.getJSON(`${PRODUCTS_LIST_URL}/${id}`).pipe(
        retry(DEAFULT_RETRY_AMOUNT),
        map(product => fetchShoesDetailsSuccess(product)),
        catchError(err => of(fetchShoesDetailsFailure(err))),
    )),
);