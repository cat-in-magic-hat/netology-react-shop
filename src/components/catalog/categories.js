import { useState, useEffect } from 'react';
import { ProductsService } from '../../services';

export default function Categories() {
    let [categories, setCategories] = useState(null);

    useEffect(() => {        
        ProductsService.getCategories()
            .then(res => setCategories(res))
            .catch(err => {
                console.log(err);
            })
    }, []);
    if (!categories) return null;
    return (
        <ul className="catalog-categories nav justify-content-center">
            <li key="all" className="nav-item">
                <a className="nav-link active" href="#">Все</a>
            </li>
            { categories.map(({ title, id }) =>
                <li key={id} className="nav-item">
                    <a className="nav-link" href="#">{title}</a>
                </li>
            )}
        </ul>
    )
}