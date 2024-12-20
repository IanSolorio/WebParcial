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
    name: "Taco al Pastor",
    price: 10,
    category: "Tacos",
    image: "/path/to/taco.jpg",
  },
  {
    name: "Burrito de Pollo",
    price: 12,
    category: "Burritos",
    image: "/path/to/burrito.jpg",
  },
  {
    name: "Quesadilla de Queso",
    price: 8,
    category: "Quesadillas",
    image: "/path/to/quesadilla.jpg",
  },
  {
    name: "Chilaquiles Verdes",
    price: 15,
    category: "Quesadillas",
    image: "/path/to/chilaquiles.jpg",
  },
  {
    name: "Tostada de Tinga",
    price: 7,
    category: "Tacos",
    image: "/path/to/tostada.jpg",
  },
  {
    name: "Enchiladas Rojas",
    price: 18,
    category: "Tacos",
    image: "/path/to/enchiladas.jpg",
  },
  {
    name: "Nachos con Guacamole",
    price: 10,
    category: "Burritos",
    image: "/path/to/nachos.jpg",
  },
  {
    name: "Pozole Rojo",
    price: 20,
    category: "Bebidas",
    image: "/path/to/pozole.jpg",
  },
];

const Producto = () => {
  const [priceRange, setPriceRange] = useState([0, 140]); // Estado para el rango de precios
  const [selectedCategory, setSelectedCategory] = useState("Todas"); // Estado para la categoría seleccionada
  const [searchText, setSearchText] = useState(""); // Estado para el texto de búsqueda
  const [filteredProducts, setFilteredProducts] = useState(allProducts); // Productos filtrados

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
              position: "sticky", // Hace que se quede fijo
              top: "20px", // Espaciado desde la parte superior
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
