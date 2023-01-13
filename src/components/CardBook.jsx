import React from "react";
import {Card, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";

const CardBook = props => {
  const {book, add} = props;

  const handleAdd = () => add(book);

  return (
    <Card className="cardBook">
      <Card.Img variant="top" src={book.imageUrl} />
      <Card.Body>
        <Card.Title>{book.name}</Card.Title>
        <Card.Text>{book.author}</Card.Text>
        <Card.Text>{book.description}</Card.Text>
        <div className="d-flex">
          <span className="me-auto">${book.price}</span>
          <span
            className={`ms-auto ${
              book.stock > 0 ? "text-info" : "text-danger"
            }`}
          >
            {book.stock} in stock
          </span>
        </div>
      </Card.Body>
      <Card.Footer>
        <Button
          className="text-primary"
          variant="light"
          onClick={handleAdd}
          disabled={book.stock < 1}
        >
          <FontAwesomeIcon icon={faCartPlus} />
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default CardBook;
