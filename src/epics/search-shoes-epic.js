import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { ofType } from 'redux-observable';
import { map, retry, switchMap, catchError, distinctUntilChanged, pairwise, startWith } from 'rxjs/operators';
import { fetchShoesRequest, fetchShoesSuccess, fetchShoesFailure } from '../actions/shoes-action-creators';
import { FETCH_SHOES_REQUEST } from '../actions/action-types';
import { DEAFULT_RETRY_AMOUNT, PRODUCTS_LIST_URL } from './settings';
import { ALL_CATEGORIES_ID, DEFAULT_SHOES_PER_PAGE_AMOUNT } from '../constants';

const buildSearchParams = (page, search, category) => {
    const params = new URLSearchParams();
    if (page) params.append('offset', page * DEFAULT_SHOES_PER_PAGE_AMOUNT);
    if (search) params.append('q', search.toLowerCase());
    if (category && category !== ALL_CATEGORIES_ID) params.append('categoryId', category);
    return params;
};

const checkIfHasMore = items => {
    return items && items.length === DEFAULT_SHOES_PER_PAGE_AMOUNT;
};

const shouldAppendNewResultsToPrevious = (prev, current) => {
    return prev && current &&
        prev.search === current.search &&
        prev.categoryId === current.categoryId &&
        prev.page !== current.page;
};

export const searchChangedEpic = (action$, state$) => state$.pipe(
    map(({ shoesQuery }) => shoesQuery),
    distinctUntilChanged(),
    startWith({}),
    pairwise(),
    map(([prev, current]) => {
        const { page, search, categoryId } = current;
        return fetchShoesRequest({
            append: shouldAppendNewResultsToPrevious(prev, current),
            query: buildSearchParams(page, search, categoryId)
        })
    })
);

export const searchShoesEpic = action$ => action$.pipe(
    ofType(FETCH_SHOES_REQUEST),
    switchMap(({ payload: { append, query } }) => ajax.getJSON(`${PRODUCTS_LIST_URL}?${query}`).pipe(
        retry(DEAFULT_RETRY_AMOUNT),
        map(items => fetchShoesSuccess({ items, appendToPrevious: append, hasMore: checkIfHasMore(items) })),
        catchError(e => of(fetchShoesFailure(e))),
    )),
);
