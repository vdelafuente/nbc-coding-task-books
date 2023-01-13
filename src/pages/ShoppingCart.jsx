import React from "react";
import { useSelector} from "react-redux";
import CartList from "../components/CartList";

const ShoppingCart = () => {
  const shoppingCart = useSelector(({shoppingCart}) => shoppingCart);

  return <CartList books={shoppingCart} />;
};

export default ShoppingCart;
