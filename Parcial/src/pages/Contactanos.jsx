import React from 'react';

const Contact = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Contáctanos</h1>
      <p className="text-center">
        ¿Tienes alguna pregunta o sugerencia? ¡Nos encantaría saber de ti!
      </p>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
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
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>
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
            <button type="submit" className="btn btn-primary w-100">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
