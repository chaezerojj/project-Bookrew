import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../../constants';
import * as S from './BookCard.Style';
import AddBook from './AddBook';

function BookCard() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SERVER_URL + "/api/bookrew/booklist");
      if (!response.ok) {
        throw new Error(`Http error!! status: ${response.status}`);
      }
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${SERVER_URL}/api/bookrew/booklist/${id}`);
      console.log("Book deleted successfully:", response.data);
      fetchData(); // 데이터 다시 불러오기
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }

  return (
    <S.Wrapper>
      <S.Card>
        <S.TextWrapper>
          <S.Icon>📌</S.Icon>
          <S.TextBooklist>📕 책 목록 📕</S.TextBooklist>
          <S.TextInfo>💡 매주 책 2권을 업데이트합니다.</S.TextInfo>
        </S.TextWrapper>

        <AddBook fetchData={fetchData} />

        <S.Thead>
          <S.HeadUl>
            <S.HeadLi>제목</S.HeadLi>
            <S.HeadLi>작가</S.HeadLi>
            <S.HeadLi>출판사</S.HeadLi>
            <S.HeadLi>카테고리</S.HeadLi>
            <S.HeadLi>삭제</S.HeadLi>
          </S.HeadUl>
        </S.Thead>
        <S.Ul>
          {books.map((book) => (
            <S.Li key={book.id}>
              <S.BookTitle>{book.title}</S.BookTitle>
              <S.BookAuthor>{book.author}</S.BookAuthor>
              <S.BookPublisher>{book.publisher}</S.BookPublisher>
              <S.BookCategory>{book.category}</S.BookCategory>
              <S.DeleteButtonWrapper>
                <S.DeleteButton onClick={() => handleDelete(book.id)}>삭제</S.DeleteButton>
              </S.DeleteButtonWrapper>
            </S.Li>
          ))}
        </S.Ul>
      </S.Card>
    </S.Wrapper>
  );
}

export default BookCard;
