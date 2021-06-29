import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputMask from 'react-input-mask';
import { createOrder } from '../../actions/order-action-creators';
import { Loader } from '../shared';

const phoneMask = "(999) 999-99-99";
const isPhoneValid = (phone) => /^\(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phone);

const formCardStyle = {
    maxWidth: '30rem',
    margin: '0 auto'
};
export default function OrderForm() {
    const { loading } = useSelector(state => state.order);
    const dispatch = useDispatch();

    let [form, setForm] = useState({
        'phone': '',
        'address': '',
        'agreement': false,
    });

    const handleChange = ({ target }) => {
        setForm({ ...form, [target.name]: target.value });
    }
    const toggleAgreement = () => {
        setForm({ ...form, agreement: !form.agreement });
    }

    const submit = (e) => {
        e.preventDefault();
        const { phone, address } = form;
        dispatch(createOrder(`+7${phone.replace(/[^\d]/gi, '')}`, address));
    }
    const isDisabled = loading || !form.address || !form.agreement || !isPhoneValid(form.phone);

    return (
    <section className="order">
        <h2 className="text-center">Оформить заказ</h2>
        {loading && <Loader />}
        <div className="card" style={formCardStyle}>
            <form className="card-body">
                <div className="form-group">
                    <label htmlFor="phone">Телефон</label>
                    <InputMask className="form-control" name="phone" placeholder="Ваш телефон" 
                        value={form.phone} onChange={handleChange} disabled={loading} mask={phoneMask}></InputMask>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Адрес доставки</label>
                    <input className="form-control" name="address" placeholder="Адрес доставки" 
                        value={form.address} onInput={handleChange} disabled={loading}/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" name="agreement"
                        onClick={toggleAgreement} disabled={loading}/>
                    <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                </div>
                <button type="submit" className="btn btn-outline-secondary" onClick={submit} disabled={isDisabled}>Оформить</button>
            </form>
        </div>
    </section>
    );
}