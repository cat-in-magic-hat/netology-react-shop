import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetShoesQuery, fetchShoesNextPage } from '../../actions/action-creators';
import WidgetWrapper from '../widget-wrapper';
import ProductCard from './product-card';

const NO_PRODUCTS_TEXT = 'К сожалению, по Вашему запросу ничего не найдено';

export default function Catalog() {
    const { items: products, loading, error, hasMore } = useSelector(state => state.shoes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetShoesQuery());
    }, [dispatch]);

    const showLoadMoreButton = !error && hasMore;
    const hasResults = products.length > 0;

    const loadNext = (e) => {
        e.preventDefault();
        dispatch(fetchShoesNextPage());
    }
    return (
        <WidgetWrapper error={error} loading={loading}>
            <div className="row">
                {hasResults && products.map(item =>
                    <div key={item.id} className="col-4"><ProductCard {...item} /></div>
                )}
                {!hasResults && <div className="col-12">{NO_PRODUCTS_TEXT}</div>}
            </div>
            { showLoadMoreButton &&
                <div className="text-center">
                    <button className="btn btn-outline-primary" disabled={loading} onClick={loadNext}>Загрузить ещё</button>
                </div> 
            }
        </WidgetWrapper>
    );
}