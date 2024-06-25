//footer
import React from 'react';
import * as S from './index.Style';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <S.Footer>
      <S.Wrapper>
        <S.Logo>
          <Link to="/">
            Bookrew
          </Link>
        </S.Logo>
        <S.CopyRight>
          CopyRight ⓒ Bookrew. All rights reserved.
        </S.CopyRight>
      </S.Wrapper>
    </S.Footer>
  )
}

export default Index;