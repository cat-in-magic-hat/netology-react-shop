import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchShoesAccordingToSearch } from '../actions/shoes-action-creators';
import { categoriesRequest } from '../actions/categories-action-creators';
import { Catalog, Bestsellers, Categories } from './catalog';

export default function MainPage() {
    const shoes = useSelector(state => state.shoes);
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categoriesRequest());
        dispatch(fetchShoesAccordingToSearch(null));
    }, [dispatch]);
    
    return (
        <>
            <Bestsellers/>
            <section className="catalog">
                <h2 className="text-center">Каталог</h2>
                <Categories {...categories} />
                <Catalog {...shoes} />
            </section>
        </>
    );
}