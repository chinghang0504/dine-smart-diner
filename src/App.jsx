import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import './App.scss'
import Menu from './pages/Menu/Menu';
import Header from './components/Header/Header';
import FoodTypes from './components/FoodTypes/FoodTypes';
import FoodItems from './components/FoodItems/FoodItems';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/menu" />} />
          <Route path="/menu" element={<Menu />}>
            <Route path='' element={<FoodTypes />} />
            <Route path=':foodtype' element={<FoodItems />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
