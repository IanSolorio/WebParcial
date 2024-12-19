import React from "react";
import { FaHome, FaUserGraduate, FaCogs, FaSignOutAlt } from "react-icons/fa";
import "../css/SidebarAdmin.css";

const SidebarAdmin = () => {
  return (
    <div
      className="sidebar text-white d-flex flex-column"
      style={{ width: "250px", height: "100vh" }}
    >
      {/* Perfil del usuario */}
      <div className="text-center py-4">
        <img
          src="https://i.pravatar.cc/150?u=admin"
          alt="Admin"
          className="rounded-circle mb-2"
          style={{ width: "80px", height: "80px" }}
        />
        <h5 className="mb-0">Karthi Madesh</h5>
        <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
          Admin
        </p>
      </div>

      {/* Menú */}
      <nav className="nav flex-column py-3">
        <a
          href="/"
          className="nav-link text-white d-flex align-items-center mb-2"
        >
          <FaHome className="me-2" />
          <span>Producto</span>
        </a>
        <a
          href="/students"
          className="nav-link text-white d-flex align-items-center mb-2"
        >
          <FaUserGraduate className="me-2" />
          <span>Students</span>
        </a>
        <a
          href="/settings"
          className="nav-link text-white d-flex align-items-center mb-2"
        >
          <FaCogs className="me-2" />
          <span>Settings</span>
        </a>
      </nav>

      {/* Logout */}
      <div className="mt-auto text-center py-3  d-flex justify-content-center">
        <button className="btn btn-outline-light logout-btn">
          <FaSignOutAlt className="me-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default SidebarAdmin;
