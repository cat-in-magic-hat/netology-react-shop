import { NavLink } from 'react-router-dom';

export default function FooterMenu({ items }) {
    if (!items || !items.length) return null;
    return (
        <section>
            <h5>Информация</h5>
            <ul className="nav flex-column">
                { items.map(({path, title}) => 
                    <li key={path} className="nav-item">
                         <NavLink to={path} exact className="nav-link" activeClassName="active">{title}</NavLink>
                    </li>
                )}
            </ul>
        </section>
    );
}