import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active text-white" to="/Product">Product</Link   >
            </li>

            <li className="nav-item">
              <Link className="nav-link active text-white" to="/Cart">Cart</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active text-white" to="/Login">Login</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active text-white" to="/Register">Register</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;