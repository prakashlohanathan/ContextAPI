
import React, { useEffect, useState } from 'react';
import Card from './MyCard';
import { useCart } from './Cart.context';

export default function ProductDetails() {
  const [phones, setPhones] = useState(null);
  const { addToCart, removeFromCart, cart, updateCartValue } = useCart();

  useEffect(() => {
    fetch('http://localhost:3000/mocks/product.json')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.products) {
          setPhones(data.products);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleIncrement = (product) => {
    addToCart(product);
    updateCartValue(1); // Increase cart value by 1
  };

  const handleDecrement = (product) => {
    removeFromCart(product.title);
    updateCartValue(-1); // Decrease cart value by 1
  };

  return (
    <div>
      {phones &&
        phones.map((product) => {
          const cartItem = cart.find((item) => item.title === product.title);
          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <Card
              key={product.id}
              images={product.images}
              title={product.title}
              price={product.price}
              brand={product.brand}
              category={product.category}
              quantity={quantity}
              onIncrement={() => handleIncrement(product)}
              onDecrement={() => handleDecrement(product)}
            />
          );
        })}
    </div>
  );
}
