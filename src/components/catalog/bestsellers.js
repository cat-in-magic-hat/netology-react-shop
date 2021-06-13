import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bestsellersRequest } from '../../actions/bestsellers-action-creators';
import ProductCard from './product-card';
import WidgetWrapper from '../widget-wrapper';

export default function Bestsellers() {
    const { items: topSales, loading, error } = useSelector(state => state.bestsellers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(bestsellersRequest());
    }, [dispatch]);

    if (!topSales) return null;
    return (
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <div className="row">
                <WidgetWrapper error={error} loading={loading}>
                    {topSales.map(item =>
                        <div key={item.id} className="col-4"><ProductCard {...item} /></div>
                    )}
                </WidgetWrapper>
            </div>
        </section>
    );
}