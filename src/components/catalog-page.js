import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchForm, fetchShoesAccordingToSearch } from '../actions/shoes-action-creators';
import { categoriesRequest } from '../actions/categories-action-creators';
import { Catalog, Categories } from './catalog';

export default function CatalogPage() {
    const shoes = useSelector(state => state.shoes);
    const categories = useSelector(state => state.categories);
    const { text: searchText } = useSelector(state => state.searchForm);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categoriesRequest());
        dispatch(fetchShoesAccordingToSearch(searchText));
    }, [dispatch]);
    
    const handleSearch = e => {
        e.preventDefault();
        dispatch(changeSearchForm(e.target.value));
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(fetchShoesAccordingToSearch(searchText));
    }

    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>

            <form className="catalog-search-form form-inline" onSubmit={handleSubmit}>
                <input className="form-control" placeholder="Поиск" value={searchText} onInput={handleSearch} />
            </form>
            <Categories {...categories}/>
            <Catalog {...shoes}/>
        </section>
    );
}