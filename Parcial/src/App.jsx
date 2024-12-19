import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Importa el Footer
import Presentacion from './components/Presentacion';
import Contact from './pages/Contactanos';
import Promotions from './components/Promociones';
import Content from './components/Content';
import AdminPanel from './views/AdminPanel';
import Conocenos from './pages/Conocenos';

function App() {
  return (
    <Router>
      {/* Barra de navegación */}
      <Navbar />

      {/* Rutas de la aplicación */}
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={(
            <>
              <Presentacion />
              <Promotions />
              <Content />
            </>
          )}
        />
        {/* Página de productos */}
        <Route path="/productos" element={<h1>Productos</h1>} />
        {/* Página de nosotros */}
        <Route path="/nosotros" element={<Conocenos />} />
        {/* Página de ubícanos */}
        <Route path="/ubicanos" element={<h1>Ubícanos</h1>} />
        {/* Página de contáctanos */}
        <Route path="/contact" element={<Contact />} />
        {/* Página de administración */}
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>

      {/* Pie de página */}
      <Footer />
    </Router>
  );
}

export default App;
