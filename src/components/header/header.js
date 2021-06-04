import { NavLink } from 'react-router-dom';
import Menu from '../menu';
import SearchForm from './search-form';
import CartIcon from './cart-icon';

export default function Header({ menuItems }) {
    return (
        <header className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <NavLink className="navbar-brand" to="/" exact>
                            <img src="/img/header-logo.png" alt="Bosa Noga"/>
                        </NavLink>

                        <div className="collapase navbar-collapse" id="navbarMain">
                            <Menu items={menuItems}/>
                            <div>
                                <SearchForm />
                                <div className="header-controls-pics">
                                    <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                                    <CartIcon/>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}