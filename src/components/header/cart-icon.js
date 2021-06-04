import { NavLink } from "react-router-dom";
import { pageUrls } from '../../navigation';

export default function CartIcon({ productsInCartAmount }) {
    return (
        <NavLink to={pageUrls.cart}>
            <div className="header-controls-pic header-controls-cart">
                {productsInCartAmount && <div className="header-controls-cart-full">{productsInCartAmount}</div>}
                <div className="header-controls-cart-menu"></div>
            </div>
        </NavLink>
    );
}