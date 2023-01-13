import React, {useCallback} from "react";
import CardBook from "./CardBook";
import {Row, Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {SHOPPING_CART} from "../redux/actions-types";
import _ from "lodash";

const BookList = props => {
  const {books} = props;
  const shoppingCart = useSelector(({shoppingCart}) => shoppingCart);
  const dispatch = useDispatch();

  const addToShoppingCart = book => {
    const handleBooks = _.clone(shoppingCart);
    let newBook = {...book, count: 1};
    const index = shoppingCart.findIndex(item => item.id === newBook.id);
    if (index >= 0) {
      newBook = handleBooks[index];
      newBook.count += 1;
      handleBooks[index] = newBook;
    } else {
      handleBooks.unshift(newBook);
    }
    dispatch({type: SHOPPING_CART, payload: handleBooks});
  };

  const useAddToShoppingCart = useCallback(addToShoppingCart, [shoppingCart]);

  return (
    <Row>
      {books.map(book => (
        <Col key={book.id}>
          <CardBook book={book} add={useAddToShoppingCart} />
        </Col>
      ))}
    </Row>
  );
};

export default BookList;
