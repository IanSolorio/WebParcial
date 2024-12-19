import React from 'react';
import Marquee from 'react-marquee-slider';

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      title: 'Tacos al Pastor 2x1',
      description: 'Disfruta de dos deliciosos tacos al pastor por el precio de uno.',
      image: '/src/assets/image/V3.jpg', // Asegúrate de que esta imagen exista
    },
    {
      id: 2,
      title: 'Bebidas Gratis',
      description: 'Por cada combo, lleva una bebida completamente gratis.',
      image: '/src/assets/image/V1.jpg',
    },
    {
      id: 3,
      title: 'Descuento del 20%',
      description: 'Obtén un 20% de descuento en tu primera compra.',
      image: '/src/assets/image/V2.jpg',
    },
    {
      id: 4,
      title: 'Combo Familiar',
      description: 'Obtén un combo familiar con 4 tacos y 2 bebidas por un precio especial.',
      image: '/src/assets/image/V2.jpg',
    },
    {
      id: 5,
      title: 'Postre Gratis',
      description: 'Llévate un postre gratis con cualquier compra mayor a $10.',
      image: '/src/assets/image/V2.jpg',
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: '#8B0000' }}>Nuestras Promociones</h2>
      <Marquee velocity={20} minScale={0.7} resetAfterTries={200}>
        {promotions.map((promo) => (
          <div
            className="card shadow-sm"
            style={{
              width: '300px',
              margin: '0 10px',
            }}
            key={promo.id}
          >
            <img
              src={promo.image}
              className="card-img-top"
              alt={promo.title}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">{promo.title}</h5>
              <p className="card-text">{promo.description}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Promotions;
