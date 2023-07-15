
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useCart } from './Cart.context';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyCard({ images, title, price, brand, category }) {
  const { addToCart, removeFromCart, cart } = useCart();
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({
        title,
        price,
        brand,
        category,
        quantity,
      });
      setQuantity(0);
    } else {
      removeFromCart(title);
    }
  };

  const cartItem = cart.find((item) => item.title === title);
  const cartQuantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="container" style={{ marginTop: '60px' }}>
      <div className="card-row">
        <Card className="card">
          <Card.Img variant="top" src={images} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Price: {price}</ListGroup.Item>
              <ListGroup.Item>Brand: {brand}</ListGroup.Item>
              <ListGroup.Item>Category: {category}</ListGroup.Item>
            </ListGroup>
            <div className="cart-actions">
              <div className="quantity-controls">
                <Button variant="secondary" size="sm" onClick={handleDecrement}>
                  -
                </Button>
                <span className="quantity">{quantity}</span>
                <Button variant="secondary" size="sm" onClick={handleIncrement}>
                  +
                </Button>
              </div>
              <Button variant="primary" size="sm" onClick={handleAddToCart}>
                {cartQuantity > 0 ? 'Remove from Cart' : 'Add to Cart'}
              </Button>
            </div>
            {cartQuantity > 0 && (
              <div className="cart-quantity">Cart value: {cartQuantity}</div>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default MyCard;
