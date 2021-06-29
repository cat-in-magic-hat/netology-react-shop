import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../actions/order-action-creators';

const formCardStyle = {
    'max-width': '30rem',
    'margin': '0 auto'
};
export default function OrderForm() {
    const { loading } = useSelector(state => state.order);
    const dispatch = useDispatch();

    let [form, setForm] = useState({
        'phone': '',
        'address': '',
        'agreement': false,
    });

    const handleInput = ({ target }) => {
        setForm({ ...form, [target.name]: target.value });
    }
    const toggleAgreement = () => {
        setForm({ ...form, agreement: !form.agreement });
    }

    const submit = (e) => {
        e.preventDefault();
        const { phone, address } = form;
        dispatch(createOrder(phone, address));
    }
    const isDisabled = !form.phone || !form.address || !form.agreement || loading;

    return (
    <section className="order">
        <h2 className="text-center">Оформить заказ</h2>
        <div className="card" style={formCardStyle}>
            <form className="card-body">
                <div className="form-group">
                    <label for="phone">Телефон</label>
                    <input className="form-control" name="phone" placeholder="Ваш телефон" 
                        value={form.phone} onInput={handleInput}/>
                </div>
                <div className="form-group">
                    <label for="address">Адрес доставки</label>
                    <input className="form-control" name="address" placeholder="Адрес доставки" 
                        value={form.address} onInput={handleInput}/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" name="agreement" onClick={toggleAgreement}/>
                    <label className="form-check-label" for="agreement">Согласен с правилами доставки</label>
                </div>
                <button type="submit" className="btn btn-outline-secondary" onClick={submit} disabled={isDisabled}>Оформить</button>
            </form>
        </div>
    </section>
    );
}