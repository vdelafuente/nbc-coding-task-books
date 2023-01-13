import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Button, Image, ListGroup} from "react-bootstrap";

const CardCart = props => {
  const {book, remove} = props;

  const handleRemove = () => remove(book.id)

  return (
    <ListGroup.Item className="cardShopping">
      <Image src={book.imageUrl} rounded />
      <div className="cardDetail">
        <h5>{book.name}</h5>
        <p>Author: {book.author}</p>
        <p>{book.description}</p>
      </div>
      <div className="cardPrice">
        <div className="my-1">${book.price} x {book.count}</div>
      </div>
      <div className="cardControl">
        <Button variant="danger" onClick={handleRemove}>
          <FontAwesomeIcon icon={faTrash} />
          <span className="ms-2">Remove</span>
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default CardCart;
