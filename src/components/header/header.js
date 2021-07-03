import { NavLink } from 'react-router-dom';
import Menu from '../menu';
import HeaderControls from './header-controls';
import { headerMenuItems } from '../../navigation';

export default function Header() {
    return (
        <header className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <NavLink className="navbar-brand" to="/" exact>
                            <img src="/img/header-logo.png" alt="Bosa Noga"/>
                        </NavLink>

                        <div className="collapase navbar-collapse" id="navbarMain">
                            <Menu items={headerMenuItems}/>
                            <HeaderControls/>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}