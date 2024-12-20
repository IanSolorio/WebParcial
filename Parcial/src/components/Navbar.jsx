import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faTiktok, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/image/LogoSinFondo.png';
import "../css/Principal.css";

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

          {/* Iconos de redes sociales y botón derecho */}
          <div className="d-flex align-items-center">
            <div className="me-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark me-2">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark me-2">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-dark me-2">
                <FontAwesomeIcon icon={faTiktok} size="lg" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark me-2">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://wa.me/529981234567" target="_blank" rel="noopener noreferrer" className="text-dark">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
            </div>
            <Link
              to="/buscar"
              className="btn btn-dark rounded-pill px-4"
              style={{ fontWeight: 'bold' }}
            >
              FIND A CHIPOTLE
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
