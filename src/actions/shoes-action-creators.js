import {
  CHANGE_SEARCH_FIELD,
  FETCH_SHOES_REQUEST,
  FETCH_SHOES_FAILURE,
  FETCH_SHOES_SUCCESS,
  FETCH_SHOES_DETAILS_REQUEST,
  FETCH_SHOES_DETAILS_FAILURE,
  FETCH_SHOES_DETAILS_SUCCESS,
  SHOES_QUERY_LOAD_NEXT_PAGE,
  SHOES_QUERY_APPLY_SEARCH_FILTER,
  SHOES_QUERY_APPLY_CATEGORY,
} from './action-types';

export const fetchShoesRequest = ({ append, query }) => ({
  type: FETCH_SHOES_REQUEST,
  payload: { append, query },
});

export const fetchShoesFailure = error => ({
  type: FETCH_SHOES_FAILURE,
  payload: { error },
});

export const fetchShoesSuccess = ({ items, hasMore }) => ({
  type: FETCH_SHOES_SUCCESS,
  payload: { items, hasMore },
});

export const fetchShoesNextPage = () => ({
  type: SHOES_QUERY_LOAD_NEXT_PAGE,
  payload: {}
});

export const fetchShoesForCategory = categoryId => ({
  type: SHOES_QUERY_APPLY_CATEGORY,
  payload: { categoryId }
});

export const fetchShoesAccordingToSearch = search => ({
  type: SHOES_QUERY_APPLY_SEARCH_FILTER,
  payload: { search }
});

export const changeSearchForm = search => ({
  type: CHANGE_SEARCH_FIELD,
  payload: { search },
});

export const fetchShoesDetailsRequest = id => ({
  type: FETCH_SHOES_DETAILS_REQUEST,
  payload: { id },
});

export const fetchShoesDetailsFailure = error => ({
  type: FETCH_SHOES_DETAILS_FAILURE,
  payload: { error },
});

export const fetchShoesDetailsSuccess = product => ({
  type: FETCH_SHOES_DETAILS_SUCCESS,
  payload: { product },
});