import React from 'react';
import logo from '../assets/image/LogoSinFondo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
            <img
                src={logo}
                alt="Logo"
                style={{ width: '50px', height: '50px', marginRight: '10px' }}
            />
        </a>

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
              <a className="nav-link fw-bold" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                PRODUCTOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                NOSOTROS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                UBICANOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                CONTACTANOS
              </a>
            </li>
          </ul>

          {/* Botón derecho */}
          <a
            href="#"
            className="btn btn-dark rounded-pill px-4"
            style={{ fontWeight: 'bold' }}
          >
            FIND A CHIPOTLE
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
