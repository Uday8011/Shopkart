import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <div className="App">

      {/* Header */}
      <Header />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Cart" element={<Cart />} />

        <Route path="/Product" element={<Product />} />

        <Route path="/Login" element={<Login />} />

        <Route path="/Register" element={<Register />} />
      </Routes>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;