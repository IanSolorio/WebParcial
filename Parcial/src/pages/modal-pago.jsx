import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const PaymentModal = ({ open, handleClose, productPrice }) => {
  const [amountToPay, setAmountToPay] = React.useState(0); // Estado para el monto a pagar

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificar si el monto ingresado es suficiente (mayor o igual al precio total)
    if (amountToPay < productPrice) {
      Swal.fire({
        icon: "error",
        title: "Compra no completada",
        text: `El monto ingresado es menor al precio total de ${productPrice.toFixed(
          2
        )}.`, // Mostrar el precio con dos decimales
        confirmButtonText: "Intentar de nuevo",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Compra completada",
        text: `¡Gracias por tu compra! El monto total fue ${amountToPay.toFixed(
          2
        )}.`, // Mostrar el precio con dos decimales
        confirmButtonText: "Aceptar",
      });
    }

    handleClose(); // Cerrar el modal después de mostrar la alerta
  };

  return (
    <Modal show={open} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Formulario de Pago</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {/* Campo: Nombre del titular */}
          <Form.Group className="mb-3">
            <Form.Label>Nombre del titular</Form.Label>
            <Form.Control type="text" placeholder="Juan Pérez" required />
          </Form.Group>

          {/* Campo: Número de tarjeta */}
          <Form.Group className="mb-3">
            <Form.Label>Número de tarjeta</Form.Label>
            <Form.Control
              type="text"
              placeholder="1234 5678 9012 3456"
              maxLength="16"
              required
            />
          </Form.Group>

          {/* Campo: Fecha de expiración */}
          <Form.Group className="mb-3">
            <Form.Label>Fecha de expiración</Form.Label>
            <Form.Control type="text" placeholder="MM/AA" required />
          </Form.Group>

          {/* Campo: CVC */}
          <Form.Group className="mb-3">
            <Form.Label>CVC</Form.Label>
            <Form.Control
              type="text"
              placeholder="123"
              maxLength="3"
              required
            />
          </Form.Group>

          {/* Campo: Dirección de facturación */}
          <Form.Group className="mb-3">
            <Form.Label>Dirección de facturación</Form.Label>
            <Form.Control type="text" placeholder="Calle Falsa 123" required />
          </Form.Group>

          {/* Campo: Monto a pagar */}
          <Form.Group className="mb-3">
            <Form.Label>Monto a pagar</Form.Label>
            <Form.Control
              type="number"
              value={amountToPay}
              onChange={(e) => setAmountToPay(Number(e.target.value))}
              min="0"
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            Confirmar Pago
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default PaymentModal;
