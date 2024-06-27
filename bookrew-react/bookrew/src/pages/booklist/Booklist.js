import React from 'react';
import BookCard from '../../components/Booklist/BookCard';
import * as S from './Booklist.Style';

function Booklist() {

  return (
    <S.BookCard>
        <BookCard />
    </S.BookCard>
  )
}

export default Booklist;