function Cart() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Shopping Cart</h2>

      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-8">
          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <img
                    src="https://via.placeholder.com/100"
                    className="img-fluid rounded"
                    alt="Product"
                  />
                </div>

                <div className="col-md-4">
                  <h5 className="mb-1">Product Name</h5>
                  <p className="text-muted mb-0">₹999</p>
                </div>

                <div className="col-md-3">
                  <div className="input-group">
                    <button className="btn btn-outline-secondary">
                      -
                    </button>

                    <input
                      type="text"
                      className="form-control text-center"
                      value="1"
                      readOnly
                    />

                    <button className="btn btn-outline-secondary">
                      +
                    </button>
                  </div>
                </div>

                <div className="col-md-2 text-center">
                  <strong>₹999</strong>
                </div>

                <div className="col-md-1 text-end">
                  <button className="btn btn-danger btn-sm">
                    ×
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <img
                    src="https://via.placeholder.com/100"
                    className="img-fluid rounded"
                    alt="Product"
                  />
                </div>

                <div className="col-md-4">
                  <h5 className="mb-1">Another Product</h5>
                  <p className="text-muted mb-0">₹1,499</p>
                </div>

                <div className="col-md-3">
                  <div className="input-group">
                    <button className="btn btn-outline-secondary">
                      -
                    </button>

                    <input
                      type="text"
                      className="form-control text-center"
                      value="1"
                      readOnly
                    />

                    <button className="btn btn-outline-secondary">
                      +
                    </button>
                  </div>
                </div>

                <div className="col-md-2 text-center">
                  <strong>₹1,499</strong>
                </div>

                <div className="col-md-1 text-end">
                  <button className="btn btn-danger btn-sm">
                    ×
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="mb-4">Order Summary</h4>

              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <strong>₹2,498</strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <strong>₹100</strong>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-4">
                <h5>Total</h5>
                <h5>₹2,598</h5>
              </div>

              <button className="btn btn-dark w-100">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;