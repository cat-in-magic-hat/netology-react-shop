import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { categoriesRequest, setActiveCategory } from '../../actions/categories-action-creators';

export default function Categories() {
    const { items: categories, loading, error, selected } = useSelector(state => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {        
        dispatch(categoriesRequest());
    }, [dispatch]);

    const selectCategory = (e, id) => {
        e.preventDefault();
        dispatch(setActiveCategory(id));
    }

    if (!categories || loading || error) return null;
    return (
        <ul className="catalog-categories nav justify-content-center">
            { categories.map(({ title, id }) =>
                <li key={id} className="nav-item">
                    <a className={getClassList(id, selected)}
                        href="#"
                        onClick={(e) => selectCategory(e, id)}>{title}</a>
                </li>
            )}
        </ul>
    )
}

function getClassList(id, selectedCategoryId) {
    return id === selectedCategoryId
        ? 'nav-link active'
        : 'nav-link';
}