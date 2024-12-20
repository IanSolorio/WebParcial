import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Drawer,
  Grid,
} from "@mui/material";

const Carrito = ({ open, toggleCart }) => {
  const [cartItems, setCartItems] = useState([]);

  // Cargar productos del localStorage al montar el componente
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, [open]); // Se actualiza cada vez que se abre el carrito

  // Remover un producto del carrito
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => toggleCart(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: "400px",
          padding: "20px",
        },
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: "20px" }}>
        Carrito de Compras
      </Typography>

      {cartItems.length > 0 ? (
        <Grid container spacing={2}>
          {cartItems.map((product) => (
            <Grid item xs={12} key={product.id}>
              <Card
                sx={{
                  backgroundColor: "#fff",
                  border: "1px solid #a52a2a",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={product.imagen} // Usar "imagen" en lugar de "image"
                  alt={product.nombre} // Usar "nombre" en lugar de "name"
                />
                <CardContent>
                  <Typography variant="h6" sx={{ color: "#4a1f1f" }}>
                    {product.nombre} {/* Usar "nombre" */}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#a52a2a" }}>
                    ${Number(product.precio).toFixed(2)} {/* Formato del precio */}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="error"
                    fullWidth
                    onClick={() => removeFromCart(product.id)}
                  >
                    Eliminar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography
          variant="body1"
          sx={{ textAlign: "center", marginTop: "20px" }}
        >
          No hay productos en el carrito.
        </Typography>
      )}
    </Drawer>
  );
};

export default Carrito;
