/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import {  Link } from "react-router-dom"

const ProductsTable = ({ productos }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Categoría</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {productos.length === 0 ? (
          <tr>
            <td colSpan="4">No hay productos disponibles.</td>
          </tr>
        ) : (
          productos.map(({ id, nombre, descripcion, categoria, precio }) => (
            <tr key={id}>
              <td>{nombre}</td>
              <td>{descripcion}</td>
              <td>{categoria}</td>
              <td>S/.{precio}</td>
              <td>
                <Link className="btn btn-primary btn-sm" to = {`/editarproducto/${id}`}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
              </td>
              <td>
                <button className="btn btn-danger btn-sm" >
                  <i className="fa-sharp fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default ProductsTable;
