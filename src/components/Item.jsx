import { Link } from 'react-router-dom';

function Item({ id, title, price, image, description }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text fw-bold">${price}</p>
                    <Link to={`/item/${id}`} className="btn btn-primary">Ver más</Link>
                </div>
            </div>
        </div>
    );
}

export default Item;
