import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const ProductCard = ({ product, onAdd }) => {
    return (
        <div
            id={product.id}
            key={product.id}
            className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch"
        >
            <div className="card h-100 shadow-sm border-0 w-100">
                <img
                    className="card-img-top p-3 mx-auto"
                    src={product.image}
                    alt={product.title}
                    style={{
                        height: "220px",
                        width: "auto",
                        objectFit: "contain",
                        maxWidth: "100%",
                    }}
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-truncate" title={product.title}>
                        {product.title.length > 15
                            ? product.title.substring(0, 15) + "..."
                            : product.title}
                    </h5>
                    <p className="card-text text-truncate" title={product.description}>
                        {product.description.length > 90
                            ? product.description.substring(0, 90) + "..."
                            : product.description}
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item lead fw-bold text-center">
                        ${product.price}
                    </li>
                </ul>
                <div className="card-body d-flex justify-content-center gap-2">
                    <Link
                        to={`/product/${product.id}`}
                        className="btn btn-dark flex-fill"
                    >
                        Buy Now
                    </Link>
                    <button
                        className="btn btn-outline-dark flex-fill"
                        onClick={() => {
                            toast.success("Added to cart");
                            onAdd();
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;