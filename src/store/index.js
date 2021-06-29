import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import {
  shoesReducer,
  bestsellersReducer,
  cartReducer,
  categoriesReducer,
  orderReducer,
  shoesDetailsReducer,
  shoesQueryReducer,
  searchFormReducer
} from '../reducers';
import {
  bestsellersEpic,
  categoriesEpic,
  applyCategoryForSearchEpic,
  orderEpic,
  clearCartEpic,
  searchShoesEpic,
  searchChangedEpic,
  shoesDetailsEpic
} from '../epics';

const reducer = combineReducers({
  shoes: shoesReducer,
  bestsellers: bestsellersReducer,
  cart: cartReducer,
  order: orderReducer,
  categories: categoriesReducer,
  shoesDetails: shoesDetailsReducer,
  shoesQuery: shoesQueryReducer,
  searchForm: searchFormReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
  bestsellersEpic,
  categoriesEpic,
  applyCategoryForSearchEpic,
  orderEpic,
  clearCartEpic,
  searchShoesEpic,
  searchChangedEpic,
  shoesDetailsEpic
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;
