import './App.css';
import Footer from './component/footer';
import Navbar from './component/navbar'; /*It is imported because the 
export default line at the bottom of the navbar.jsx*/
import Product from './component/product';
import Catalog from './pages/catalog';
import Home from './pages/home';
import About from './pages/about';
import Cart from './pages/cart';
import 'font-awesome/css/font-awesome.min.css';

/*import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";*/

/*A pachakes to hide and show components*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import QuantityPicker from './component/quantityPicker';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter> {/*It is a wrapper component: A component that involves components to provide functionality to them.*/}

        <Navbar></Navbar>

        {/* <QuantityPicker></QuantityPicker> 
        We are not using QuantityPicker here, this is a componente
        inside another component. */}

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/catalog' element={<Catalog />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>

        <Footer></Footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
