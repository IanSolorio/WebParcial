import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de React Router
import logo from '../assets/image/LogoSinFondo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: '50px', height: '50px', marginRight: '10px' }}
          />
        </Link>

        {/* Botón de colapso en dispositivos pequeños */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links de Navegación */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/productos">
                PRODUCTOS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/nosotros">
                NOSOTROS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/ubicanos">
                UBÍCANOS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/contact">
                CONTACTANOS
              </Link>
            </li>
          </ul>

          {/* Botón derecho */}
          <Link
            to="/buscar"
            className="btn btn-dark rounded-pill px-4"
            style={{ fontWeight: 'bold' }}
          >
            FIND A CHIPOTLE
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
