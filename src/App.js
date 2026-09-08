import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Footer from './components/Footer';


function App(){
    return(
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/Cart" element={<Cart></Cart>}></Route>
                <Route path="/Product" element={<Product></Product>}></Route>
                <Route path="/Login" element={<Login></Login>}></Route>
                <Route path="/Register" element={<Register></Register>}></Route>
            </Routes>
            <Footer></Footer>

        </div>
    );
}

export default App;