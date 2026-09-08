function Home() {
  return (
    <div className="bg-light">

      {/* Hero Section */}
      <section
        className="text-white"
        style={{
          background:
            "linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)",
          minHeight: "600px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center g-5">

            {/* Hero Text */}
            <div className="col-lg-6">
              <span className="badge bg-danger px-3 py-2 mb-3">
                NEW COLLECTION
              </span>

              <h1
                className="display-3 fw-bold mb-4"
                style={{ lineHeight: "1.1" }}
              >
                Discover Products
                <br />
                You'll <span className="text-danger">Love.</span>
              </h1>

              <p
                className="lead text-white-50 mb-4"
                style={{ maxWidth: "520px" }}
              >
                Shop the latest products, trending fashion, electronics
                and accessories at amazing prices.
              </p>

              <div className="d-flex gap-3">
                <button className="btn btn-danger btn-lg px-4 rounded-pill">
                  Shop Now →
                </button>

                <button className="btn btn-outline-light btn-lg px-4 rounded-pill">
                  Explore
                </button>
              </div>

              <div className="d-flex gap-4 mt-5">
                <div>
                  <h4 className="fw-bold mb-0">10K+</h4>
                  <small className="text-white-50">Products</small>
                </div>

                <div>
                  <h4 className="fw-bold mb-0">5K+</h4>
                  <small className="text-white-50">Customers</small>
                </div>

                <div>
                  <h4 className="fw-bold mb-0">4.9 ★</h4>
                  <small className="text-white-50">Rating</small>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="col-lg-6">
              <div
                className="position-relative"
                style={{
                  borderRadius: "30px",
                  overflow: "hidden",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85"
                  alt="Shopping"
                  className="img-fluid w-100"
                  style={{
                    height: "430px",
                    objectFit: "cover",
                  }}
                />

                <div
                  className="position-absolute bottom-0 start-0 m-4 bg-white text-dark p-3 rounded-4 shadow"
                  style={{ minWidth: "220px" }}
                >
                  <small className="text-muted">
                    Special Offer
                  </small>
                  <h5 className="fw-bold mb-0">
                    Up to 50% OFF 🔥
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Features */}
      <section className="py-4 bg-white border-bottom">
        <div className="container">
          <div className="row text-center g-4">

            <div className="col-md-3">
              <div className="d-flex justify-content-center align-items-center gap-3">
                <span className="fs-2">🚚</span>
                <div className="text-start">
                  <h6 className="fw-bold mb-0">Free Shipping</h6>
                  <small className="text-muted">
                    On orders over ₹999
                  </small>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="d-flex justify-content-center align-items-center gap-3">
                <span className="fs-2">🔒</span>
                <div className="text-start">
                  <h6 className="fw-bold mb-0">Secure Payment</h6>
                  <small className="text-muted">
                    100% secure checkout
                  </small>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="d-flex justify-content-center align-items-center gap-3">
                <span className="fs-2">↩️</span>
                <div className="text-start">
                  <h6 className="fw-bold mb-0">Easy Returns</h6>
                  <small className="text-muted">
                    30 day return policy
                  </small>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="d-flex justify-content-center align-items-center gap-3">
                <span className="fs-2">💬</span>
                <div className="text-start">
                  <h6 className="fw-bold mb-0">24/7 Support</h6>
                  <small className="text-muted">
                    We're here to help
                  </small>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Categories */}
      <section className="py-5">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <span className="text-danger fw-semibold">
                EXPLORE
              </span>
              <h2 className="fw-bold mb-0">
                Shop by Category
              </h2>
            </div>

            <button className="btn btn-outline-dark rounded-pill px-4">
              View All →
            </button>
          </div>

          <div className="row g-4">

            <div className="col-md-4">
              <div
                className="card border-0 shadow-sm h-100 overflow-hidden"
                style={{ borderRadius: "20px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80"
                  className="card-img-top"
                  alt="Electronics"
                  style={{ height: "230px", objectFit: "cover" }}
                />

                <div className="card-body p-4">
                  <h4 className="fw-bold">Electronics</h4>
                  <p className="text-muted">
                    Latest gadgets and smart devices.
                  </p>

                  <button className="btn btn-dark rounded-pill px-4">
                    Shop Electronics →
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="card border-0 shadow-sm h-100 overflow-hidden"
                style={{ borderRadius: "20px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=700&q=80"
                  className="card-img-top"
                  alt="Fashion"
                  style={{ height: "230px", objectFit: "cover" }}
                />

                <div className="card-body p-4">
                  <h4 className="fw-bold">Fashion</h4>
                  <p className="text-muted">
                    Discover the latest fashion trends.
                  </p>

                  <button className="btn btn-dark rounded-pill px-4">
                    Shop Fashion →
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="card border-0 shadow-sm h-100 overflow-hidden"
                style={{ borderRadius: "20px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=700&q=80"
                  className="card-img-top"
                  alt="Accessories"
                  style={{ height: "230px", objectFit: "cover" }}
                />

                <div className="card-body p-4">
                  <h4 className="fw-bold">Accessories</h4>
                  <p className="text-muted">
                    Stylish accessories for every occasion.
                  </p>

                  <button className="btn btn-dark rounded-pill px-4">
                    Shop Accessories →
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Products */}
      <section className="py-5 bg-white">
        <div className="container">

          <div className="text-center mb-5">
            <span className="text-danger fw-semibold">
              TRENDING NOW
            </span>

            <h2 className="fw-bold mt-2">
              Featured Products
            </h2>

            <p className="text-muted">
              Check out our most popular products
            </p>
          </div>

          <div className="row g-4">

            {/* Product 1 */}
            <div className="col-sm-6 col-lg-3">
              <div
                className="card border-0 shadow-sm h-100"
                style={{ borderRadius: "18px", overflow: "hidden" }}
              >
                <div className="position-relative">
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
                    className="card-img-top"
                    alt="Headphones"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />

                  <span className="badge bg-danger position-absolute top-0 start-0 m-3">
                    SALE
                  </span>
                </div>

                <div className="card-body p-4">
                  <small className="text-muted">
                    Electronics
                  </small>

                  <h5 className="fw-bold mt-1">
                    Wireless Headphones
                  </h5>

                  <div className="mb-2">
                    <span className="text-warning">★★★★★</span>
                    <small className="text-muted ms-2">
                      (124)
                    </small>
                  </div>

                  <h5 className="fw-bold">
                    ₹1,999
                    <del className="text-muted fs-6 ms-2">
                      ₹2,999
                    </del>
                  </h5>

                  <button className="btn btn-dark w-100 rounded-pill mt-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>


            {/* Product 2 */}
            <div className="col-sm-6 col-lg-3">
              <div
                className="card border-0 shadow-sm h-100"
                style={{ borderRadius: "18px", overflow: "hidden" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
                  className="card-img-top"
                  alt="Smart Watch"
                  style={{
                    height: "250px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body p-4">
                  <small className="text-muted">
                    Electronics
                  </small>

                  <h5 className="fw-bold mt-1">
                    Smart Watch
                  </h5>

                  <div className="mb-2">
                    <span className="text-warning">★★★★★</span>
                    <small className="text-muted ms-2">
                      (98)
                    </small>
                  </div>

                  <h5 className="fw-bold">
                    ₹2,499
                  </h5>

                  <button className="btn btn-dark w-100 rounded-pill mt-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>


            {/* Product 3 */}
            <div className="col-sm-6 col-lg-3">
              <div
                className="card border-0 shadow-sm h-100"
                style={{ borderRadius: "18px", overflow: "hidden" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
                  className="card-img-top"
                  alt="Shoes"
                  style={{
                    height: "250px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body p-4">
                  <small className="text-muted">
                    Fashion
                  </small>

                  <h5 className="fw-bold mt-1">
                    Running Shoes
                  </h5>

                  <div className="mb-2">
                    <span className="text-warning">★★★★★</span>
                    <small className="text-muted ms-2">
                      (156)
                    </small>
                  </div>

                  <h5 className="fw-bold">
                    ₹2,999
                  </h5>

                  <button className="btn btn-dark w-100 rounded-pill mt-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>


            {/* Product 4 */}
            <div className="col-sm-6 col-lg-3">
              <div
                className="card border-0 shadow-sm h-100"
                style={{ borderRadius: "18px", overflow: "hidden" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80"
                  className="card-img-top"
                  alt="Camera"
                  style={{
                    height: "250px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body p-4">
                  <small className="text-muted">
                    Accessories
                  </small>

                  <h5 className="fw-bold mt-1">
                    Digital Camera
                  </h5>

                  <div className="mb-2">
                    <span className="text-warning">★★★★★</span>
                    <small className="text-muted ms-2">
                      (76)
                    </small>
                  </div>

                  <h5 className="fw-bold">
                    ₹5,999
                  </h5>

                  <button className="btn btn-dark w-100 rounded-pill mt-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Newsletter */}
      <section className="py-5">
        <div className="container">
          <div
            className="rounded-4 p-5 text-center text-white"
            style={{
              background:
                "linear-gradient(135deg, #dc2626, #991b1b)",
            }}
          >
            <h2 className="fw-bold">
              Get 10% Off Your First Order 🎁
            </h2>

            <p className="mb-4 text-white-50">
              Subscribe to our newsletter and receive exclusive offers.
            </p>

            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter your email"
                  />

                  <button className="btn btn-dark px-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">

          <div className="row g-4">

            <div className="col-md-4">
              <h4 className="fw-bold">
                Our<span className="text-danger">Store</span>
              </h4>

              <p className="text-white-50">
                Your one-stop destination for quality products,
                great prices and an amazing shopping experience.
              </p>
            </div>

            <div className="col-md-2">
              <h6 className="fw-bold">Shop</h6>
              <p className="text-white-50 mb-2">Products</p>
              <p className="text-white-50 mb-2">Categories</p>
              <p className="text-white-50 mb-2">Offers</p>
            </div>

            <div className="col-md-2">
              <h6 className="fw-bold">Company</h6>
              <p className="text-white-50 mb-2">About</p>
              <p className="text-white-50 mb-2">Contact</p>
              <p className="text-white-50 mb-2">Privacy</p>
            </div>

            <div className="col-md-4">
              <h6 className="fw-bold">Contact Us</h6>
              <p className="text-white-50 mb-2">
                📧 support@ourstore.com
              </p>
              <p className="text-white-50 mb-2">
                📞 +91 98765 43210
              </p>
              <p className="text-white-50">
                📍 India
              </p>
            </div>

          </div>

          <hr className="border-secondary my-4" />

          <p className="text-center text-white-50 mb-0">
            © 2026 OurStore. All Rights Reserved.
          </p>

        </div>
      </footer>

    </div>
  );
}

export default Home;