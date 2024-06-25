// header
import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './index.Style';

export default function Index() {

  return (
    <S.Header>
      <S.Wrapper>
        <S.Logo>
          <Link to="/">LOGO</Link>
        </S.Logo>
        <S.Nav>
          <S.Booklist>
            <Link to = "/bookrew/booklist">책 목록</Link>
          </S.Booklist>
          <S.Board>
            <Link to="bookrew/bookboard">Board</Link>
          </S.Board>
        </S.Nav>
      </S.Wrapper>
    </S.Header>
  )
}
