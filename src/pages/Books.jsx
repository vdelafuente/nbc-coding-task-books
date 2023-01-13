import React, {useEffect, useState} from "react";
import BookList from "../components/BookList";
import {fetchBooks} from "../assets/books";

const Books = () => {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    fetchBooks()
      .then(data => {
        const handleBooks = data.map((book, index) => ({
          ...book,
          imageUrl: `https://picsum.photos/200/100?random=${index + 1}`,
        }));
        setBooks(handleBooks);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    getBooks();
  }, []);

  return <BookList books={books} />;
};

export default Books;
