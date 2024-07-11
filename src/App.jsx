import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import './App.scss'
import Menu from './pages/Menu/Menu';
import Header from './components/Header/Header';
import FoodTypes from './components/FoodTypes/FoodTypes';
import FoodItems from './components/FoodItems/FoodItems';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Cart from './pages/Cart/Cart';
import { CartProvider } from './context/CartContext';
import Register from './pages/Register/Register';
// import 'bootstrap/dist/css/bootstrap.min.css';
import NoId from './pages/NoId/NoId';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Navigate to='/menu' />} />
            <Route path="/register/:tableId" element={<Register />} />
            <Route path="/menu" element={<Menu />}>
              <Route path='' element={<FoodTypes />} />
              <Route path=':foodtype' element={<FoodItems />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path='/noid' element={<NoId />} />
            <Route path='*' element={<Navigate to='/noid' />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
