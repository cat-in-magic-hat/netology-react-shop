import { useDispatch } from 'react-redux';
import { setActiveCategory } from '../../actions/categories-action-creators';

export default function Categories({ items, loading, error, selected }) {
    const dispatch = useDispatch();

    const selectCategory = (e, id) => {
        e.preventDefault();
        dispatch(setActiveCategory(id));
    }

    if (!items || loading || error) return null;
    return (
        <ul className="catalog-categories nav justify-content-center">
            { items.map(({ title, id }) =>
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