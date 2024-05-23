import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipes from './pages/Recipes.jsx';
import Home from "./pages/Home";
import Almond from "./pages/Almond.jsx"
import Carrot from "./pages/Carrot.jsx"
import Lemon from './pages/Lemon.jsx';
import Cookie from './pages/Cookie.jsx';
import Apple from './pages/Apple.jsx';
import Muffin from './pages/Muffin.jsx';
import Cookie2 from './pages/Cookie2.jsx';
import Chocolate from './pages/chocolate.jsx';
import Yogurt from './pages/Yogurt.jsx';
import Banana from './pages/Banana.jsx';
import Shop from './pages/Shop.jsx';
import User from './pages/user.jsx';
import ForgotPassword from './pages/forgot-password.jsx'
import Product from './pages/Product.jsx'
import Order from './pages/order.jsx'
import { CartProvider } from './components/CartContext.jsx'; // Assurez-vous d'importer le CartProvider

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="Recipes" element={<Recipes />} />
          <Route path="Almond" element={<Almond />} />
          <Route path="Carrot" element={<Carrot />} />
          <Route path="Lemon" element={<Lemon />} />
          <Route path="Cookie" element={<Cookie />} />
          <Route path="Apple" element={<Apple />} />
          <Route path="Muffin" element={<Muffin />} />
          <Route path="Cookie2" element={<Cookie2 />} />
          <Route path="Chocolate" element={<Chocolate/>} />
          <Route path="Yogurt" element={<Yogurt />} />
          <Route path="Banana" element={<Banana />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="Product" element={<Product />} />
          <Route path="User" element={<User />} />
          <Route path="ForgotPassword" element={<ForgotPassword />} />
          <Route path="Order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
