import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Presentacion from './components/Presentacion';
import Contact from './pages/Contactanos';
import Promotions from './components/Promociones';
import Content from './components/Content';
import AdminPanel from './views/AdminPanel';
import Conocenos from './pages/Conocenos';
import Ubicanos from './pages/Ubicanos';

function App() {
  // Hook para obtener la ubicación actual
  const location = useLocation();

  // Rutas donde no se debe mostrar Navbar y Footer
  const hideNavbarAndFooter = location.pathname === '/admin';

  return (
    <>
      {/* Mostrar Navbar solo si no estamos en /admin */}
      {!hideNavbarAndFooter && <Navbar />}

      {/* Rutas de la aplicación */}
      <Routes>
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
        <Route path="/productos" element={<h1>Productos</h1>} />
        <Route path="/nosotros" element={<Conocenos />} />
        <Route path="/ubicanos"  element={<Ubicanos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>

      {/* Mostrar Footer solo si no estamos en /admin */}
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}

// Wrapper para agregar Router
function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
