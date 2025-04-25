import { Routes, Route } from 'react-router-dom';

// Páginas/componentes que vamos a ir creando:
import Home from './pages/Home';
import Category from './pages/Category';
import ItemDetail from './pages/ItemDetail';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';




function App() {
  return (
    <div>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/item/:itemId" element={<ItemDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;

