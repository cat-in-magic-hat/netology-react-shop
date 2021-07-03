import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { pageUrls } from '../navigation';
import { useSelector, useDispatch } from 'react-redux';
import { fetchShoesDetailsRequest } from '../actions/shoes-action-creators';
import { addToCart } from '../actions/cart-action-creators';
import WidgetWrapper from './widget-wrapper';

const characterisricsInTable = [
    { title: 'Артикул', attribute: 'sku' },
    { title: 'Производитель', attribute: 'manufacturer' },
    { title: 'Цвет', attribute: 'color' },
    { title: 'Материалы', attribute: 'material' },
    { title: 'Сезон', attribute: 'season' },
    { title: 'Повод', attribute: 'reason' }
];

const INITIAL_AMOUNT = 1;
const MIN_REQUIRED_AMOUNT = 1;
const MAX_AVAILABLE_AMOUNT = 10;

export default function ProductPage({ match }) {
    const history = useHistory();
    const productId = +match.params.id;
    const { item: product, loading, error } = useSelector(state => state.shoesDetails);
    let [amount, setAmount] = useState(INITIAL_AMOUNT);
    let [selectedSize, setSelectedSize] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchShoesDetailsRequest(productId));
    }, [dispatch, productId]);

    const characteristics = buildCharacteristicsTable(product);
    const { title, images, sizes, price } = product;
    const availableSizes = sizes && sizes.filter(({ avalible }) => avalible) || [];

    const increaseAmount = () => setAmount(++amount);
    const decreaseAmount = () => setAmount(--amount);
    const selectSize = (size) => {
        if (size !== selectSize) setSelectedSize(size)
    }
    const onAddToCart = () => {
        dispatch(addToCart(productId, title, selectedSize, price, amount));
        history.push(pageUrls.cart);
    }
    const isAddToCartButtonActive = amount >= MIN_REQUIRED_AMOUNT && amount <= MAX_AVAILABLE_AMOUNT && selectedSize;

    return (
        <section className="catalog-item">
            <WidgetWrapper error={error} loading={loading}>
                <h2 className="text-center">{ title }</h2>
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
                                    <span key={size} className={getSizeClass(size, selectedSize)} onClick={() => selectSize(size)}>{size}</span>
                                )}
                            </p>
                            <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                    <button className="btn btn-secondary" onClick={decreaseAmount} disabled={amount <= MIN_REQUIRED_AMOUNT}>-</button>
                                    <span className="btn btn-outline-primary">{amount}</span>
                                    <button className="btn btn-secondary" onClick={increaseAmount} disabled={amount >= MAX_AVAILABLE_AMOUNT}>+</button>
                                </span>
                            </p>
                        </div>
                        <button className="btn btn-danger btn-block btn-lg" disabled={!isAddToCartButtonActive} onClick={onAddToCart}>В корзину</button>
                        </>}
                    </div>
                </div>
            </WidgetWrapper>
        </section>
    );
}

function getSizeClass(size, selectedSize) {
    return size === selectedSize
        ? 'catalog-item-size selected'
        : 'catalog-item-size';
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
    return (
        <tr key={attribute}>
            <td>{title}</td>
            <td>{value}</td>
        </tr>
    );
}