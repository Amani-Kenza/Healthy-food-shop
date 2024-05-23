import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

export const Cart = ({ productId,productImg, productName, productPrice }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity((quantity) => quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(productImg,productId, quantity,productName, productPrice);
    setQuantity(0);
  };

  return (
    <div className='mt-2 flex'>
      <div className='flex border w-20 h-12 justify-center shadow-2xl items-center rounded-lg'>
        <button className='font-bold text-3xl h2-color' onClick={handleDecrease}>
          -
        </button>
        <p className='ml-2 mt-2 text-xl'>{quantity}</p>
        <button className='ml-2 font-bold text-3xl h2-color' onClick={handleIncrease}>
          +
        </button>
      </div>
      <button className='text-white bg ml-2 cursor-pointer shadow-2xl animation rounded-lg font-bold w-40 h-12' onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};
