import React, { useState } from "react";
import FormProduct from "../components/FormProduct";
import { postProductos } from "../services/ProductoService";
import { uploadFile } from "../services/storageService";
import Swal from "sweetalert2";

const CreateProductView = () => {
  const [formValues, setFormValues] = useState({
    nombre: "",
    descripcion: "",
    categoria: "",
    precio: "",
    imagen: null, // Guardaremos la referencia al archivo seleccionado
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormValues({ ...formValues, imagen: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = "";
      if (formValues.imagen) {
        // Subir la imagen a Firebase Storage y obtener la URL
        imageUrl = await uploadFile(formValues.imagen);
      }

      // Crear el producto con la URL de la imagen
      await postProductos({
        ...formValues,
        imagen: imageUrl, // Agregar la URL de la imagen
      });

      Swal.fire("Éxito", "Producto creado correctamente", "success");

      // Reiniciar el formulario
      setFormValues({
        nombre: "",
        descripcion: "",
        categoria: "",
        precio: "",
        imagen: null,
      });
    } catch (error) {
      console.error("Error al crear el producto:", error);
      Swal.fire("Error", "No se pudo crear el producto", "error");
    }
  };

  return (
    <div>
      <h1>Crear Producto</h1>
      <FormProduct
        formValues={formValues}
        handleChange={handleChange}
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CreateProductView;
