import { useState, useEffect } from 'react';
import { ProductsService } from '../../services';
import ProductCard from './product-card';

export default function Bestsellers() {
    let [topSales, setTopSales] = useState(null);

    useEffect(() => {
        ProductsService.getBestsellers()
            .then(res => setTopSales(res))
            .catch(err => {
                console.log(err);
            })
    }, []);

    if (!topSales) return null;
    return (
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>

            <div className="row">
                { topSales.map(item => 
                    <div key={item.id} className="col-4"><ProductCard {...item}/></div>
                )}
            </div>
        </section>
    );
}