import React, { useState } from 'react';
import axios from 'axios';
import * as S from './BookCard.Style';
import { SERVER_URL } from '../../constants';

function AddBook({ fetchData }) {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    publisher: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${SERVER_URL}/api/bookrew/booklist`, newBook);
      console.log("Book added successfully:", response.data);
      setNewBook({
        title: '',
        author: '',
        publisher: '',
        category: ''
      });
      fetchData(); // 데이터 다시 불러오기
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input
        type="text"
        name="title"
        placeholder="제목"
        value={newBook.title}
        onChange={handleChange}
        required
      />
      <S.Input
        type="text"
        name="author"
        placeholder="작가"
        value={newBook.author}
        onChange={handleChange}
        required
      />
      <S.Input
        type="text"
        name="publisher"
        placeholder="출판사"
        value={newBook.publisher}
        onChange={handleChange}
        required
      />
      <S.Input
        type="text"
        name="category"
        placeholder="카테고리"
        value={newBook.category}
        onChange={handleChange}
        required
      />
      <S.Button type="submit">추가</S.Button>
    </S.Form>
  );
}

export default AddBook;
