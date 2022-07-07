import React from 'react';
import './App.css';
import { BrowserRouter as Routes, Route,  } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from "./Pages/Home/Home";
import ProductList from "./Pages/ProductList/ProductList";
import Detalle from "./Pages/Detalle/Detalle";
import Cart from "./Pages/Cart/Cart";
import Contacto from "./Pages/Contacto/Contacto";
import NotFound from "./Pages/NotFound/NotFound";


function App() {
  return (
    
    
      <div className="App">
      
        <NavBar/>
          <Routes> 
                <Route path='/contact' element={<Contacto />}/>  
                <Route path='/cart' element={<Cart />} />
                <Route path='/product/:id' element={<Detalle />} />
                <Route path='/products/:category' element={<ProductList />}/>  
                <Route path='/' element={<Home />}/>  
                <Route path='*' element={<NotFound />}/>  
          </Routes>  
      </div>
    
      
    
  );
}

export default App;
