import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Slider,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Paper,
} from "@mui/material";
import { getProductos } from "../services/ProductoService";
import Swal from "sweetalert2";

const Producto = () => {
  const [priceRange, setPriceRange] = useState([0, 140]);
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [searchText, setSearchText] = useState("");
  const [allProducts, setAllProducts] = useState([]); // Productos obtenidos de la API
  const [filteredProducts, setFilteredProducts] = useState([]); // Productos filtrados

  // Carga los productos desde la API
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productos = await getProductos();
        // Valida que todos los productos tengan `precio` como número
        const validatedProducts = productos.map((product) => ({
          ...product,
          precio: Number(product.precio), // Asegura que precio sea un número
        }));
        setAllProducts(validatedProducts);
        setFilteredProducts(validatedProducts);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };
    fetchProductos();
  }, []);

  // Actualiza el rango de precios y filtra productos
  const handleSliderChange = (event, newValue) => {
    setPriceRange(newValue);
    filterProducts(newValue, selectedCategory, searchText);
  };

  // Maneja la selección de categorías
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    filterProducts(priceRange, category, searchText);
  };

  // Maneja la búsqueda de productos
  const handleSearchChange = (event) => {
    const text = event.target.value.toLowerCase(); // Convierte el texto a minúsculas
    setSearchText(text);
    filterProducts(priceRange, selectedCategory, text); // Aplica el filtro actualizado
  };

  // Filtra los productos por precio, categoría y texto de búsqueda
  const filterProducts = (priceRange, category, text) => {
    const filtered = allProducts.filter((product) => {
      const isWithinPrice =
        product.precio >= priceRange[0] && product.precio <= priceRange[1];
      const isInCategory =
        category === "Todas" || product.categoria === category;
      const matchesSearch = product.nombre.toLowerCase().includes(text);
      return isWithinPrice && isInCategory && matchesSearch;
    });
    setFilteredProducts(filtered);
  };

  // Añade un producto al carrito
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []; // Recuperar carrito actual
    const updatedCart = [...cart, product]; // Añadir nuevo producto
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Guardar en localStorage
    Swal.fire({
      title: "¡Producto añadido!",
      text: `${product.nombre} se agregó al carrito con éxito.`,
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#a52a2a",
    });
  };

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#ece5dd" }}>
      {/* Barra de búsqueda */}
      <Paper
        sx={{
          display: "flex",
          gap: "10px",
          padding: "10px",
          marginBottom: "20px",
          alignItems: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <TextField
          label="Buscar producto"
          variant="outlined"
          fullWidth
          value={searchText}
          onChange={handleSearchChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#a52a2a",
              },
            },
          }}
        />
      </Paper>

      {/* Layout principal */}
      <Grid container spacing={3}>
        {/* Columna izquierda (Filtro y Categorías) */}
        <Grid item xs={12} md={3}>
          <Paper
            sx={{
              padding: "20px",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              position: "sticky",
              top: "20px",
            }}
          >
            {/* Filtro por precio */}
            <Box sx={{ marginBottom: "20px" }}>
              <Typography sx={{ fontWeight: "bold", marginBottom: "10px" }}>
                Filtrar por precio
              </Typography>
              <Slider
                value={priceRange}
                min={0}
                max={140}
                step={1}
                valueLabelDisplay="auto"
                onChange={handleSliderChange}
                sx={{
                  color: "#a52a2a",
                  "& .MuiSlider-thumb": {
                    backgroundColor: "#4a1f1f",
                  },
                }}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>${priceRange[0]}</Typography>
                <Typography>${priceRange[1]}</Typography>
              </Box>
            </Box>

            {/* Categorías */}
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  color: "#4a1f1f",
                }}
              >
                Categorías
              </Typography>
              <Box>
                {["Todas", "Bebidas", "Tacos", "Burritos", "Quesadillas"].map(
                  (category) => (
                    <Typography
                      key={category}
                      onClick={() => handleCategoryClick(category)}
                      sx={{
                        color:
                          category === selectedCategory ? "#4a1f1f" : "#a52a2a",
                        fontWeight:
                          category === selectedCategory ? "bold" : "normal",
                        cursor: "pointer",
                        marginBottom: "8px",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {category}
                    </Typography>
                  )
                )}
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Columna derecha (Productos) */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      backgroundColor: "#fff",
                      border: "1px solid #a52a2a",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        transform: "scale(1.05)",
                        transition: "0.3s",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={product.imagen}
                      alt={product.nombre}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ color: "#4a1f1f" }}>
                        {product.nombre}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#4a1f1f" }}>
                        {product.descripcion}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#a52a2a" }}>
                        {/* Asegura que `precio` sea un número antes de usar `toFixed` */}
                        ${Number(product.precio).toFixed(2)}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          backgroundColor: "#a52a2a",
                          "&:hover": { backgroundColor: "#4a1f1f" },
                        }}
                        onClick={() => addToCart(product)} // Agregar al carrito
                      >
                        Añadir al Carrito
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography sx={{ textAlign: "center", width: "100%" }}>
                No se encontraron productos en esta categoría o rango de precio.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Producto;
