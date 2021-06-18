import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchShoesNextPage } from '../../actions/shoes-action-creators';
import { Error, Loader } from '../shared';
import ProductCard from './product-card';

const NO_PRODUCTS_TEXT = 'К сожалению, по Вашему запросу ничего не найдено';

export default function Catalog({ items, loading, error, hasMore }) {
    const dispatch = useDispatch();

    const showLoadMoreButton = !error && !(loading && items.length === 0) && hasMore;
    const noResults = items.length === 0 && !loading;

    const loadNext = e => {
        e.preventDefault();
        dispatch(fetchShoesNextPage());
    }
    if (error) {
        return <Error error={error} />
    }
    return (
        <>
            <div className="row">
                {items.map(item =>
                    <div key={item.id} className="col-4"><ProductCard {...item} /></div>
                )}
                {noResults && <div className="col-12">{NO_PRODUCTS_TEXT}</div>}
            </div>
            {loading && <Loader />}
            {showLoadMoreButton &&
                <div className="text-center">
                    <button className="btn btn-outline-primary" disabled={loading} onClick={loadNext}>Загрузить ещё</button>
                </div>
            }
        </>
    );
}