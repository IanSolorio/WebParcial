import React from 'react';
import Fondo from '../assets/image/fondo-papel-tapiz-vintage_53876-25249.jpg'; // Importar la imagen
import T1 from '../assets/image/tacos-8184634_1280.jpg'; // Importar la imagen

const Presentacion = () => {

  return (
  <div
    className="container-fluid py-5"
    style={{
      backgroundImage: `url(${Fondo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="container">
      <div className="row align-items-center">
        {/* Columna Izquierda */}
        <div className="col-md-6 text-center text-md-start">
          <h2 className="fw-bold">
            MAKE IT <span className="text-danger">YOUR CHIPOTLE</span>
          </h2>
          <p className="text-muted">
            From light to half and half to extra, you can now completely customize your digital order.
          </p>
          <a
            href="#"
            className="btn btn-danger fw-bold px-4 py-2"
            style={{ borderRadius: '0px' }}
          >
            ORDER NOW
          </a>
        </div>

        {/* Columna Derecha */}
        <div className="col-md-6 d-flex justify-content-center position-relative">
          <img
            src={T1}
            alt="Promo"
            className="img-fluid"
            style={{ maxWidth: '350px', zIndex: '1' }}
          />
        </div>
      </div>
    </div>

  </div>

  );
};

export default Presentacion;
