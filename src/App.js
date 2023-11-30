import { Route, Routes } from 'react-router-dom';
import './App.css';
import CounterApp from './components/counter/Counter';
import { AboutUs } from './pages/about-us/AboutUs';
import { Footer } from './pages/footer/Footer';
import Home from './pages/home/Home';
import { NavBar } from './pages/navbar/NavBar';
import { Products } from './pages/products/Products';


function App() {
  return (
    <div className="App">
      <h1>Hola</h1>
      {/* 
         Agreguen un componente que tenga lo siguiente
         componente Counter
         - Valor numérico  0
         - 3 botones +, -, reset
        */ 
      }
      <NavBar />
      <Routes>
        <Route index element={<Home />}/> {/*en la ruta principal vamos a poner elemento home */}
        <Route path="products" element={<Products />}/>
        <Route path="about-us" element={<AboutUs />}/>
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
