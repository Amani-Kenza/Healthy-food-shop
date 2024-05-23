import React, { createContext, useState, useCallback } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [productQuantities, setProductQuantities] = useState({});

  /*useEffect(() => {
    localStorage.setItem('cartItemsCount', cartItemsCount.toString());
  }, [cartItemsCount]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);*/
  
  const addToCart = useCallback((productImg,productId,quantityToAdd, productName, productPrice) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + quantityToAdd,
    }));

    const item = {
      productId,
      productImg,
      productName,
      quantity: quantityToAdd,
      productPrice,
    };
    
    setCartItems((prevItems) => [...prevItems, item]);
    setCartItemsCount((prevCount) => prevCount + quantityToAdd);
    // Mettre à jour le stockage local après l'ajout
  localStorage.setItem('cartItems', JSON.stringify([...cartItems, item]));
  localStorage.setItem('cartItemsCount', (cartItemsCount + quantityToAdd).toString());
}, [cartItems,cartItemsCount]);

  return (
    <CartContext.Provider
      value={{
        cartItemsCount,
        setCartItemsCount,
        setCartItems,
        cartItems,
        addToCart,
        productQuantities,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
