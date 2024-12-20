import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  CardMedia,
  Button,
  Drawer,
  Grid,
} from "@mui/material";

const Carrito = ({ open, toggleCart }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, [open]);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleFinalizarCompra = () => {
    alert("Compra finalizada. ¡Gracias por tu compra!");
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
      <Box>
        <Typography
          variant="h5"
          sx={{ marginBottom: "20px", textAlign: "center" }}
        >
          Carrito de Compras
        </Typography>

        {cartItems.length > 0 ? (
          <Grid container spacing={2}>
            {cartItems.map((product) => (
              <Grid item xs={12} key={product.id}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.imagen}
                    alt={product.nombre}
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                  <Box sx={{ flex: 1, marginLeft: "10px" }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                      }}
                    >
                      {product.nombre}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#a52a2a",
                        fontSize: "0.8rem",
                      }}
                    >
                      1 × ${Number(product.precio).toFixed(2)}
                    </Typography>
                  </Box>
                  <Button
                    variant="text"
                    color="error"
                    onClick={() => removeFromCart(product.id)}
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                      minWidth: "30px",
                    }}
                  >
                    X
                  </Button>
                </Box>
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
      </Box>

      {cartItems.length > 0 && (
        <Box sx={{ textAlign: "center", padding: "10px 0" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{
              backgroundColor: "#5c2727",
              "&:hover": { backgroundColor: "#a52a2a" },
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
            onClick={handleFinalizarCompra}
          >
            Finalizar Compra
          </Button>
        </Box>
      )}
    </Drawer>
  );
};

export default Carrito;
