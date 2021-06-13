import { NavLink } from 'react-router-dom';
import { getProductUrl } from '../navigation';
import { cart } from '../data/fake';

const CART_EMPTY_TEXT = 'Ваша корзина пуста';
const tableHeader = getTableHeader();

export default function CartPage() {
    const { items, total } = cart;
    return (
        <section className="cart">
            <h2 className="text-center">Корзина</h2>
            { !items && <div>{CART_EMPTY_TEXT}</div>}
            { items && 
                <table className="table table-bordered">
                    { tableHeader }
                    <tbody>
                        { items.map(({id, price, size, amount, title}, index) => 
                            <tr key={id}>
                                <th scope="row">{index + 1}</th>
                                <td><NavLink to={getProductUrl(id)}>{title}</NavLink></td>
                                <td>{size}</td>
                                <td>{amount}</td>
                                <td>{price} руб.</td>
                                <td>{price * amount} руб.</td>
                                <td><button className="btn btn-outline-danger btn-sm">Удалить</button></td>
                            </tr>
                            )}
                        <tr>
                            <td colSpan="5" className="text-right">Общая стоимость</td>
                            <td>{ total } руб.</td>
                        </tr>
                    </tbody>
                </table>
            }
        </section>
    );
}

function getTableHeader() {
    return (<thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Название</th>
            <th scope="col">Размер</th>
            <th scope="col">Кол-во</th>
            <th scope="col">Стоимость</th>
            <th scope="col">Итого</th>
            <th scope="col">Действия</th>
        </tr>
    </thead>);
}