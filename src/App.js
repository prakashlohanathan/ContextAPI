import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import ProductDetails from './Components/Productdetails';
import MyCard from './Components/MyCard';
import CartContextProvider, { useCart } from './Components/Cart.context';

function App() {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContextProvider>
      <div className="App">
        <NavBar cartItemCount={cartItemCount} />
        <div id="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ProductDetails" element={<ProductDetails />} />
            <Route path="/MyCard" element={<MyCard />} />
          </Routes>
        </div>
      </div>
    </CartContextProvider>
  );
}

export default App;
