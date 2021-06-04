import { NavLink } from 'react-router-dom';

export default function Menu({ items }) {
    if (!items || !items.length) return null;
    return (
        <ul className="navbar-nav mr-auto">
            { items.map(({path, title}) => 
                <li key={path} className="nav-item">
                    <NavLink to={path} exact className="nav-link" activeClassName="active">{title}</NavLink>
                </li>
            )}
        </ul>
    );
}