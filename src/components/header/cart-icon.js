import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { pageUrls } from '../../navigation';

export default function CartIcon() {
    const { items } = useSelector(state => state.cart);
    const productPositionsAmount = items && items.length;
    return (
        <NavLink to={pageUrls.cart}>
            <div className="header-controls-pic header-controls-cart">
                {productPositionsAmount > 0 && <div className="header-controls-cart-full">{productPositionsAmount}</div>}
                <div className="header-controls-cart-menu"></div>
            </div>
        </NavLink>
    );
}