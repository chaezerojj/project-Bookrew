// bookcard - 책 설명 카드 
import React, { useEffect, useState, useRef } from 'react'
import { SERVER_URL } from '../../constants';
import { motion, useScroll } from "framer-motion";
import * as S from './BookCard.Style';

function BookCard() {
  const [books, setBooks] = useState([]);
  const ref = useRef(null);

  const { scrollXProgress } = useScroll({ container: ref });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SERVER_URL + "/api/bookrew/booklist");
        if (!response.ok) {
          throw new Error(`Http error!! status: ${response.status}`);
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("error fetching data, ", error)
      }
    };
    fetchData();
  }, []);


  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <p>{book.publisher}</p>
            <p>{book.category}</p>
          </li>
        ))}
      </ul>
      <S.Ul ref={ref}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </S.Ul>
    </div>
  )
}

export default BookCard;