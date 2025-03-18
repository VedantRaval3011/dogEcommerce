// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, change) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar
          cartItemCount={cartItems.reduce(
            (sum, item) => sum + item.quantity,
            0
          )}
          onCartClick={() => setIsCartOpen(true)}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products onAddToCart={addToCart} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>

        {isCartOpen && (
          <Cart
            items={cartItems}
            onClose={() => setIsCartOpen(false)}
            onUpdateQuantity={updateQuantity}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
