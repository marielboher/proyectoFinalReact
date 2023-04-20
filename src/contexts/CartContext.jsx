import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addProduct = (producto) => {
    const productIndex = cartProducts.findIndex(
      (prod) => prod.id === producto.id
    );

    if (productIndex !== -1) {
      const updatedCart = [...cartProducts];
      updatedCart[productIndex].quantity += 1;
      setCartProducts(updatedCart);
    } else {
      const newCart = [...cartProducts, { ...producto, quantity: 1 }];
      setCartProducts(newCart);
    }
  };

  const decrease = (producto) => {
    const productRepeat = cartProducts.find((prod) => prod.id === producto.id);

    productRepeat.quantity !== 1 &&
      setCartProducts(
        cartProducts.map((prod) =>
          prod.id === producto.id
            ? { ...prod, quantity: productRepeat.quantity - 1 }
            : prod
        )
      );
  };

  const handleDelete = (id) => {
    const foundId = cartProducts.find((element) => element.id === id);

    const newCart = cartProducts.filter((element) => {
      return element !== foundId;
    });
    setCartProducts(newCart);
  };

  const getTotalQuantity = (products) => {
    let totalQuantity = 0;
    products.forEach((prod) => {
      totalQuantity += prod.quantity;
    });
    return totalQuantity;
  };

  const getTotalPrice = (products) => {
    let totalPrice = 0;
    products.forEach((prod) => {
      totalPrice += prod.price * prod.quantity;
    });
    return totalPrice;
  };

  const clear = () => {
    setCartProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        addProduct,
        cartProducts,
        decrease,
        handleDelete,
        getTotalQuantity,
        getTotalPrice,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
