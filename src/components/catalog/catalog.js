import ProductCard from './product-card';
import { useState, useEffect } from 'react';
import { ProductsService } from '../../services';

export default function Catalog() {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        ProductsService.getProducts()
            .then(res => setProducts(res))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="row">
            {products.map(item =>
                <div key={item.id} className="col-4"><ProductCard {...item} /></div>
            )}
        </div>
    );
}