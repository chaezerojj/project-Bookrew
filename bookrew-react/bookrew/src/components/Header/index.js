// header
import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './index.Style';
import logoImage from '../../assets/images/logo.png'; // 이미지 파일 경로

export default function Index() {
  return (
    <S.Header>
      <S.Wrapper>
        <S.Logo>
          <Link to="/">
            <S.LogoImg src={logoImage} alt="Logo" />
          </Link>
        </S.Logo>
        <S.Nav>
          <S.Booklist>
            <Link to="/bookrew/booklist">BookList</Link>
          </S.Booklist>
          <S.Board>
            <Link to="/bookrew/bookboard">Board</Link>
          </S.Board>
        </S.Nav>
        <S.UserNav>
          <S.Login>
            <Link to="/bookrew/login">로그인</Link>
          </S.Login>
          <S.Join>
            <Link to="bookrew/signup">회원가입</Link>
          </S.Join>
        </S.UserNav>
      </S.Wrapper>
    </S.Header>
  );
}
