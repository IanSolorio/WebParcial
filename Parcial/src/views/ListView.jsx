import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { deleteProductoId, getProductos } from "../services/ProductoService";
import ProductTable from "../components/ProductTableAdmin";

const ListView = () => {
  const [productos, setProductos] = useState([]);

  // Obtener productos al cargar el componente
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getProductos();
        setProductos(data);
      } catch (error) {
        Swal.fire("Error", "No se pudieron cargar los productos", "error");
      }
    };

    fetchProductos();
  }, []);

  // Manejar eliminación de productos
  const handleDelete = async (id) => {
    const confirmar = await Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminarlo",
      cancelButtonText: "Cancelar",
    });

    if (confirmar.isConfirmed) {
      try {
        await deleteProductoId(id);
        setProductos(productos.filter((producto) => producto.id !== id));
        Swal.fire("Eliminado", "El producto ha sido eliminado.", "success");
      } catch (error) {
        Swal.fire("Error", "No se pudo eliminar el producto.", "error");
      }
    }
  };

  // Manejar edición de productos
  const handleEdit = (id) => {
    Swal.fire("Editar Producto", `Aquí se editaría el producto con ID: ${id}`, "info");
  };

  return (
    <div>
      <h1>Listado de Productos</h1>
      <ProductTable
        productos={productos}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default ListView;
