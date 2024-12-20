/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2"; // Para manejar alertas de error
import { getProductos } from "../services/ProductoService";
import ProductsTable from "../components/ProductTableAdmin";

const ListView = () => {
  const [productos, setProductos] = useState([]); // Estado para guardar los productos
  const [loading, setLoading] = useState(true); // Indicador de carga

  // Cargar productos al montar el componente
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getProductos(); // Llama a tu servicio
        setProductos(data); // Guarda los productos en el estado
      } catch (error) {
        Swal.fire("Error", "No se pudieron cargar los productos", "error");
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    fetchProductos();
  }, []); // El efecto se ejecuta solo al montar el componente

  // Mostrar un indicador de carga si los datos están siendo obtenidos
  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h1>Listado de Productos</h1>
      <ProductsTable productos={productos} /> {/* Pasa los productos a ProductsTable */}
    </div>
  );
};

export default ListView;
