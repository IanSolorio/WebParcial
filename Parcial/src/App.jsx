import React from 'react';
import Navbar from './components/Navbar';
import Promo from './components/Promo';
import AdminPanel from './views/AdminPanel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Navbar />
              <Promo />
            </>
          } 
        />
        
        <Route path="/admin" element={
          <AdminPanel />
          } />
      </Routes>
    </Router>
  );
}

export default App;
