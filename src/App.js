import './App.css';
import Footer from './component/footer';
import Navbar from './component/navbar'; /*It is imported because the 
export default line at the bottom of the navbar.jsx*/
import Product from './component/product';
import Catalog from './pages/catalog';

/*import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";*/

//import QuantityPicker from './component/quantityPicker';

function App() {
  return (
    <div className="App">
      <h1>Fernanda's Online Store</h1>
      <Navbar></Navbar>
      
      {/* <QuantityPicker></QuantityPicker> 
      We are not using QuantityPicker here, this is a componente
      inside another component. */} 
      
      <Catalog></Catalog>

      <Footer></Footer>
    </div>
  );
}

export default App;
