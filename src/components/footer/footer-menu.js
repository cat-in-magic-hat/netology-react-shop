import { NavLink } from 'react-router-dom';
import { footerMenuItems } from '../../navigation';

export default function FooterMenu() {
    return (
        <section>
            <h5>Информация</h5>
            <ul className="nav flex-column">
                { footerMenuItems.map(({path, title}) => 
                    <li key={path} className="nav-item">
                         <NavLink to={path} exact className="nav-link" activeClassName="active">{title}</NavLink>
                    </li>
                )}
            </ul>
        </section>
    );
}