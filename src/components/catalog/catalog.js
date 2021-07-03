import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchShoesNextPage } from '../../actions/shoes-action-creators';
import { Error, Loader } from '../shared';
import ProductCard from './product-card';
import { chunk } from '../../utils';

const NO_PRODUCTS_TEXT = 'К сожалению, по Вашему запросу ничего не найдено';
const CARDS_IN_ROW_AMOUNT = 3;

export default function Catalog({ items, loading, error, hasMore }) {
    const dispatch = useDispatch();

    const showLoadMoreButton = !error && !(loading && items.length === 0) && hasMore;
    const noResults = items.length === 0 && !loading;

    useEffect(() => {
        resizeCards();
     }, [items]);

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

function resizeCards() {
    const cardsImages = document.querySelectorAll('.catalog .card img');
    const rows = chunk(cardsImages, CARDS_IN_ROW_AMOUNT);
    rows.forEach(cardsInRow => {
        const maxImgHeight = Math.max(...cardsInRow.map(x => x.clientHeight));
        cardsInRow.forEach(cardImage => {
            const padding = (maxImgHeight - cardImage.clientHeight);
            if (padding) {
                cardImage.style.height = `${cardImage.clientHeight + padding}px`;
                cardImage.style.paddingTop = cardImage.style.paddingBottom = `${padding / 2}px`;
            }
        })
    })
}