import React from 'react';

const Nosotros = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ color: '#8B0000' }}>Sobre Nosotros</h1>
      <div className="row">
        {/* Misión */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h3 className="card-title" style={{ color: '#8B0000' }}>Misión</h3>
              <p className="card-text">
                Ofrecer tacos auténticos y de calidad, resaltando los sabores y tradiciones de la cocina poblana en un ambiente acogedor.
              </p>
            </div>
          </div>
        </div>

        {/* Visión */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h3 className="card-title" style={{ color: '#8B0000' }}>Visión</h3>
              <p className="card-text">
                Ser el restaurante de tacos favorito, reconocido por su autenticidad y excelencia, llevando el sabor mexicano al mundo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
