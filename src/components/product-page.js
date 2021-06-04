import { useState, useEffect } from 'react';
import { ProductsService } from '../services';

const characterisricsInTable = [
    { title: 'Артикул', attribute: 'sku' },
    { title: 'Производитель', attribute: 'manufacturer' },
    { title: 'Цвет', attribute: 'color' },
    { title: 'Материалы', attribute: 'material' },
    { title: 'Сезон', attribute: 'season' },
    { title: 'Повод', attribute: 'reason' }
];

export default function ProductPage({ match }) {
    const productId = +match.params.id;
    let [product, setProduct] = useState(null);

    useEffect(() => {
        ProductsService.getProductById(productId)
            .then(res => setProduct(res))
            .catch(err => {
                console.log(err);
            })
    }, [productId]);

    if (!product) return null;
    const characteristics = buildCharacteristicsTable(product);
    const { title, images } = product;
    return (
        <section className="catalog-item">
            <h2 className="text-center">{ title }</h2>
            <div className="row">
                <div className="col-5">
                    { images && images.length && <img src={images[0]} className="img-fluid" alt={title} /> }
                </div>
                <div className="col-7">
                    { characteristics }
                    <div className="text-center">
                        <p>Размеры в наличии: <span className="catalog-item-size selected">18 US</span> <span className="catalog-item-size">20 US</span></p>
                        <p>Количество: <span className="btn-group btn-group-sm pl-2">
                            <button className="btn btn-secondary">-</button>
                            <span className="btn btn-outline-primary">1</span>
                            <button className="btn btn-secondary">+</button>
                        </span>
                        </p>
                    </div>
                    <button className="btn btn-danger btn-block btn-lg">В корзину</button>
                </div>
            </div>
        </section>
    );
}

function buildCharacteristicsTable(product) {
    return <table class="table table-bordered">
        <tbody>
            { characterisricsInTable.map(({ title, attribute }) => 
                renderRow(title, product[attribute], attribute)
            )}
        </tbody>
    </table>
}

function renderRow(title, value, attribute) {
    return (value != null && 
        <tr key={attribute}>
            <td>{title}</td>
            <td>{value}</td>
        </tr>
    );
}