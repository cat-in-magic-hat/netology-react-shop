import {
  CHANGE_SEARCH_FIELD,
  SEARCH_SHOES_REQUEST,
  SEARCH_SHOES_FAILURE,
  SEARCH_SHOES_SUCCESS,
  FETCH_SHOES_DETAILS_REQUEST,
  FETCH_SHOES_DETAILS_FAILURE,
  FETCH_SHOES_DETAILS_SUCCESS,
  SHOES_QUERY_LOAD_NEXT_PAGE,
  SHOES_QUERY_APPLY_SEARCH_FILTER,
  SHOES_QUERY_APPLY_CATEGORY,
  SHOES_QUERY_RESET,
} from './action-types';

export const searchShoesRequest = ({ offset, search, categoryId } = {}) => ({
  type: SEARCH_SHOES_REQUEST,
  payload: { offset, search, categoryId },
});

export const searchShoesFailure = error => ({
  type: SEARCH_SHOES_FAILURE,
  payload: { error },
});

export const searchShoesSuccess = ({ items, hasMore, appendToPrevious }) => ({
  type: SEARCH_SHOES_SUCCESS,
  payload: { items, hasMore, appendToPrevious },
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

export const resetShoesQuery = () => ({
  type: SHOES_QUERY_RESET,
  payload: {}
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