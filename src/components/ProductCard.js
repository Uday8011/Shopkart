function ProductCard({ title, image, price }) {
  return (
    <div className="card h-100 shadow-sm">

      <div className="product-image">
        <img
          src={image}
          alt={title}
          className="card-img-top"
        />
      </div>

      <div className="card-body">
        <h5 className="card-title">
          {title}
        </h5>

        <p className="card-text fw-bold">
          ₹{price}
        </p>

        <button className="btn btn-primary">
          Add to Cart
        </button>
      </div>

    </div>
  );
}

export default ProductCard;