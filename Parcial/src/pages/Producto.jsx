import React, { useState } from "react";
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

// Lista inicial de productos
const allProducts = [
  {
    id: 1,
    name: "Taco al Pastor",
    price: 10,
    category: "Tacos",
    descripcion: "Historial",
    image: "/path/to/taco.jpg",
  },
  {
    id: 2,
    name: "Burrito de Pollo",
    price: 12,
    category: "Burritos",
    image: "/path/to/burrito.jpg",
  },
  {
    id: 3,
    name: "Quesadilla de Queso",
    price: 8,
    category: "Quesadillas",
    image: "/path/to/quesadilla.jpg",
  },
  {
    id: 4,
    name: "Chilaquiles Verdes",
    price: 15,
    category: "Quesadillas",
    image: "/path/to/chilaquiles.jpg",
  },
  {
    id: 5,
    name: "Tostada de Tinga",
    price: 7,
    category: "Tacos",
    image: "/path/to/tostada.jpg",
  },
  {
    id: 6,
    name: "Enchiladas Rojas",
    price: 18,
    category: "Tacos",
    image: "/path/to/enchiladas.jpg",
  },
  {
    id: 7,
    name: "Nachos con Guacamole",
    price: 10,
    category: "Burritos",
    image: "/path/to/nachos.jpg",
  },
  {
    id: 8,
    name: "Pozole Rojo",
    price: 20,
    category: "Bebidas",
    image: "/path/to/pozole.jpg",
  },
];

const Producto = () => {
  const [priceRange, setPriceRange] = useState([0, 140]);
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

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
    const text = event.target.value.toLowerCase();
    setSearchText(text);
    filterProducts(priceRange, selectedCategory, text);
  };

  // Filtra los productos por precio, categoría y texto de búsqueda
  const filterProducts = (priceRange, category, text) => {
    const filtered = allProducts.filter((product) => {
      const isWithinPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const isInCategory =
        category === "Todas" || product.category === category;
      const matchesSearch = product.name.toLowerCase().includes(text);
      return isWithinPrice && isInCategory && matchesSearch;
    });
    setFilteredProducts(filtered);
  };

  // Añade un producto al carrito
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []; // Recuperar carrito actual
    const updatedCart = [...cart, product]; // Añadir nuevo producto
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Guardar en localStorage
    alert(`${product.name} añadido al carrito.`);
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
                      image={product.image}
                      alt={product.name}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ color: "#4a1f1f" }}>
                        {product.name}
                      </Typography>
                      <Typography variant="0" sx={{ color: "#4a1f1f" }}>
                        {product.descripcion}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#a52a2a" }}>
                        ${product.price.toFixed(2)}
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
