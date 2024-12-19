/* eslint-disable react/prop-types */
import React from "react";

const FormProduct = ({ formValues, handleChange, handleImageChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          name="nombre"
          value={formValues.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descripcion" className="form-label">
          Descripción
        </label>
        <textarea
          className="form-control"
          id="descripcion"
          name="descripcion"
          value={formValues.descripcion}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="categoria" className="form-label">
          Categoría
        </label>
        <input
          type="text"
          className="form-control"
          id="categoria"
          name="categoria"
          value={formValues.categoria}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="precio" className="form-label">
          Precio
        </label>
        <input
          type="number"
          className="form-control"
          id="precio"
          name="precio"
          value={formValues.precio}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="imagen" className="form-label">
          Imagen
        </label>
        <input
          type="file"
          className="form-control"
          id="imagen"
          name="imagen"
          onChange={handleImageChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Crear Producto
      </button>
    </form>
  );
};

export default FormProduct;
