import { NavLink } from "react-router-dom";
import { getProductUrl } from '../../navigation';

export default function ProductCard({ id, title, images, price }) {
    return (
        <div className="card">
            { images && images.length && <img src={images[0]} className="card-img-top img-fluid" alt={title} /> }
            <div className="card-body">
                <p className="card-text">{title}</p>
                <p className="card-text">{price} руб.</p>
                <NavLink to={getProductUrl(id)} className="btn btn-outline-primary">Заказать</NavLink>
            </div>
        </div>
    )
}