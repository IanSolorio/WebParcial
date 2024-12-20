/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
const FormProduct = ({ handleValues, handleImage, handleSubmit, values, title }) => {
  return (
    <div className="container pt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h2>{title}</h2>
          {/* Nombre del producto */}
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            placeholder="Ej. Tacos al pastor"
            name="nombre"
            value={values.nombre}
            onChange={handleValues}
          />
        </div>
        {/* Descripción del producto */}
        <div className="mb-3">
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            type="text"
            className="form-control"
            id="descripcion"
            placeholder="Ej. Deliciosos tacos con ingredientes frescos"
            name="descripcion"
            value={values.descripcion}
            onChange={handleValues}
          />
        </div>
        {/* Categoría del producto */}
        <div className="mb-3">
          <label htmlFor="categoria">Categoría</label>
          <input
            type="text"
            className="form-control"
            id="categoria"
            placeholder="Ej. Tacos"
            name="categoria"
            value={values.categoria}
            onChange={handleValues}
          />
        </div>
        {/* Precio del producto */}
        <div className="mb-3">
          <label htmlFor="precio">Precio</label>
          <input
            type="number"
            className="form-control"
            id="precio"
            placeholder="0.00"
            name="precio"
            value={values.precio}
            onChange={handleValues}
          />
        </div>
        {/* Imagen del producto */}
        <div>
          <label className="form-label" htmlFor="imagen">
            Imagen
          </label>
          <input type="file" className="form-control" onChange={handleImage} />
        </div>
        <button className="btn btn-primary btn-lg mt-3">Guardar</button>
      </form>
    </div>
  );
};

export default FormProduct;
