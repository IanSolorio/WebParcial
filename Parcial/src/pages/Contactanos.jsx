import React from 'react';

const Contact = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Contáctanos</h1>
      <p className="text-center">
        ¿Tienes alguna pregunta o deseas realizar un pedido? ¡Estamos aquí para ayudarte!
      </p>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            {/* Campo: Nombre */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Ingresa tu nombre"
              />
            </div>

            {/* Campo: Pedidos Número */}
            <div className="mb-3">
              <label htmlFor="orderNumber" className="form-label">
                Pedidos Número
              </label>
              <input
                type="text"
                className="form-control"
                id="orderNumber"
                placeholder="Ingresa el número de tu pedido"
              />
            </div>

            {/* Campo: Mensaje */}
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Mensaje
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Escribe tu mensaje"
              ></textarea>
            </div>

            {/* Botón de WhatsApp */}
            <a
              href="https://wa.me/1234567890" // Reemplaza con tu número de WhatsApp
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success w-100 d-flex align-items-center justify-content-center"
              style={{ fontSize: '1.2rem', gap: '10px' }}
            >
              <i className="fab fa-whatsapp"></i> Enviar
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
