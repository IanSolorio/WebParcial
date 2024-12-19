import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Presentacion from './components/Presentacion';
import Contact from './pages/Contactanos';
import Promotions from './components/Promociones';
import Content from './components/Content';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={(
            <div>
              <Presentacion />
              <Promotions />
              <Content />
            </div>
          )}
        />
        {/* Página de productos */}
        <Route path="/productos" element={<h1>Productos</h1>} />
        {/* Página de nosotros */}
        <Route path="/nosotros" element={<h1>Nosotros</h1>} />
        {/* Página de ubícanos */}
        <Route path="/ubicanos" element={<h1>Ubícanos</h1>} />
        {/* Página de contáctanos */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;