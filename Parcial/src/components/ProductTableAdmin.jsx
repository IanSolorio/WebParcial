/* eslint-disable react/prop-types */

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
              </tr>
            ))
          )}
        </tbody>
      </table>
    );
  };
  
  export default ProductsTable;
  