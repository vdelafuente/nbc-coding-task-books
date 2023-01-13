import React, {useCallback, useMemo} from "react";
import {ListGroup} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {SHOPPING_CART} from "../redux/actions-types";
import CardCart from "./CardCart";

const CartList = props => {
  const {books} = props;

  const dispatch = useDispatch();

  const total = useMemo(
    () =>
      books.reduce((acc, el) => {
        acc += el.price * el.count;
        return acc;
      }, 0),
    [books]
  );

  const removeFromCart = id => {
    const handleBooks = books.filter(item => item.id !== id);
    dispatch({type: SHOPPING_CART, payload: handleBooks});
  };

  const useRemoveFromCart = useCallback(removeFromCart, [books]);

  return (
    <ListGroup variant="flush">
      {books.map(book => (
        <CardCart key={book.id} book={book} remove={useRemoveFromCart} />
      ))}
      <ListGroup.Item className="totalCart">
        <h5 className="ms-auto mb-0">Total: ${_.round(total, 2)}</h5>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default CartList;
