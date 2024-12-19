import React, { useState } from "react";
import SidebarAdmin from "../components/SidebarAdmin";
import CreateProductView from "./CreateProductView";
import ListView from "./ListView";

function AdminPanel() {
  const [currentView, setCurrentView] = useState("listView");

  const handleViewChange = (view) => setCurrentView(view);

  return (
    <div className="d-flex">
      <SidebarAdmin onChangeView={handleViewChange} />
      <div className="flex-grow-1 p-4 text-center">
        {currentView === "listView" && <ListView />}
        {currentView === "createProductView" && <CreateProductView />}
      </div>
    </div>
  );
}

export default AdminPanel;
