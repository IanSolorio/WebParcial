import React from "react";
import SidebarAdmin from "../components/SidebarAdmin";

function AdminPanel() {
  return (
    <div className="d-flex">
      <SidebarAdmin />
      <div className="flex-grow-1 p-4 text-center">
        <h1>Bienvenido al Panel del Administrador</h1>
        {/* Aquí puedes añadir más contenido */}
      </div>
    </div>
  );
}

export default AdminPanel;
