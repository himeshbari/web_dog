

// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/HomePage';
import History from './components/HistoryPage';
import Cart from './components/CartPage';
import Navigation from './components/Navigation';

function App() {
  const [cart, setCart] = useState([]);

  // Add addToCart 
  const addToCart = (item) => {
    setCart([...cart, item]);
  };



  return (
    <Router>
      <Container>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/history" element={<History />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
