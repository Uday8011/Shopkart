function Footer(){
    return(
        <div>
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

export default Footer;