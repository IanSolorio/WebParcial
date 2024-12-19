import React from 'react';

const Content = () => {
  return (
    <div className="additional-section">
      {/* Parte superior con texto y video TikTok */}
      <div className="top-section d-flex align-items-center justify-content-center">
        <div className="row w-100">
          {/* Columna de texto */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="section-header text-center mb-4">
  <h2 style={{ color: '#8B0000' }}>¡Descubre la Experiencia El Poblano!</h2>
</div>
            <div className="content-box">
              <h3>Lo Que Nuestros Clientes Dicen</h3>
              <p>En El Poblano, no solo servimos tacos, servimos momentos inolvidables. Cada cliente que nos visita es parte de nuestra familia, y nos esforzamos por ofrecer no solo comida deliciosa, sino también un ambiente acogedor y auténtico.</p>
            </div>
          </div>
          {/* Columna del video TikTok */}
          <div className="col-md-6 d-flex justify-content-center">
            <iframe
              src="https://www.tiktok.com/embed/7263489077612186886"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{
                width: '325px',
                height: '575px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            ></iframe>
          </div>
        </div>
      </div>

      {/* Parte inferior */}
      <div className="bottom-section">
        <div className="content-box">
          <h3>¡Prueba Nuestro Nuevo Menú!</h3>
          <p>Explora una variedad de sabores que sorprenderán a tu paladar.</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
