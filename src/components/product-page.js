import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchShoesDetailsRequest } from '../actions/action-creators';
import WidgetWrapper from './widget-wrapper';

const characterisricsInTable = [
    { title: 'Артикул', attribute: 'sku' },
    { title: 'Производитель', attribute: 'manufacturer' },
    { title: 'Цвет', attribute: 'color' },
    { title: 'Материалы', attribute: 'material' },
    { title: 'Сезон', attribute: 'season' },
    { title: 'Повод', attribute: 'reason' }
];

const initialSelectedParamsState = {
    amount: 1,
    size: null
}

export default function ProductPage({ match }) {
    const productId = match.params.id;
    const { item: product, loading, error } = useSelector(state => state.shoesDetails);
    let [amount, setAmount] = useState(initialSelectedParamsState.amount);
    let [selectedSize, setSelectedSize] = useState(initialSelectedParamsState.size);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchShoesDetailsRequest(productId));
    }, [dispatch]);

    const characteristics = buildCharacteristicsTable(product);
    const { title, images, sizes } = product;
    const availableSizes = sizes && sizes.filter(({ avalible }) => avalible) || [];
    if (availableSizes.length && !selectedSize) {
        setSelectedSize(availableSizes[0]);
    }

    const increaseAmount = () => setAmount(++amount);
    const decreaseAmount = () => setAmount(--amount);
    const selectSize = (size) => {
        if (size !== selectSize) setSelectedSize(size)
    }

    return (
        <section className="catalog-item">
            <h2 className="text-center">{ title }</h2>
            <WidgetWrapper error={error} loading={loading}>
                <div className="row">
                    { images && images.length &&
                        <div className="col-5">
                            {<img src={images[0]} className="img-fluid" alt={title} />}
                        </div>}
                    <div className="col-7">
                        { characteristics }
                        { availableSizes.length && <>
                            <div className="text-center">
                            <p>Размеры в наличии: { availableSizes.map(({size}) => 
                                    <span key={size} className="catalog-item-size selected" onClick={() => selectSize(size)}>{size}</span>
                                )}
                            </p>
                            <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                    <button className="btn btn-secondary" onClick={decreaseAmount} disabled={amount === 0}>-</button>
                                    <span className="btn btn-outline-primary">{amount}</span>
                                    <button className="btn btn-secondary" onClick={increaseAmount}>+</button>
                                </span>
                            </p>
                        </div>
                        <button className="btn btn-danger btn-block btn-lg" disabled={amount === 0}>В корзину</button>
                        </>}
                    </div>
                </div>
            </WidgetWrapper>
        </section>
    );
}

function buildCharacteristicsTable(product) {
    return <table className="table table-bordered">
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