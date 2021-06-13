import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { map, retry, switchMap, catchError } from 'rxjs/operators';
import { BESTSELLERS_REQUEST } from '../actions/action-types';
import { bestsellersSuccess, bestsellersFailure } from '../actions/bestsellers-action-creators';
import { DEAFULT_RETRY_AMOUNT, TOPSALES_URL } from './settings';

export const bestsellersEpic = action$ => action$.pipe(
    ofType(BESTSELLERS_REQUEST),
    switchMap(() => ajax.getJSON(TOPSALES_URL).pipe(
        retry(DEAFULT_RETRY_AMOUNT),
        map(items => bestsellersSuccess(items)),
        catchError(err => of(bestsellersFailure(err))),
    )),
);