import './App.css';
import Footer from './component/footer';
import Navbar from './component/navbar'; /*It is imported because the 
export default line at the bottom of the navbar.jsx*/

function App() {
  return (
    <div className="App">
      <h1>Hello from React!</h1>
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
}

export default App;
