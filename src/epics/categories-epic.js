import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { ofType } from 'redux-observable';
import { map, retry, switchMap, distinctUntilChanged, catchError } from 'rxjs/operators';
import { CATEGORIES_REQUEST, SET_ACTIVE_CATEGORY } from '../actions/action-types';
import { categoriesSuccess, categoriesFailure } from '../actions/categories-action-creators';
import { fetchShoesForCategory } from '../actions/shoes-action-creators';
import { DEAFULT_RETRY_AMOUNT, CATEGORIES_URL } from './settings';

export const categoriesEpic = action$ => action$.pipe(
    ofType(CATEGORIES_REQUEST),
    switchMap(() => ajax.getJSON(CATEGORIES_URL).pipe(
        retry(DEAFULT_RETRY_AMOUNT),
        map(items => categoriesSuccess(items)),
        catchError(err => of(categoriesFailure(err))),
    )),
);

export const applyCategoryForSearchEpic = action$ => action$.pipe(
    ofType(SET_ACTIVE_CATEGORY),
    map(({ payload }) => payload.categoryId),
    distinctUntilChanged(),
    map(categoryId => fetchShoesForCategory(categoryId))
)